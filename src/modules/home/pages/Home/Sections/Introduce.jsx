import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import IntroduceImage from 'assets/images/introduce.png';
import ExpertiseImage from 'assets/images/expertise.png';
import InnovationImage from 'assets/images/innovation.png';
import WaveIntroduceImage from 'assets/images/wave-introduce.svg';
import 'react';

export default function Introduce() {
  return (
    <Box style={{ background: '#EAEEFD' }}>
      <img alt="profile user" src={WaveIntroduceImage} width="100%" />
      <Container maxWidth="xl">
        <Grid container>
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            lg={5}
            xd={5}
            rowSpacing={{ xs: 5, sm: 5, md: 5, lg: 5, xd: 5 }}
            p={{ xs: 3, sm: 10, md: 15, lg: 0, xd: 0 }}
          >
            <Grid item>
              <Typography variant="h1" pt={2}>
                Experience the Power of Cutting-Edge Web Design
              </Typography>
              <Typography variant="body2" pt={2}>
                At OnWave Design, we specialize in designing and implementing websites using the latest technologies. Our team of experts
                combines creativity and technical expertise to deliver stunning and functional websites that drive results.
              </Typography>
            </Grid>
            <Grid container item columnSpacing={{ xs: 2, sm: 2, md: 5, lg: 10, xd: 10 }}>
              <Grid item xs={6} sm={6} md={6} lg={6} xd={6}>
                <img alt="profile user" src={ExpertiseImage} height="150px" />
                <Typography variant="h3">Expertise</Typography>
                <Typography variant="body1" pt={2}>
                  With years of experience, we have mastered the art of creating visually appealing and user-friendly websites.
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xd={6}>
                <img alt="profile user" src={InnovationImage} height="150px" />
                <Typography variant="h3">Innovation</Typography>
                <Typography variant="body1" pt={2}>
                  We stay up-to-date with the latest trends and technologies to ensure your website stands out from the competition.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xd={7} lg={7} md={12} sm={12}>
            <img alt="profile user" src={IntroduceImage} width="100%" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
