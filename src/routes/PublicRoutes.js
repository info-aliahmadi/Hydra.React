import Loadable from 'components/Loadable';
import { lazy } from 'react';

const AuthLogin = Loadable(lazy(() => import('modules/auth/pages/authentication/Login')));

const AuthRegister = Loadable(lazy(() => import('modules/auth/pages/authentication/Register')));

const Home = Loadable(lazy(() => import('pages/Home/index')));

const MinimalLayout = Loadable(lazy(() => import('layout/MinimalLayout')));

// ==============================|| MAIN ROUTING ||============================== //

const PublicRoutes = [
  {
    key: 'homePage',
    path: '/',
    element: <Home />
  },
  {
    key: 'loginkey',
    path: 'login',
    layout: <MinimalLayout />,
    element: <AuthLogin />
  },
  {
    key: 'registerkey',
    path: 'register',
    layout: <MinimalLayout />,
    element: <AuthRegister />
  }
];

export default PublicRoutes;
