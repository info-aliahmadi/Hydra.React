// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';
// Import the plugin code
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFilePoster from 'filepond-plugin-file-poster';
import FilePondPluginGetFile from 'filepond-plugin-get-file';
registerPlugin(
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType, // Image editor
  FilePondPluginImagePreview,
  FilePondPluginFilePoster,
  FilePondPluginGetFile
);
// Import FilePond styles
import 'assets/css/filepond.min.css';
import 'assets/css/filepond-plugin-image-preview.css';
import 'assets/css/filepond-plugin-file-poster.min.css';
import 'assets/css/filepond-plugin-get-file.min.css';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { setTokenBearer } from 'utils/axiosHeaders';
import CONFIG from 'config';
import FileStorageService from 'modules/fileStorage/services/FileStorageService';

const FileUpload = ({
  id,
  name,
  setFieldValue,
  value,
  minFileSize,
  maxFileSize,
  disabled,
  filePosterMaxHeight,
  allowMultiple,
  fileType
}) => {
  const [files, setFiles] = useState([]);
  const [values, setValues] = useState(value);
  const [t, i18n] = useTranslation();
  const uploadUrl = CONFIG.API_BASEPATH + '/FileStorage/UploadFile';

  var fileUploadService = new FileStorageService();

  function downloadFunction(item) {
    // create a temporary hyperlink to force the browser to download the file
    const a = document.createElement('a');
    let url;
    if (item.source > 0) {
      window.open(item.file.url);
      return;
      // url = item.file.url;
    } else {
      url = window.URL.createObjectURL(item.file);
    }
    document.body.appendChild(a);
    a.style.display = 'none';
    a.href = url;
    a.download = item.file.name;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

  const deleteImage = async (fileId) => {
    fileUploadService.deleteFile(fileId).then((result) => {
      return result;
    });
  };

  const loadImage = async (fileId) => {
    fileUploadService.getFileInfoById(fileId).then((fileInfo) => {
      debugger;
      let fileUrl = CONFIG.UPLOAD_BASEPATH + fileInfo.directory + fileInfo.fileName;
      // let imagePosterUrl = CONFIG.UPLOAD_BASEPATH + fileInfo.directory;
      // let isVideo = CONFIG.VIDEOS_EXTENSIONS.some((extension) => extension == fileInfo.extension);
      // if (isVideo) {
      //   imagePosterUrl += fileInfo.thumbnail;
      // } else {
      //   imagePosterUrl += fileInfo.fileName;
      // }
      setFiles({
        // the server file reference
        source: fileInfo.id,
        // set type to local to indicate an already uploaded file
        options: {
          type: 'local',
          // optional stub file information
          file: {
            name: fileInfo.fileName,
            type: fileType + '/*',
            size: fileInfo.size,
            url: fileUrl
          }
          // pass poster property
          // metadata: {
          //   poster: imagePosterUrl
          // }
        }
      });
    });
  };
  const onupdatefiles = async (fileItems) => {
    if (fileItems?.serverId) {
      let response = JSON.parse(fileItems?.serverId);
      if (response.succeeded) {
        // let serverId = response.data?.id;
        // if (setFieldValue) setFieldValue(id, serverId || undefined);
        setFiles({
          files: fileItems.map((fileItem) => fileItem.file)
        });
      }
    }
  };
  // useEffect(() => {
  //   if (value > 0) {
  //     loadImage(value);
  //   } else {
  //     setFiles([]);
  //   }
  // }, [value]);
  const getError = (errorCode) => {
    switch (errorCode) {
      case 500:
        return 'Operation Failed';
      case 501:
        return 'Invalid Validation';
      case 404:
        return 'Not Found';
      case 401:
        return 'Is Not Authorized';
      case 502:
        return 'File Type Is Not Allowed';
      case 503:
        return 'It"s Duplicate';
      case 504:
        return 'Exception Throwed';
      case 505:
        return 'File Is Too Large';
      case 506:
        return 'File Is Too Small';
      default:
        return 'Error During Upload';
    }
  };
  return (
    <FilePond
      disabled={disabled}
      id={id ? id : 'fileId'}
      // allowImagePreview={true}
      // filePosterMaxHeight={filePosterMaxHeight ?? 'auto'}
      allowDownloadByUrl={true}
      downloadFunction={downloadFunction}
      // allowFilePoster={true}
      allowFileTypeValidation={true}
      acceptedFileTypes={fileType ? fileType : undefined}
      allowFileSizeValidation={true}
      minFileSize={minFileSize ? minFileSize : '1KB'}
      //maxFileSize={maxFileSize ? maxFileSize : '500MB'}
      // labelMaxFileSizeExceeded={t('validation.fileUpload.labelMaxFileSizeExceeded')}
      // labelMaxFileSize={t('validation.fileUpload.labelMaxFileSize')}
      labelMinFileSizeExceeded={t('validation.fileUpload.labelMinFileSizeExceeded')}
      labelMinFileSize={t('validation.fileUpload.labelMinFileSize')}
      labelIdle={t('validation.fileUpload.imagePreviewDescription')}
      labelFileTypeNotAllowed={t('validation.fileUpload.labelFileTypeNotAllowed')}
      fileValidateTypeLabelExpectedTypes={t('validation.fileUpload.fileValidateTypeLabelExpectedTypes')}
      allowReplace={true}
      instantUpload={true}
      allowMultiple={(allowMultiple && true) ?? false}
      credits={false}
      name="file" /* sets the file input name, it's filepond by default */
      files={files}
      onupdatefiles={onupdatefiles}
      server={{
        url: uploadUrl,
        headers: { Authorization: setTokenBearer(), UploadAction: 'Rename' }
      }}
      onprocessfile={(error, file) => {
        let response = JSON.parse(file?.serverId);
        if (response?.succeeded) {
          let fileInfo = response?.data;
          if (setFieldValue) {
            if (allowMultiple) {
              let newValue = values;
              newValue.push(fileInfo?.id);
              setFieldValue(id, newValue);
              setValues((old) => [...old, fileInfo?.id]);
            } else {
              setFieldValue(newValue);
            }
          }
        }
      }}
      onremovefile={(error, file) => {
        debugger;
        let response = JSON.parse(file?.serverId);
        if (response?.succeeded) {
          let fileInfo = response?.data;
          if (setFieldValue) {
            deleteImage(fileInfo?.id);
            if (allowMultiple) {
              let newValue = values;
              const index = newValue.indexOf(fileInfo?.id);
              newValue.splice(index, 1);
              setFieldValue(id, newValue);
              setValues(newValue);
            } else {
              setFieldValue(id, fileInfo?.id);
            }
          }
        }
      }}
      labelFileProcessingError={(error) => {
        return getError(error.code);
      }}
    />
  );
};
export default FileUpload;
