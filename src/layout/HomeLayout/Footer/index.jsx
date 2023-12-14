import { Grid } from '@mui/material';
import { Box, Container } from '@mui/system';
import WaveFooterImage from 'assets/images/wave-footer.svg';
import OnWaveFooterArm from 'assets/images/OnWaveFooterArm.png';
import FooterLogoImage from 'assets/images/logo-footer.png';
import 'react';
import Newsletter from './Newsletter';
import Copyright from './Copyright';
import RecentPostLinks from './Links/RecentPostLinks';
import CategoriesLinks from './Links/CategoriesLinks';
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
          pt={{ xs: 3, sm: 5, md: 0, lg: 0, xl: 0 }}
          pr={{ xs: 0, sm: 0, md: 0, lg: 10, xl: 10 }}
          pl={{ xs: 0, sm: 0, md: 0, lg: 10, xl: 10 }}
          justifyContent="space-between"
        >
          <Grid container item xs={12} sm={12} md={5} lg={5} xl={5} pb={{ xs: 10, sm: 10, md: 0, lg: 0, xl: 0 }}>
            <Grid container item justifyContent="center">
              <Grid
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <img alt="" src={OnWaveFooterArm} width={300} style={{ display: 'block' }} />
                <img alt="" src={FooterLogoImage} style={{ display: 'block' }} />
              </Grid>
              <Grid item pt={4} xs={12} sm={8} md={12} lg={12} xl={12}>
                <Newsletter />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            spacing={3}
            justifyContent="center"
            alignContent="center"
            pl={{ xs: 3, sm: 3, md: 0, lg: 0, xl: 0 }}
            pb={{ xs: 5, sm: 5, md: 0, lg: 0, xl: 0 }}
          >
            <Grid item xs={7} sm={7} md={7} lg={7} xl={7} spacing={3}>
              <RecentPostLinks />
            </Grid>
            <Grid item xs={5} sm={5} md={5} lg={5} xl={5} spacing={3}>
              <CategoriesLinks />
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
