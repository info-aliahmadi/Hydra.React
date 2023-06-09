import axios from 'axios';
import CONFIG from 'config.js';
import AuthenticationService from 'modules/auth/services/Authentication/AuthenticationService';
import { setAuthenticationHeader } from 'utils/axiosHeaders';

export default class LocalizationService {
  authenticateService;
  constructor() {
    this.authenticateService = new AuthenticationService();
  }

  getCurrentLanguage = async () => {
    let result = new Promise((resolve, reject) => {
      this.authenticateService.isAuthenticated().then((isAuthenticate) => {
        if (isAuthenticate) {
          setAuthenticationHeader(this.authenticateService.getJwt());
          axios
            .get(CONFIG.API_BASEPATH + '/Auth/GetDefaultLanguage')
            .then((response) => {
              if (response.data) {
                resolve(response.data);
              } else {
                resolve(this.getDefaultLanguage());
              }
            })
            .catch((error) => {
              console.log(error);
              reject(error);
            });
        } else {
          resolve(this.getDefaultLanguage());
        }
      });
    });
    return await result;
  };

  setCurrentLanguage = async (i18n, theme, lang) => {
    i18n.changeLanguage(lang.key);
    theme.setDirection(i18n.dir(lang.key));
    let isAuthenticate = this.authenticateService.isAuthenticated();
    if (isAuthenticate) {
      setAuthenticationHeader(this.authenticateService.getJwt());
      axios.get(CONFIG.API_BASEPATH + '/Auth/SetDefaultLanguage', { params: { defaultLanguage: lang.key } }).catch((error) => {
        console.log(error);
      });
    }
  };

  getDefaultLanguage = async () => {
    return CONFIG.DEFAULT_LANGUAGE;
  };
}
