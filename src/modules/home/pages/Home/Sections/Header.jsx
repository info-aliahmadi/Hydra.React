import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import header from 'assets/images/header.png';
import 'react';
import { position } from 'stylis';

const Header = () => {
  return (
    <>
      <Box sx={{ position: 'absolute', top: 0 }}>
        <img alt="profile user" src={header} width="100%" />
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              position: 'absolute',
              top: '30%'
            }}
          >
            <Typography variant="h1" sx={{ fontSize: 'calc(3rem + 0.7vw)' }}>
              Turn Your Digital Experience
            </Typography>
            <Typography variant="h1" sx={{ fontSize: 'calc(3rem + 0.7vw)' }}>
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
      </Box>
      <Typography variant="h1">Header Section</Typography>
    </>
  );
};
export default Header;
