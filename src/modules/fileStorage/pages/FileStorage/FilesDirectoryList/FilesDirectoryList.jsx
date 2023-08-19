// material-ui
import { Avatar, List, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Folder } from '@mui/icons-material';
import Notify from 'components/@extended/Notify';
import FileStorageService from 'modules/fileStorage/services/FileStorageService';
import { fileSizeViewer } from 'utils/fileSizeViewer';
import _ from 'lodash';
// ===============================|| COLOR BOX ||=============================== //

function FilesCategoryList() {
  const [t, i18n] = useTranslation();

  const [directories, setDirectories] = useState([]);

  const [notify, setNotify] = useState({ open: false });

  let fileStorageService = new FileStorageService();

  const loadDirectories = () => {
    fileStorageService
      .getDirectoriesList()
      .then((result) => {
        setDirectories(result.data);
      })
      .catch((error) => {
        setNotify({ open: true, type: 'error', description: error });
      });
  };

  useEffect(() => {
    loadDirectories();
  }, []);

  return (
    <>
      <Notify notify={notify} setNotify={setNotify}></Notify>
      <MainCard title={t('pages.cards.filesDirectory')}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {directories.map((directory) => (
            <ListItemButton key={'dir-' + directory.directoryName} href={'/filesDirectory/' + directory.directoryName}>
              <ListItemAvatar>
                <Avatar>
                  <Folder />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={_.capitalize(directory.directoryName)}
                secondary={
                  directory.filesCount +
                  ' ' +
                  (directory.filesCount > 1 ? t('fields.fileStorage.files') : t('fields.fileStorage.file')) +
                  ' / ' +
                  fileSizeViewer(directory.directorySize, true)
                }
              />
            </ListItemButton>
          ))}
        </List>
      </MainCard>
    </>
  );
}

export default FilesCategoryList;
