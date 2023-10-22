import { Button, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import Feature1Image from 'assets/images/Feature-1.png';
import Feature2Image from 'assets/images/Feature-2.png';
import Feature3Image from 'assets/images/Feature-3.png';
import WaveFeaturesImage from 'assets/images/wave-feature.svg';
import 'react';

export default function Features() {
  return (
    <Box style={{ background: '#A1D4F8' }}>
      <img alt="profile user" src={WaveFeaturesImage} width="100%" />
      <Container maxWidth="xl">
        <Grid container>
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xd={12}
            rowSpacing={{ xs: 5, sm: 5, md: 5, lg: 5, xd: 5 }}
            p={{ xs: 3, sm: 10, md: 10, lg: 0, xd: 0 }}
          >
            <Grid item xs={12} sm={12} md={6} lg={6} xd={6}>
              <Typography variant="h5" pt={2}>
                Innovative
              </Typography>
              <Typography variant="h1" pt={2}>
                Transforming Ideas into Stunning Web Experiences
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xd={6}>
              <Typography variant="body2" p={{ xs: 1, sm: 1, md: 3, lg: 10, xd: 10 }}>
                At OnWave Design, we specialize in proving cutting-edge web design, e-commerce solutions, and web application development
                services. Our team of skilled professionals is dedicated to transforming your ideas into stunning web experiences that
                captivate your audience and drive results. Whether you need a custom website, an online store, or a powerful web
                application, we have the expertise and creativity to bring your vision to life.
              </Typography>
            </Grid>
          </Grid>
          <Grid container item rowSpacing={{ xs: 7, sm: 7, md: 5, lg: 7, xd: 7 }} xs={12} sm={12} md={12} lg={12} xd={12}>
            <Grid item xs={12} sm={12} md={4} lg={4} xd={4} textAlign={'center'}>
              <img alt="profile user" src={Feature1Image} height="200px" />
              <Typography variant="h3">Portfolio</Typography>
              <Typography variant="body1" pt={2}>
                We Create Unique and visually appealing custom portfolio.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xd={4} textAlign={'center'}>
              <img alt="profile user" src={Feature2Image} height="200px" />
              <Typography variant="h3">E-Commerce</Typography>
              <Typography variant="body1" pt={2}>
                We build online stores that drive sales and conversions.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xd={4} textAlign={'center'}>
              <img alt="profile user" src={Feature3Image} height="200px" />
              <Typography variant="h3">Web Application</Typography>
              <Typography variant="body1" pt={2}>
                We develop powerful web applications for your business needs.
              </Typography>
            </Grid>
          </Grid>
          <Grid item p={{ xs: 10, sm: 10, md: 10, lg: 12, xd: 12 }} pl={{ lg: 0, xd: 0 }}>
            <Box>
              <Button variant="outlined" color="primary" size="large">
                Learn More
              </Button>
              <Button color="primary" variant="text" size="large">
                Request
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
