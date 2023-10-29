import { Typography, useTheme } from '@mui/material';
import { Box, Container } from '@mui/system';
import header from 'assets/images/header.png';
import 'react';

const Header = () => {
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
