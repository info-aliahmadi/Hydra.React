import axios from 'axios';
import { setDefaultHeader } from 'utils/axiosHeaders';
import CONFIG from 'config.js';

export default class UsersService {
  constructor() {
    setDefaultHeader();
  }
  getUserList = async (searchParams) => {
    return new Promise((resolve, reject) => {
      axios
        .post(CONFIG.API_BASEPATH + '/auth/GetUserList', searchParams)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.Errors);
        });
    });
  };
  getUserById = async (userId) => {
    return new Promise((resolve, reject) => {
      axios
        .get(CONFIG.API_BASEPATH + '/auth/getUserById', { params: { userId: userId } })
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => {
          reject(error.Errors);
        });
    });
  };
  addUser = async (user) => {
    return new Promise((resolve, reject) => {
      axios
        .post(CONFIG.API_BASEPATH + '/auth/addUser', user)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.Errors);
        });
    });
  };
  updateUser = async (user) => {
    return new Promise((resolve, reject) => {
      axios
        .post(CONFIG.API_BASEPATH + '/auth/updateUser', user)
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => {
          reject(error.Errors);
        });
    });
  };
  deleteUser = async (userId) => {
    return new Promise((resolve, reject) => {
      axios
        .get(CONFIG.API_BASEPATH + '/auth/deleteUser', { params: { userId: userId } })
        .then((response) => {
          debugger;
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.Errors);
        });
    });
  };
}
