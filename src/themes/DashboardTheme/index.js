import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';

// material-ui
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// project import
import Palette from './palette';
import Typography from './typography';
import CustomShadows from './shadows';
import componentsOverride from './overrides';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import stylisRTLPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import LocalStorageService from 'utils/LocalStorageService';
import CONFIG from 'config';

import i18n from 'Localization/i18n';

import IranSans from './fonts/IranSans';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';
// ==============================|| DEFAULT THEME - MAIN  ||============================== //

export default function DashboardThemeCustomization({ children }) {
  const themeModeStorage = new LocalStorageService(CONFIG.DASHBOARD_THEME_MODE_STORAGE_NAME);
  const themeMode = themeModeStorage.getItem();

  const [mode, setMode] = useState(themeMode ? themeMode : CONFIG.DASHBOARD_DEFAULT_THEME_MODE);

  const [direction, setDirection] = useState(i18n.dir());
  const initFonts = i18n.dir() == 'rtl' ? `iran` : CONFIG.DASHBOARD_FONT_FAMILY;
  const [fonts, setFonts] = useState(initFonts);

  useEffect(() => {
    document.dir = i18n.dir();
  }, []);

  useEffect(() => {
    document.dir = direction;
    direction === 'rtl' ? setFonts(`Iran Sans`) : setFonts(CONFIG.DASHBOARD_FONT_FAMILY);
  }, [direction]);

  function changeDirection(dir) {
    setDirection(dir);
  }
  function changeMode(mode) {
    themeModeStorage.AddItem(mode);
    setMode(mode);
  }

  const theme = Palette(mode, 'default');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const themeTypography = Typography(fonts);
  const themeCustomShadows = useMemo(() => CustomShadows(theme), [theme]);

  const themeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536
        }
      },
      direction: direction,
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      palette: theme.palette,
      customShadows: themeCustomShadows,
      typography: themeTypography,
      setDirection: changeDirection,
      setMode: changeMode
    }),
    [theme, themeTypography, themeCustomShadows]
  );

  const themes = createTheme(themeOptions);

  themes.components = componentsOverride(themes);
  // Create rtl cache

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, stylisRTLPlugin]
  });

  return (
    <StyledEngineProvider injectFirst>
      {direction === 'rtl' ? (
        <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
          <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={themes}>
              <CssBaseline />
              <IranSans />
              {children}
            </ThemeProvider>
          </CacheProvider>
        </LocalizationProvider>
      ) : (
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <ThemeProvider theme={themes}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </LocalizationProvider>
      )}
    </StyledEngineProvider>
  );
}

DashboardThemeCustomization.propTypes = {
  children: PropTypes.node
};
