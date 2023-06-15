// material-ui
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';

// project import
import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

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
        <IconButton
          title="Switch to Dark Theme"
          disableRipple
          aria-label="open drawer"
          onClick={() => handleThemeMode('dark')}
          edge="start"
          color="secondary"
          sx={{ color: 'text.primary' }}
        >
          <Brightness4Icon />
        </IconButton>
      ) : (
        <IconButton
          title="Switch to Light Theme"
          disableRipple
          aria-label="open drawer"
          onClick={() => handleThemeMode('light')}
          edge="start"
          color="secondary"
          sx={{ color: 'text.primary' }}
        >
          <Brightness7Icon />
        </IconButton>
      )}

      <Notification />
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
