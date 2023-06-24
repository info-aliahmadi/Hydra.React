// project import
import { Suspense } from 'react';
import './Localization/i18n';
import ThemeCustomization from 'themes';

import ScrollTop from 'components/ScrollTop';
import { Routes } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from 'routes/Routes';
// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => {
  return (
    <Suspense fallback="...is loading">
      <ThemeCustomization>
        <ScrollTop>
          <Routes>
            {PublicRoutes}
            {PrivateRoutes}
          </Routes>
        </ScrollTop>
      </ThemeCustomization>
    </Suspense>
  );
};
export default App;
