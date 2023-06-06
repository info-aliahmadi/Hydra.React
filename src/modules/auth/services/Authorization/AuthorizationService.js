import axios from 'axios';
import LocalStorageService from 'utils/LocalStorageService';
import { APP_CONFIG } from 'utils/appConfig';
import { setAuthenticationHeader } from 'utils/axiosHeaders';
import AuthenticationService from '../Authentication/AuthenticationService';

export default class AuthorizationService {
  storageService;
  constructor() {
    this.storageService = new LocalStorageService(APP_CONFIG.AUTHORIZATION_STORAGE_NAME);
  }

  isAuthorized = async (permission) => {
    return new Promise((resolve, reject) => {
      this.getUserPermissions()
        .then((permissions) => {
          let result = permissions?.findIndex(function (element) {
            return element.name === permission;
          });
          resolve(result >= 0 ? true : false);
        })
        .catch((error) => {
          console.log(error);
          reject(false);
        });
    });
  };

  getUserPermissions = async () => {
    return new Promise((resolve, reject) => {
      var permissions = this.storageService.getItem();
      if (permissions == null) {
        let authenticationService = new AuthenticationService();
        var jwt = authenticationService.getJwt();
        if (jwt && jwt.length > 0) {
          if (window.sessionStorage.getItem('auth') == 'OnLoad') {
            reject(null);
          } else {
            window.sessionStorage.setItem('auth', 'OnLoad');

            setAuthenticationHeader(jwt);
            axios
              .get(APP_CONFIG.API_BASEPATH + '/Auth/GetPermissionsOfCurrentUser')
              .then((response) => {
                window.sessionStorage.setItem('auth', 'Loaded');
                this.storageService.AddItem(response.data);
                resolve(JSON.parse(response.data));
              })
              .catch((error) => {
                console.error(error);
                resolve(null);
              });
          }
        } else {
          resolve(null);
        }
      } else {
        resolve(permissions);
      }
    });
  };

  refreshUserPermissions = async () => {
    axios
      .get(APP_CONFIG.API_BASEPATH + '/Auth/GetPermissionsOfCurrentUser')
      .then((response) => {
        this.storageService.AddItem(response.data);
        this.redirectToDashboard();
      })
      .catch((error) => {
        return error.message;
      });
  };
  redirectToLogin = () => {
    window.location.replace(APP_CONFIG.LOGIN_PATH);
  };
}
