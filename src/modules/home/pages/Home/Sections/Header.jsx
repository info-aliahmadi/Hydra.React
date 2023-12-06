import { Typography, useTheme } from '@mui/material';
import { Box, Container } from '@mui/system';
import header from 'assets/images/header.png';
import 'react';

const Header = () => {
  return (
    <>
      <div className="header">
        <Box className="fullscreen-container">
          {/* <spline-viewer
            loading-anim-type="spinner-small-dark"
            url="https://prod.spline.design/SHWZ2zeilKfflD8Q/scene.splinecode"
          ></spline-viewer> */}
          <img alt="" src={header} className="fullscreen-image" />
        </Box>
        <Container maxWidth="xl">
          <Box className="fullscreen-title">
            <Typography variant="header" sx={{ display: 'block' }}>
              Turn Your Digital Experience
            </Typography>
            <Typography variant="header" sx={{ display: 'block' }}>
              Into a{' '}
              <Typography variant="header" className="gradient-text">
                Unique Interaction
              </Typography>
            </Typography>
            <Typography variant="body3" sx={{ fontSize: '15px', display: 'block' }}>
              Welcome to OnWave Design, where we create stunning websites
            </Typography>
            <Typography variant="body3" sx={{ fontSize: '15px', display: 'block' }}>
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
