import { Typography, useTheme } from '@mui/material';
import { Box, Container } from '@mui/system';
import header from 'assets/images/header.png';
import 'react';
import './Header.css';

const Header = () => {
  const theme = useTheme();

  // const headerBreakpoint = {
  //   header: {
  //     overflow: 'hidden',
  //     position: 'relative',
  //     zIndex: 9999
  //   },
  //   fullscreenContainer: {
  //     position: 'static',
  //     top: 0,
  //     left: 0,
  //     height: '100vh',
  //     width: '100vw'
  //   },
  //   fullscreenImage: {
  //     display: 'block',
  //     position: 'absolute',
  //     top: '50%',
  //     left: ' 50%',
  //     height: '100vh',
  //     width: '100vw',
  //     transform: 'translate(-50%, -50%)',
  //     zIndex: 1
  //   },
  //   fullscreenHeader: {
  //     position: 'absolute',
  //     top: '40%',
  //     width: '100%',
  //     zIndex: 5
  //   }
  // };
  return (
    <>
      <div className="header">
        <Box className="fullscreen-container">
          <img alt="profile user" src={header} className="fullscreen-image" />
        </Box>
        <Container maxWidth="xl">
          <Box className="fullscreen-title">
            <Typography variant="header" sx={{ display: 'block' }}>
              Turn Your Digital Experience
            </Typography>
            <Typography variant="header" sx={{ display: 'block' }}>
              Into a Unique Interaction
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '15px' }}>
              Welcome to OnWave Design, where we create stunning websites
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '15px' }}>
              using the latest technologies.
            </Typography>
          </Box>
        </Container>
        <Box style={{ position: 'initial' }}></Box>
      </div>
    </>
  );
};
export default Header;
