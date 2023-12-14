import { Button, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import Feature1Image from 'assets/images/Feature-1.png';
import Feature2Image from 'assets/images/Feature-2.png';
import Feature3Image from 'assets/images/Feature-3.png';
import WaveFeaturesImage from 'assets/images/wave-feature.svg';
import 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Features() {
  return (
    <Box className="bg-blue">
      <Box
        className="bg-wave"
        sx={{
          backgroundImage: `url(${WaveFeaturesImage})`
        }}
        height={{ xs: 230, sm: 250, md: 300, lg: 360, xl: 380 }}
      ></Box>
      <Container maxWidth="xl">
        <Grid container>
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            rowSpacing={{ xs: 5, sm: 5, md: 5, lg: 5, xl: 5 }}
            p={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }}
          >
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant="h5" pt={2}>
                Features
              </Typography>
              <Typography variant="h1" pt={2}>
                <span className="gradient-text"> Transforming</span> Ideas into Stunning Web Experiences
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant="body2" p={{ xs: 1, sm: 1, md: 3, lg: 10, xl: 10 }}>
                At OnWave Design, we specialize in proving cutting-edge web design, e-commerce solutions, and web application development
                services. Our team of skilled professionals is dedicated to transforming your ideas into stunning web experiences that
                captivate your audience and drive results. Whether you need a custom website, an online store, or a powerful web
                application, we have the expertise and creativity to bring your vision to life.
              </Typography>
            </Grid>
          </Grid>
          <Grid container item rowSpacing={{ xs: 7, sm: 7, md: 3, lg: 7, xl: 7 }} xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              textAlign={'center'}
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              {/* <img alt="" src={Feature1Image} height="200px" /> */}
              <Box sx={{ maxWidth: '480px' }}>
                <spline-viewer
                  loading-anim-type="spinner-small-dark"
                  url="https://prod.spline.design/0ugZuGgBeBzgkZjr/scene.splinecode"
                ></spline-viewer>
              </Box>
              <Box sx={{ width: '100%', background: '#a1d4f8', marginTop: '-70px', position: 'relative', zIndex: 999 }}>
                <Typography variant="h3">Portfolio</Typography>
                <Typography variant="body1" pt={2}>
                  We Create Unique and visually appealing custom portfolio.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              textAlign={'center'}
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <Box sx={{ maxWidth: '480px' }}>
                <spline-viewer
                  loading-anim-type="spinner-small-dark"
                  url="https://prod.spline.design/YVcMpYg7QYp3CdP8/scene.splinecode"
                ></spline-viewer>
              </Box>
              {/* <img alt="" src={Feature2Image} height="200px" /> */}
              <Box sx={{ width: '100%', background: '#a1d4f8', marginTop: '-70px', position: 'relative', zIndex: 999 }}>
                <Typography variant="h3">E-Commerce</Typography>
                <Typography variant="body1" pt={2}>
                  We build online stores that drive sales and conversions.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              textAlign={'center'}
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <Box sx={{ maxWidth: '480px' }}>
                <spline-viewer
                  loading-anim-type="spinner-small-dark"
                  url="https://prod.spline.design/BR18NVUSCCzfjn5m/scene.splinecode"
                ></spline-viewer>
              </Box>
              {/* <img alt="" src={Feature3Image} height="200px" /> */}
              <Box sx={{ width: '100%', background: '#a1d4f8', marginTop: '-70px', position: 'relative', zIndex: 999 }}>
                <Typography variant="h3">Web Application</Typography>
                <Typography variant="body1" pt={2}>
                  We develop powerful web applications for your business needs.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item p={{ xs: 10, sm: 10, md: 10, lg: 12, xl: 12 }} pl={{ lg: 0, xl: 0 }}>
            <Box>
              <Button href="/service" variant="contained" color="info" size="large">
                Learn More
              </Button>
              <Button href="/contact" color="primary" variant="text" size="large" endIcon={<ArrowForwardIosIcon fontSize="small" />}>
                Request
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
