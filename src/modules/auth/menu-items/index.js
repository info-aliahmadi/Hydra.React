// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';
import { Badge, EnhancedEncryption, Security } from '@mui/icons-material';
// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
  Badge,
  EnhancedEncryption,
  Security
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'Authentication',
  type: 'group',
  permission: 'AUTH_GET.PERMISSION.LIST',
  children: [
    {
      id: 'roles',
      title: 'Roles',
      type: 'item',
      url: '/roleList',
      icon: icons.Badge,
      breadcrumbs: false,
      permission: 'AUTH_GET.PERMISSION.LIST'
    },
    {
      id: 'permissions',
      title: 'Permissions',
      type: 'item',
      url: '/PermissionList',
      icon: icons.EnhancedEncryption,
      breadcrumbs: false,
      permission: 'AUTH_GET.PERMISSION.LIST'
    },
    {
      id: 'access',
      title: 'Access',
      type: 'item',
      url: '/AccessList',
      icon: icons.Security,
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

export default pages;
