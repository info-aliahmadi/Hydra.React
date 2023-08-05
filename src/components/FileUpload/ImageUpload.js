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
import FileUploadService from 'modules/cms/services/FileUploadService';
import axios from 'axios';

const ImageUpload = (props) => {
  const [files, setFiles] = useState([]);
  const [t, i18n] = useTranslation();

  const uploadUrl = CONFIG.API_BASEPATH + '/FileStorage/UploadFile';

  var fileUploadService = new FileUploadService();
  async function fetchBlob(url) {
    const response = await fetch(url);

    // Here is the significant part
    // reading the stream as a blob instead of json
    return response.blob();
  }
  const loadImage = async (fileId) => {
    fileUploadService.getFileInfoById(fileId).then((fileInfo) => {
      let imageUrl = '/' + fileInfo.directory + fileInfo.fileName;
      let image = CONFIG.UPLOAD_BASEPATH + fileInfo.directory + fileInfo.fileName;

      axios.defaults.headers.post['Content-Type'] = 'application/octet-stream';
      axios
        .get(imageUrl, {
          responseType: 'blob'
        })
        .then((response) => {
          debugger;
          let metadata = {
            name: fileInfo.fileName,
            type: 'image/jpeg',
            size: fileInfo.size
          };
          let file = new File([response.data], fileInfo.fileName, metadata);

          setFiles([
            {
              // the server file reference
              source: fileInfo.id,
              // set type to local to indicate an already uploaded file
              options: {
                type: 'local',
                // optional stub file information
                file: file,
                // pass poster property
                metadata: {
                  poster: image
                }
              }
            }
          ]);
        })
        .catch((error) => {
          console.error(error);
        });
      // debugger;
      //   axios.get(imageUrl, { responseType: 'blob', contentType: 'application/octet-stream' }).then((response) => {
      //     debugger;
      //     let data = response.blob();
      //     let metadata = {
      //       name: fileInfo.fileName,
      //       type: 'image/jpeg',
      //       size: fileInfo.size
      //     };
      //     let file = new File([response.data], fileInfo.fileName, metadata);

      //     setFiles([
      //       {
      //         // the server file reference
      //         source: fileInfo.id,
      //         // set type to local to indicate an already uploaded file
      //         options: {
      //           type: 'local',
      //           // optional stub file information
      //           file: file,
      //           // pass poster property
      //           metadata: {
      //             poster: imageUrl
      //           }
      //         }
      //       }
      //     ]);
      //     resolve(response.data);
      //   });
    });
  };
  const uploadImage = async (file) => {
    debugger;
    setFiles(file);
  };
  useEffect(() => {
    if (props.value > 0) loadImage(props.value);
  }, [props.value]);

  return (
    <FilePond
      id={props.id ? props.id : 'fileId'}
      allowImagePreview={true}
      allowDownloadByUrl={true}
      allowFilePoster={true}
      allowFileTypeValidation={true}
      acceptedFileTypes={['image/png', 'image/jpeg']}
      labelFileTypeNotAllowed={t('validation.fileUpload.labelFileTypeNotAllowed')}
      fileValidateTypeLabelExpectedTypes={t('validation.fileUpload.fileValidateTypeLabelExpectedTypes')}
      allowFileSizeValidation={true}
      minFileSize={props.minFileSize ? props.minFileSize : '5KB'}
      maxFileSize={props.maxFileSize ? props.maxFileSize : '200MB'}
      labelMaxFileSizeExceeded={t('validation.fileUpload.labelMaxFileSizeExceeded')}
      labelMaxFileSize={t('validation.fileUpload.labelMaxFileSize')}
      labelMinFileSizeExceeded={t('validation.fileUpload.labelMinFileSizeExceeded')}
      labelMinFileSize={t('validation.fileUpload.labelMinFileSize')}
      allowReplace={true}
      instantUpload={true}
      allowMultiple={false}
      credits={false}
      name="file" /* sets the file input name, it's filepond by default */
      labelIdle={t('validation.fileUpload.imagePreviewDescription')}
      files={files}
      onupdatefiles={uploadImage}
      server={{
        url: uploadUrl,
        headers: { Authorization: setTokenBearer(), UploadAction: 'Rename' }
      }}
      onprocessfile={(error, file) => {
        let response = JSON.parse(file.serverId);
        let fileInfo = response.data;

        let imageUrl = CONFIG.UPLOAD_BASEPATH + fileInfo.directory + fileInfo.fileName;
        props.onChange('imagePreviewId', fileInfo.id);
      }}
    />
  );
};
export default ImageUpload;
