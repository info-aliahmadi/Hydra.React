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

const ImageUpload = ({ id, name, setFieldValue, value, minFileSize, maxFileSize, disabled, filePosterMaxHeight }) => {
  const [files, setFiles] = useState([]);
  const [t, i18n] = useTranslation();

  const uploadUrl = CONFIG.API_BASEPATH + '/FileStorage/UploadFile';

  var fileUploadService = new FileUploadService();

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

  const loadImage = async (fileId) => {
    fileUploadService.getFileInfoById(fileId).then((fileInfo) => {
      let imageUrl = CONFIG.UPLOAD_BASEPATH + fileInfo.directory + fileInfo.fileName;
      setFiles([
        {
          // the server file reference
          source: fileInfo.id,
          // set type to local to indicate an already uploaded file
          options: {
            type: 'local',
            // optional stub file information
            file: {
              name: fileInfo.fileName,
              type: 'image/jpeg',
              size: fileInfo.size,
              url: imageUrl
            },
            // pass poster property
            metadata: {
              poster: imageUrl
            }
          }
        }
      ]);
    });
  };
  const onupdatefiles = async (file) => {
    // setFieldValue(id, file[0]?.serverId || '');
    setFiles(file);
  };
  useEffect(() => {
    if (value > 0) {
      loadImage(value);
    } else {
      setFiles([]);
    }
  }, [value]);

  return (
    <FilePond
      disabled={disabled}
      id={id ? id : 'fileId'}
      allowImagePreview={true}
      filePosterMaxHeight={filePosterMaxHeight ?? 'auto'}
      allowDownloadByUrl={true}
      downloadFunction={downloadFunction}
      allowFilePoster={true}
      allowFileTypeValidation={true}
      acceptedFileTypes={['image/png', 'image/jpeg']}
      labelFileTypeNotAllowed={t('validation.fileUpload.labelFileTypeNotAllowed')}
      fileValidateTypeLabelExpectedTypes={t('validation.fileUpload.fileValidateTypeLabelExpectedTypes')}
      allowFileSizeValidation={true}
      minFileSize={minFileSize ? minFileSize : '5KB'}
      maxFileSize={maxFileSize ? maxFileSize : '200MB'}
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
      onupdatefiles={onupdatefiles}
      server={{
        url: uploadUrl,
        headers: { Authorization: setTokenBearer(), UploadAction: 'Rename' }
      }}
      onprocessfile={(error, file) => {
        let response = JSON.parse(file.serverId);
        let fileInfo = response.data;

        setFieldValue(id, fileInfo.id);
      }}
    />
  );
};
export default ImageUpload;
