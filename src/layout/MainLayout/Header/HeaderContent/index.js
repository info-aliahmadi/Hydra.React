// material-ui
import { Badge, Box, IconButton, Tooltip, useMediaQuery, useTheme } from '@mui/material';

// project import
import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Localization from './Localization';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const theme = useTheme();

  const handleThemeMode = (mode) => {
    theme.setMode(mode);
  };
  return (
    <>
      {!matchesXs && <Search />}
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

      {theme.palette.mode == 'light' ? (
        <Tooltip title="Switch to Dark Theme">
          <IconButton
            disableRipple
            aria-label="open drawer"
            onClick={() => handleThemeMode('dark')}
            edge="start"
            color="secondary"
            sx={{ color: 'text.primary' }}
          >
            <Brightness4Icon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Switch to Light Theme">
          <IconButton
            disableRipple
            aria-label="open drawer"
            onClick={() => handleThemeMode('light')}
            edge="start"
            color="secondary"
            sx={{ color: 'text.primary' }}
          >
            <Brightness7Icon />
          </IconButton>
        </Tooltip>
      )}
      <Localization />
      <Notification />
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
