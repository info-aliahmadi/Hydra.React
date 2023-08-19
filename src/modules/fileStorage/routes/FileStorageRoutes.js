import Loadable from 'components/Loadable';
import { lazy } from 'react';

const FilesDirectoryList = Loadable(lazy(() => import('modules/fileStorage/pages/FileStorage/FilesDirectoryList')));

const FilesList = Loadable(lazy(() => import('modules/fileStorage/pages/FileStorage/FilesList')));

// ==============================|| MAIN ROUTING ||============================== //

const FileStorageRoutes = [
  {
    key: 'filesDirectory',
    path: 'filesDirectory',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <FilesDirectoryList />
  },
  {
    key: 'filesOfDirectory',
    path: 'filesDirectory/:directory/',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <FilesList />
  }
];

export default FileStorageRoutes;
