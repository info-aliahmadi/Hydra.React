// assets
import { Storage } from '@mui/icons-material';
// icons
const icons = {
  Storage
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  permission: 'AUTH_GET.PERMISSION.LIST',
  children: [
    {
      id: 'fileStorage',
      title: 'Storage',
      type: 'item',
      url: '/filesDirectory',
      icon: icons.Storage,
      breadcrumbs: false,
      permission: 'AUTH_GET.PERMISSION.LIST'
    }
  ]
};

export default pages;
