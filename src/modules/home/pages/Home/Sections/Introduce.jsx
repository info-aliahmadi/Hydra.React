import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import IntroduceImage from 'assets/images/introduce.png';
import ExpertiseImage from 'assets/images/expertise.png';
import InnovationImage from 'assets/images/innovation.png';
import WaveIntroduceImage from 'assets/images/wave-introduce.svg';
import 'react';
import { useEffect } from 'react';

export default function Introduce() {
  useEffect(() => {
    var x = document.getElementById('logo');
    x?.remove();
  });

  return (
    <Box className="bg-white">
      <Box
        className="bg-wave"
        sx={{
          backgroundImage: `url(${WaveIntroduceImage})`
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
            lg={5}
            xl={5}
            rowSpacing={{ xs: 5, sm: 5, md: 5, lg: 5, xl: 5 }}
            p={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }}
          >
            <Grid item>
              <Typography variant="h1" pt={6}>
                Experience the Power of Cutting-Edge Web Design
              </Typography>
              <Typography variant="body2" pt={2}>
                At OnWave Design, we specialize in designing and implementing websites using the latest technologies. Our team of experts
                combines creativity and technical expertise to deliver stunning and functional websites that drive results.
              </Typography>
            </Grid>
            <Grid container item columnSpacing={{ xs: 2, sm: 2, md: 5, lg: 10, xl: 10 }}>
              <Grid item container xs={6} sm={6} md={6} lg={6} xl={6}>
                <Grid item xs={12}>
                  <spline-viewer
                    loading-anim-type="spinner-big-dark"
                    url="https://prod.spline.design/1MTyyH8o7j1ORzZd/scene.splinecode"
                  ></spline-viewer>
                </Grid>
                <Grid item xs={12}>
                  <Box mt={-8} sx={{ background: '#eaeefd', zIndex: '9999', position: 'relative' }}>
                    <Typography variant="h3">Expertise</Typography>
                    <Typography variant="body1" pt={2}>
                      With years of experience, we have mastered the art of creating visually appealing and user-friendly websites.
                    </Typography>
                  </Box>
                </Grid>

                {/* <img alt="" src={ExpertiseImage} height="150px" /> */}
              </Grid>
              <Grid item container xs={6} sm={6} md={6} lg={6} xl={6}>
                <Grid item xs={12}>
                  <spline-viewer
                    loading-anim-type="spinner-big-dark"
                    url="https://prod.spline.design/fEP7jKKTmCzk4R3N/scene.splinecode"
                  ></spline-viewer>
                </Grid>
                <Grid item xs={12}>
                  <Box mt={-8} sx={{ background: '#eaeefd', zIndex: '9999', position: 'relative' }}>
                    <Typography variant="h3">Innovation</Typography>
                    <Typography variant="body1" pt={2}>
                      We stay up-to-date with the latest trends and technologies to ensure your website stands out from the competition.
                    </Typography>
                  </Box>
                </Grid>

                {/* <img alt="" src={InnovationImage} height="150px" /> */}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={7} lg={7} md={12} sm={12}>
            <spline-viewer
              loading-anim-type="spinner-big-dark"
              url="https://prod.spline.design/k2Py7YlFaJbnxPp2/scene.splinecode"
            ></spline-viewer>
            {/* <img alt="" src={IntroduceImage} width="100%" /> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
