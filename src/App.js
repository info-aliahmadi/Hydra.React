// project import
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { PrivateRoutes, PublicRoutes } from 'routes/Routes';
import { Routes } from 'react-router-dom';
import './Localization/i18n';
// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <ThemeCustomization>
    <ScrollTop>
      <Routes>
        {PublicRoutes}
        {PrivateRoutes}
      </Routes>
    </ScrollTop>
  </ThemeCustomization>
);

export default App;
