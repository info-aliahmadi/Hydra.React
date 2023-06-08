import React from 'react'; //const DashboardDefault = React.lazy(() => import("Demo/Dashboard/Default"));
import AuthRoutes from 'modules/auth/routes/AuthRoutes';
import CmsRoutes from 'modules/cms/routes/CmsRoutes';
import { Route } from 'react-router-dom';
import Authenticate from 'modules/auth/services/Authentication/Authenticate';
import MainLayout from 'layout/MainLayout';
import MinimalLayout from 'layout/MinimalLayout';

let collectedRoutes = [...AuthRoutes, ...CmsRoutes];

// collect private routes with permission attribute
const allPrivateRoutes = collectedRoutes
  .filter((x) => x.permission)
  .map((route) => {
    return (
      route.element && (
        <Route key={route.key} path={route.path} element={<Authenticate permission={route.permission}>{route.element}</Authenticate>} />
      )
    );
  });

// collect private routes without permission attribute
const allPublicRoutes = collectedRoutes
  .filter((x) => !x.permission)
  .map((route) => {
    return route.element && <Route key={route.key} path={route.path} element={route.element} />;
  });

export const PrivateRoutes = (
  <Route
    key="MainLayoutKey"
    path="/"
    element={
      <Authenticate justAuthenticate={true}>
        <MainLayout />
      </Authenticate>
    }
  >
    {allPrivateRoutes}
  </Route>
);

export const PublicRoutes = (
  <Route key="MinimalLayoutKey" path="/" element={<MinimalLayout />}>
    {allPublicRoutes}
  </Route>
);
