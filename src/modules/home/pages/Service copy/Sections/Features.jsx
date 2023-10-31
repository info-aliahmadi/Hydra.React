import { Button, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import Feature1Image from 'assets/images/Feature-1.png';
import Feature2Image from 'assets/images/Feature-2.png';
import Feature3Image from 'assets/images/Feature-3.png';
import WaveServiceImage from 'assets/images/wave-service.svg';
import 'react';

export default function Features() {
  return (
    <Box className="bg-blue">
      <img alt="" src={WaveServiceImage} width="100%" />
      <Container maxWidth="xl">
        <Grid container>
          <Grid
            container
            item
            rowSpacing={{ xs: 7, sm: 7, md: 5, lg: 7, xl: 7 }}
            pt={{ xs: 3, sm: 10, md: 10, lg: 10, xl: 10 }}
            pb={{ xs: 3, sm: 10, md: 10, lg: 10, xl: 10 }}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} textAlign={'center'}>
              <img alt="" src={Feature1Image} height="250px" />
              <Typography variant="h3">Portfolio</Typography>
              <Typography variant="body1" pt={2}>
                We Create Unique and visually appealing custom portfolio.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} textAlign={'center'}>
              <img alt="" src={Feature2Image} height="250px" />
              <Typography variant="h3">E-Commerce</Typography>
              <Typography variant="body1" pt={2}>
                We build online stores that drive sales and conversions.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} textAlign={'center'}>
              <img alt="" src={Feature3Image} height="250px" />
              <Typography variant="h3">Web Application</Typography>
              <Typography variant="body1" pt={2}>
                We develop powerful web applications for your business needs.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
