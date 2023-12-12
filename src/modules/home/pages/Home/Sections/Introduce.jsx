import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import IntroduceImage from 'assets/images/introduce.png';
import ExpertiseImage from 'assets/images/expertise.png';
import InnovationImage from 'assets/images/innovation.png';
import WaveIntroduceImage from 'assets/images/wave-introduce.svg';
import 'react';

export default function Introduce() {
  return (
    <Box className="bg-white" sx={{ position: 'unset' }}>
      <Box
        id="section-intro"
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
            rowSpacing={{ xs: 5, sm: 5, md: 5, lg: 0, xl: 0 }}
            p={{ xs: 3, sm: 3, md: 15, lg: 0, xl: 0 }}
            pb={{ xs: 0, sm: 0, md: 0, lg: 0, xl: 0 }}
          >
            <Grid item>
              <Typography variant="h1" pt={{ xs: 5, sm: 5, md: 0, lg: 10, xl: 10 }}>
                <span className="gradient-text"> Experience</span> the Power of Cutting-Edge Web Design
              </Typography>
              <Typography variant="body2" pt={4}>
                At OnWave Design, we specialize in designing and implementing websites using the latest technologies. Our team of experts
                combines creativity and technical expertise to deliver stunning and functional websites that drive results.
              </Typography>
            </Grid>
            <Grid container item columnSpacing={{ xs: 2, sm: 2, md: 5, lg: 10, xl: 10 }} mt={{ xs: 2, sm: 2, md: 5, lg: 18, xl: 18 }}>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <img alt="" src={ExpertiseImage} height="200px" />
                <Box>
                  <Typography variant="h3">Expertise</Typography>
                  <Typography variant="body1" pt={2}>
                    With years of experience, we have mastered the art of creating visually appealing and user-friendly websites.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <img alt="" src={InnovationImage} height="200px" />
                <Box>
                  <Typography variant="h3">Innovation</Typography>
                  <Typography variant="body1" pt={2}>
                    We stay up-to-date with the latest trends and technologies to ensure your website stands out from the competition.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={7} xl={7} minHeight={'700px'}>
            {/* <spline-viewer url="https://prod.spline.design/5Ck1f5C3y1xixa6I/scene.splinecode"></spline-viewer> */}
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
