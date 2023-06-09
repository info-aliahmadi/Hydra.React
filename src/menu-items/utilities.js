// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined,
  LoginOutlined,
  ProfileOutlined
} from '@ant-design/icons';
// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  permission: 'AUTH_GET.PERMISSION.LIST',
  children: [
    {
      id: 'util-typography',
      title: 'Typography',
      type: 'item',
      url: '/typography',
      icon: icons.FontSizeOutlined,
      permission: 'AUTH_GET.PERMISSION.LIST'
    },
    {
      id: 'util-color',
      title: 'Color',
      type: 'item',
      url: '/color',
      icon: icons.BgColorsOutlined,
      permission: 'AUTH_GET.PERMISSION.LIST'
    },
    {
      id: 'util-shadow',
      title: 'Shadow',
      type: 'item',
      url: '/shadow',
      icon: icons.BarcodeOutlined,
      permission: 'AUTH_GET.PERMISSION.LIST'
    },
    {
      id: 'ant-icons',
      title: 'Ant Icons',
      type: 'item',
      url: '/icons/ant',
      icon: icons.AntDesignOutlined,
      breadcrumbs: false,
      permission: 'AUTH_GET.PERMISSION.LIST'
    },
    {
      id: 'login',
      title: 'Login',
      type: 'item',
      url: '/login',
      icon: icons.LoginOutlined,
      target: true,
      permission: 'AUTH_GET.PERMISSION.LIST'
    },
    {
      id: 'register',
      title: 'Register',
      type: 'item',
      url: '/register',
      icon: icons.ProfileOutlined,
      target: true,
      permission: 'AUTH_GET.PERMISSION.LIST'
    }
  ]
};

export default utilities;
