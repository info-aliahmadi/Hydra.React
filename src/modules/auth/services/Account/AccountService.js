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

  updateCurrentUser = async (user) => {
    debugger;
    let ssss = JSON.stringify(user);
    return new Promise((resolve, reject) => {
      axios
        .post(CONFIG.API_BASEPATH + '/auth/updateCurrentUser', {
          fullName: user.fullName,
          email: user.email,
          userName: user.userName,
          phoneNumber: user.phoneNumber
        })
        .then((response) => {
          debugger;
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}
