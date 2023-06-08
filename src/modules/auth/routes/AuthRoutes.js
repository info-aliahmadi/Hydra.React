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
    path: 'dashboard',
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
  }
];

export default AuthRoutes;
