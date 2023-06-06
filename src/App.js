// project import
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import PrivateRoutes from 'routes/PrivateRoutes';
import PublicRoutes from 'routes/PublicRoutes';
import { Routes } from 'react-router-dom';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <ThemeCustomization>
    <ScrollTop>
      <Routes>
        {PrivateRoutes}
        {PublicRoutes}
      </Routes>
    </ScrollTop>
  </ThemeCustomization>
);

export default App;
