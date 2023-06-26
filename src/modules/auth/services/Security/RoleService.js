import axios from 'axios';
import { setDefaultHeader } from 'utils/axiosHeaders';
import CONFIG from 'config.js';

export default class RoleService {
  constructor() {
    setDefaultHeader();
  }
  getRoleList = async (searchParams) => {
    return new Promise((resolve, reject) => {
      axios
        .post(CONFIG.API_BASEPATH + '/auth/GetRoleList', searchParams)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.Errors);
        });
    });
  };
  getRoleById = async (roleId) => {
    return new Promise((resolve, reject) => {
      axios
        .get(CONFIG.API_BASEPATH + '/auth/getRoleById', { params: { roleId: roleId } })
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => {
          reject(error.Errors);
        });
    });
  };
  addRole = async (role) => {
    return new Promise((resolve, reject) => {
      axios
        .post(CONFIG.API_BASEPATH + '/auth/addRole', role)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.Errors);
        });
    });
  };
  updateRole = async (role) => {
    return new Promise((resolve, reject) => {
      axios
        .post(CONFIG.API_BASEPATH + '/auth/updateRole', role)
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => {
          reject(error.Errors);
        });
    });
  };
  deleteRole = async (roleId) => {
    return new Promise((resolve, reject) => {
      axios
        .get(CONFIG.API_BASEPATH + '/auth/deleteRole', { params: { roleId: roleId } })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.Errors);
        });
    });
  };
}
