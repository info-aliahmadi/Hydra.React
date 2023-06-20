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
    setDefaultHeader('multipart/form-data');
    // const obj = {
    //   hello: "world"
    // };
    debugger;
    const data = new FormData();
    data.append('fullName', user.fullName);
    data.append('userName', user.userName);
    data.append('phoneNumber', user.phoneNumber);
    data.append('email', user.email);
    data.append('avatarFile', user.avatarFile);
    // setDefaultHeader('application/octet-stream');
    return new Promise((resolve, reject) => {
      axios
        .post(CONFIG.API_BASEPATH + '/auth/updateCurrentUser', data)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}
