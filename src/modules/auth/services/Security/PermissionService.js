import axios from 'axios';
import { setDefaultHeader } from 'utils/axiosHeaders';
import CONFIG from 'config.js';

export default class PermissionService {
  constructor() {
    setDefaultHeader();
  }
  getPermissionList = async (searchParams) => {
    return new Promise((resolve, reject) => {
      axios
        .post(CONFIG.API_BASEPATH + '/auth/GetPermissionList', searchParams)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.Errors);
        });
    });
  };
  getPermissionById = async (permissionId) => {
    return new Promise((resolve, reject) => {
      axios
        .get(CONFIG.API_BASEPATH + '/auth/getPermissionById', { params: { permissionId: permissionId } })
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => {
          reject(error.Errors);
        });
    });
  };
  getPermissionsByName = async (name) => {
    return new Promise((resolve, reject) => {
      axios
        .get(CONFIG.API_BASEPATH + '/auth/GetPermissionsByName', { params: { name: name } })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.Errors);
        });
    });
  };
  addPermission = async (permission) => {
    return new Promise((resolve, reject) => {
      axios
        .post(CONFIG.API_BASEPATH + '/auth/addPermission', permission)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.Errors);
        });
    });
  };
  updatePermission = async (permission) => {
    return new Promise((resolve, reject) => {
      axios
        .post(CONFIG.API_BASEPATH + '/auth/updatePermission', permission)
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => {
          reject(error.Errors);
        });
    });
  };
  deletePermission = async (permissionId) => {
    debugger;
    return new Promise((resolve, reject) => {
      axios
        .get(CONFIG.API_BASEPATH + '/auth/deletePermission', { params: { permissionId: permissionId } })
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
