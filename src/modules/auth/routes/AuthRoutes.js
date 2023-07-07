import Loadable from 'components/Loadable';
import { lazy } from 'react';

const AuthLogin = Loadable(lazy(() => import('modules/auth/pages/authentication/Login')));

const AuthRegister = Loadable(lazy(() => import('modules/auth/pages/authentication/Register')));

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('modules/auth/pages/home/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));

const Profile = Loadable(lazy(() => import('modules/auth/pages/Account/Profile/Profile')));

const ChangePassword = Loadable(lazy(() => import('modules/auth/pages/Account/ChangePassword/ChangePassword')));

const ChangeLanguage = Loadable(lazy(() => import('modules/auth/pages/Settings/Language/ChangeLanguage')));

const RoleList = Loadable(lazy(() => import('modules/auth/pages/Security/Role/RoleList')));

const PermissionList = Loadable(lazy(() => import('modules/auth/pages/Security/Permission/PermissionList')));

const UsersList = Loadable(lazy(() => import('modules/auth/pages/Users/UsersList')));

const AddOrEditUser = Loadable(lazy(() => import('modules/auth/pages/Users/AddOrEditUser')));

// ==============================|| MAIN ROUTING ||============================== //

const AuthRoutes = [
  {
    key: 'loginkey',
    path: 'login',
    element: <AuthLogin />
  },
  {
    key: 'registerkey',
    path: 'register',
    element: <AuthRegister />
  },
  {
    key: 'dashboard',
    path: '/dashboard',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <DashboardDefault />
  },
  {
    key: 'sample-page',
    path: 'sample-page',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <SamplePage />
  },
  {
    key: 'typography',
    path: 'typography',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <Typography />
  },
  {
    key: 'profile',
    path: 'profile',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <Profile />
  },
  {
    key: 'change-password',
    path: 'changepassword',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <ChangePassword />
  },
  {
    key: 'change-language',
    path: 'changelanguage',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <ChangeLanguage />
  },
  {
    key: 'role-list',
    path: 'rolelist',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <RoleList />
  },
  {
    key: 'permission-list',
    path: 'permissionlist',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <PermissionList />
  },
  {
    key: 'users-list',
    path: 'userslist',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <UsersList />
  },
  {
    key: 'addOrEditUser',
    path: 'User/:operation/:id',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <AddOrEditUser />
  }
];

export default AuthRoutes;
