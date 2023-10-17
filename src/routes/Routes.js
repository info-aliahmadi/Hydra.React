import React, { Suspense } from 'react'; //const DashboardDefault = React.lazy(() => import("Demo/Dashboard/Default"));

import { Route } from 'react-router-dom';
import MainLayout from 'layout/MainLayout';
import MinimalLayout from 'layout/MinimalLayout';
import Authorize from 'modules/auth/services/Authorization/Authorize';
import Authenticate from 'modules/auth/services/Authentication/Authenticate';

import AuthRoutes from 'modules/auth/routes/AuthRoutes';
import CmsRoutes from 'modules/cms/routes/CmsRoutes';
import FileStorageRoutes from 'modules/fileStorage/routes/FileStorageRoutes';

import PublicRoutes from './PublicRoutes';
import Loader from 'components/Loader';

let collectedRoutes = [...AuthRoutes, ...CmsRoutes, ...FileStorageRoutes];
export const PrivateRoutesCaller = (
  <Route
    key="MainLayoutKey"
    path="/"
    element={
      <Authenticate>
        <Suspense fallback={<Loader />}>
          <MainLayout />
        </Suspense>
      </Authenticate>
    }
  >
    {collectedRoutes
      .filter((x) => x.permission)
      .map((route) => {
        return (
          route.element && (
            <Route key={route.key} path={route.path} element={<Authorize permission={route.permission}>{route.element}</Authorize>} />
          )
        );
      })}
  </Route>
);

// collect Public routes without permission attribute
export const PublicRoutesCaller = (
  <>
    {PublicRoutes.map((route) => {
      return route.layout ? (
        <Route key={route.key + 'LayoutKey'} path="/" element={route.layout}>
          {route.element && <Route key={route.key} path={route.path} element={route.element} />};
        </Route>
      ) : (
        <Route key={route.key} path={route.path} element={route.element} />
      );
    })}
  </>
);
