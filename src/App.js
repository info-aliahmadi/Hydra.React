// project import
import { Suspense } from 'react';
import './Localization/i18n';
// import ThemeCustomization from 'themes';

import ScrollTop from 'components/ScrollTop';
import { Routes } from 'react-router-dom';
import { PrivateRoutesCaller, PublicRoutesCaller } from 'routes/Routes';
import Loader from 'components/Loader';
// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      {/* <ThemeCustomization> */}
      <ScrollTop>
        <Routes>
          {PublicRoutesCaller}
          {PrivateRoutesCaller}
        </Routes>
      </ScrollTop>
      {/* </ThemeCustomization> */}
    </Suspense>
  );
};
export default App;
