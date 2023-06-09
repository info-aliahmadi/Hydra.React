import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';

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
import CONFIG from 'config';

// ==============================|| DEFAULT THEME - MAIN  ||============================== //

export default function ThemeCustomization({ children }) {
  const [direction, setDirection] = useState(CONFIG.THEME_DIRECTION);
  const [mode, setMode] = useState(CONFIG.MODE);

  function changeDirection(dir) {
    setDirection(dir);
    document.dir = dir;
  }
  function changeMode(mode) {
    setMode(mode);
  }

  const theme = Palette('dark', 'default');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const themeTypography = Typography(`'Public Sans', sans-serif`);
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

  debugger;
  themes.components = componentsOverride(themes);
  // Create rtl cache
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, stylisRTLPlugin]
  });

  return (
    <StyledEngineProvider injectFirst>
      {themes.direction == 'rtl' ? (
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={themes}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </CacheProvider>
      ) : (
        <ThemeProvider theme={themes}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      )}
    </StyledEngineProvider>
  );
}

ThemeCustomization.propTypes = {
  children: PropTypes.node
};
