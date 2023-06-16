import axios from 'axios';
import { setDefaultHeader } from 'utils/axiosHeaders';
import CONFIG from 'config.js';

export default class AccountService {
  constructor() {
    setDefaultHeader();
  }
  getCurrentUser = async () => {
    return new Promise((resolve, reject) => {
      axios
        .get(CONFIG.API_BASEPATH + '/auth/getCurrentUser')
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  updateUser = (user) => {};
}
