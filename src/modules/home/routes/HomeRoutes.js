import Loadable from 'components/Loadable';
import HomeLayout from 'layout/HomeLayout';
import { lazy } from 'react';

const AuthLogin = Loadable(lazy(() => import('modules/auth/pages/authentication/Login')));

const AuthRegister = Loadable(lazy(() => import('modules/auth/pages/authentication/Register')));

const Home = Loadable(lazy(() => import('modules/home/pages/Home')));

const About = Loadable(lazy(() => import('modules/home/pages/About')));

const Service = Loadable(lazy(() => import('modules/home/pages/Service')));

const MinimalLayout = Loadable(lazy(() => import('layout/MinimalLayout')));

// ==============================|| MAIN ROUTING ||============================== //

const HomeRoutes = [
  {
    key: 'homePage',
    path: '/',
    layout: <HomeLayout />,
    element: <Home />
  },
  {
    key: 'about',
    path: '/about',
    layout: <HomeLayout />,
    element: <About />
  },
  {
    key: 'service',
    path: '/service',
    layout: <HomeLayout />,
    element: <Service />
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

export default HomeRoutes;
