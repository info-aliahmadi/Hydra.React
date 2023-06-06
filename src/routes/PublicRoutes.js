import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));

// import Login from 'pages/login/login';

const collectedRoutes = [
  {
    key: 'loginkey',
    path: 'login',
    element: <AuthLogin />
  },
  {
    key: 'registerkey',
    path: 'register',
    element: <AuthRegister />
  }
];

const allRoutes = collectedRoutes.map((route) => {
  return route.element && <Route key={route.key} path={route.path} element={route.element} />;
});

export const PublicRoutes = (
  <Route key="MinimalLayoutKey" path="/" element={<MinimalLayout />}>
    {allRoutes}
  </Route>
);

export default PublicRoutes;
