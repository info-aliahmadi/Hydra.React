import axios from 'axios';
import CONFIG from 'config.js';

export default class HomeService {
  constructor() {}

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
  getArticles = async (searchInput, categoryName, tagName, pageIndex, pageSize) => {
    return new Promise((resolve, reject) => {
      axios
        .get(CONFIG.API_BASEPATH + '/cms/GetArticlesList', {
          params: { searchInput: searchInput, categoryName: categoryName, tagName: tagName, pageIndex: pageIndex, pageSize: pageSize }
        })
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}
