import Loadable from 'components/Loadable';
const HomeLayout = Loadable(lazy(() => import('layout/HomeLayout')));
const MinimalLayout = Loadable(lazy(() => import('layout/MinimalLayout')));

import { lazy } from 'react';

const AuthLogin = Loadable(lazy(() => import('modules/auth/pages/authentication/Login')));

const AuthRegister = Loadable(lazy(() => import('modules/auth/pages/authentication/Register')));

const Home = Loadable(lazy(() => import('modules/home/pages/Home')));

const About = Loadable(lazy(() => import('modules/home/pages/About')));

const Service = Loadable(lazy(() => import('modules/home/pages/Service')));

const Blog = Loadable(lazy(() => import('modules/home/pages/Blog')));

const BlogPost = Loadable(lazy(() => import('modules/home/pages/BlogPost')));

const Pricing = Loadable(lazy(() => import('modules/home/pages/Pricing')));

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
    key: 'pricing',
    path: '/pricing',
    layout: <HomeLayout />,
    element: <Pricing />
  },
  {
    key: 'blog',
    path: '/blog',
    layout: <HomeLayout />,
    element: <Blog />
  },
  {
    key: 'blogPost',
    path: '/blogPost',
    layout: <HomeLayout />,
    element: <BlogPost />
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
