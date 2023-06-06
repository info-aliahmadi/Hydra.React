import React from 'react'; //const DashboardDefault = React.lazy(() => import("Demo/Dashboard/Default"));
import AuthRoutes from 'modules/auth/routes/AuthRoutes';
import CmsRoutes from 'modules/cms/routes/CmsRoutes';
import { Route } from 'react-router-dom';
import Authenticate from 'modules/auth/services/Authentication/Authenticate';
import MainLayout from 'layout/MainLayout';

let collectedRoutes = [...AuthRoutes, ...CmsRoutes];

const allPrivateRoutes = collectedRoutes.map((route) => {
  return (
    route.element && (
      <Route key={route.key} path={route.path} element={<Authenticate permission={route.permission}>{route.element}</Authenticate>} />
    )
  );
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

export default PrivateRoutes;
