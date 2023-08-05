import axios from 'axios';
import { setDefaultHeader } from 'utils/axiosHeaders';
import CONFIG from 'config.js';

export default class FileUploadService {
  constructor() {
    setDefaultHeader();
  }
  getFilesList = async () => {
    return new Promise((resolve, reject) => {
      axios
        .get(CONFIG.API_BASEPATH + '/FileStorage/GetFilesList')
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  getFileInfoById = async (fileId) => {
    return new Promise((resolve, reject) => {
      axios
        .get(CONFIG.API_BASEPATH + '/FileStorage/GetFileInfo', { params: { fileId: fileId } })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  getFileInfoByName = async (fileName) => {
    return new Promise((resolve, reject) => {
      axios
        .get(CONFIG.API_BASEPATH + '/FileStorage/GetFileInfoByName', { params: { fileName: fileName } })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  uploadFile = async (file, uploadAction) => {
    return new Promise((resolve, reject) => {
      axios
        .post(CONFIG.API_BASEPATH + '/FileStorage/UploadFile', file, {
          headers: {
            UploadAction: uploadAction
          }
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  UploadBase64File = async (file, uploadAction) => {
    return new Promise((resolve, reject) => {
      axios
        .post(CONFIG.API_BASEPATH + '/FileStorage/UploadBase64File', file, {
          headers: {
            UploadAction: uploadAction
          }
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  uploadLargeFile = async (file, uploadAction) => {
    return new Promise((resolve, reject) => {
      axios
        .post(CONFIG.API_BASEPATH + '/FileStorage/UploadLargeFile', file, {
          headers: {
            UploadAction: uploadAction
          }
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  deleteFile = async (fileId) => {
    return new Promise((resolve, reject) => {
      axios
        .get(CONFIG.API_BASEPATH + '/FileUpload/DeleteFile', { params: { fileId: fileId } })
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
