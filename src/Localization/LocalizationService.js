import axios from 'axios';
import LocalStorageService from 'utils/LocalStorageService';
import CONFIG from 'config.js';
import AuthenticationService from 'modules/auth/services/Authentication/AuthenticationService';
import { setAuthenticationHeader } from 'utils/axiosHeaders';

export default class LocalizationService {
  localStorageService;
  authenticateService;
  constructor() {
    this.localStorageService = new LocalStorageService(CONFIG.LOCALIZATION_STORAGE_NAME);
    this.authenticateService = new AuthenticationService();
  }

  getInitiali18n = () => {
    return new Promise((resolve) => {
      this.getCurrentLanguage().then((language) => {
        debugger;
        let resource = require('./resources/' + language);
        resolve({
          resource,
          lng: language,
          // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
          // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
          // if you're using a language detector, do not define the lng option

          interpolation: {
            escapeValue: false // react already safes from xss
          }
        });
      });
    });
  };

  getCurrentLanguage = () => {
    return new Promise((resolve) => {
      let localItem = this.localStorageService.getItem();
      if (localItem) {
        return localItem;
      } else {
        this.authenticateService.isAuthenticated().then((isAuthenticate) => {
          if (isAuthenticate) {
            setAuthenticationHeader(this.authenticateService.getJwt());
            axios
              .get(CONFIG.API_BASEPATH + '/Auth/GetDefaultLanguage')
              .then((response) => {
                if (response.data) {
                  this.localStorageService.AddItem(response);
                } else {
                  resolve(this.getDefaultLanguage());
                }
              })
              .catch((error) => {
                console.log(error);
                resolve(this.getDefaultLanguage());
              });
          } else {
            resolve(this.getDefaultLanguage());
          }
        });
      }
    });
  };

  setCurrentLanguage = async (lang) => {
    let isAuthenticate = this.authenticateService.isAuthenticated();
    if (isAuthenticate) {
      this.localStorageService.AddItem(response);

      setAuthenticationHeader(this.authenticateService.getJwt());
      axios.get(CONFIG.API_BASEPATH + '/Auth/SetDefaultLanguage', { defaultLanguage: lang }).catch((error) => {
        console.log(error);
      });
    } else {
      this.localStorageService.AddItem(lang);
    }
  };

  getDefaultLanguage = async () => {
    return CONFIG.DEFAULT_LANGUAGE;
  };

  getCurrentResource = (lang) => {
    return new Promise((resolve) => {
      if (lang) {
        let resources = require('./resources/' + lang);
        resolve(resources);
      } else {
        this.getCurrentLanguage().then((response) => {
          let resources = require('./resources/' + response);
          resolve(resources);
        });
      }
    });
  };
}
