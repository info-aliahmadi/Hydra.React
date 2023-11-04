import { Grid } from '@mui/material';
import { Box, Container } from '@mui/system';
import WaveFooterImage from 'assets/images/wave-footer.svg';
import FooterLogoImage from 'assets/images/logo-footer.png';
import 'react';
import Newsletter from './Newsletter';
import Copyright from './Copyright';
import FirstColumnLinks from './Links/FirstColumnLinks';
import SecondColumnLinks from './Links/SecondColumnLinks';
import SocialLinks from './Links/SocialLinks';

export default function Footer() {
  return (
    <Box className="footer">
      <Box
        className="bg-wave"
        sx={{
          backgroundImage: `url(${WaveFooterImage})`
        }}
        height={{ xs: 340, sm: 280, md: 300, lg: 350, xl: 380 }}
      ></Box>
      <Container maxWidth="xl">
        <Grid
          container
          pt={{ xs: 3, sm: 5, md: 8, lg: 8, xl: 8 }}
          pr={{ xs: 0, sm: 0, md: 0, lg: 10, xl: 10 }}
          pl={{ xs: 0, sm: 0, md: 10, lg: 10, xl: 10 }}
          justifyContent="space-between"
        >
          <Grid container item xs={12} sm={12} md={6} lg={6} xl={6} p={{ xs: 10, sm: 10, md: 0, lg: 0, xl: 0 }}>
            <Grid item>
              <Box sx={{ textAlign: 'center' }}>
                <img alt="" src={FooterLogoImage} />
              </Box>
              <Box pt={4}>
                <Newsletter />
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={5}
            lg={5}
            xl={5}
            spacing={3}
            justifyContent="center"
            alignContent="center"
            pl={{ xs: 10, sm: 10, md: 0, lg: 0, xl: 0 }}
          >
            <Grid item xs={6} sm={6} md={5} lg={5} xl={5} spacing={3}>
              <FirstColumnLinks />
            </Grid>
            <Grid item xs={6} sm={6} md={5} lg={5} xl={5} spacing={3}>
              <SecondColumnLinks />
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12} justifyContent="flex-end" alignContent="center" alignItems="center">
          <SocialLinks />
        </Grid>
        <Copyright />
      </Container>
    </Box>
  );
}
