import Loadable from 'components/Loadable';
const HomeLayout = Loadable(lazy(() => import('layout/HomeLayout')));
const CleanHomeLayout = Loadable(lazy(() => import('layout/HomeLayout/CleanHomeLayout')));
const MinimalLayout = Loadable(lazy(() => import('layout/MinimalLayout')));

import { lazy } from 'react';
import Introduce from '../pages/Home/Sections/Introduce';

const AuthLogin = Loadable(lazy(() => import('modules/auth/pages/authentication/Login')));

const AuthRegister = Loadable(lazy(() => import('modules/auth/pages/authentication/Register')));

const Home = Loadable(lazy(() => import('modules/home/pages/Home')));

const About = Loadable(lazy(() => import('modules/home/pages/About')));

const Service = Loadable(lazy(() => import('modules/home/pages/Service')));

const Pricing = Loadable(lazy(() => import('modules/home/pages/Pricing')));

const Blog = Loadable(lazy(() => import('modules/home/pages/Blog')));

const BlogPost = Loadable(lazy(() => import('modules/home/pages/BlogPost')));

const BlogCategory = Loadable(lazy(() => import('modules/home/pages/BlogCategory')));

const BlogTag = Loadable(lazy(() => import('modules/home/pages/BlogTag')));

const Contact = Loadable(lazy(() => import('modules/home/pages/Contact')));

const PrivacyPolicy = Loadable(lazy(() => import('modules/home/pages/Policy/PrivacyPolicy')));

const TermsofService = Loadable(lazy(() => import('modules/home/pages/Policy/TermsofService')));

const CookiesSettings = Loadable(lazy(() => import('modules/home/pages/Policy/CookiesSettings')));

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
    path: '/blog/:page?',
    layout: <HomeLayout />,
    element: <Blog />
  },
  {
    key: 'blogcategory',
    path: '/blogcategory/:category/:page?',
    layout: <HomeLayout />,
    element: <BlogCategory />
  },
  {
    key: 'blogtag',
    path: '/blogtag/:tag/:page?',
    layout: <HomeLayout />,
    element: <BlogTag />
  },
  {
    key: 'blogPost',
    path: '/blogPost/:id/:title?',
    layout: <HomeLayout />,
    element: <BlogPost />
  },
  {
    key: 'contact',
    path: '/contact',
    layout: <HomeLayout />,
    element: <Contact />
  },
  {
    key: 'privacypolicy',
    path: '/privacypolicy',
    layout: <HomeLayout />,
    element: <PrivacyPolicy />
  },
  {
    key: 'termsofservice',
    path: '/termsofservice',
    layout: <HomeLayout />,
    element: <TermsofService />
  },
  {
    key: 'cookiessettings',
    path: '/cookiessettings',
    layout: <HomeLayout />,
    element: <CookiesSettings />
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
  },
  {
    key: 'introduceIFrame',
    path: '/introduce',
    layout: <CleanHomeLayout />,
    element: <Introduce />
  }
];

export default HomeRoutes;
