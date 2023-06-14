// project import
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { PrivateRoutes, PublicRoutes } from 'routes/Routes';
import { Routes } from 'react-router-dom';
// import { LocalizationProvider } from 'Localization/LocalizationProvider';
import './Localization/i18n';
import { Suspense } from 'react';
// import './Localization/i18n';
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
