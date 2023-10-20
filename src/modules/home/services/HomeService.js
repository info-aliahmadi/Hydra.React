import axios from 'axios';
import { setDefaultHeader } from 'utils/axiosHeaders';
import CONFIG from 'config.js';

export default class HomeService {
  constructor() {
    setDefaultHeader();
  }

  getMenu = async () => {
    return new Promise((resolve, reject) => {
      axios
        .get(CONFIG.API_BASEPATH + '/cms/getMenu')
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}
