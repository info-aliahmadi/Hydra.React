import { Button, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import WaveTeamImage from 'assets/images/wave-team.svg';
import AppLogo from 'assets/images/app-logo.png';
import AppLogo2 from 'assets/images/app-logo-2.png';
import 'react';

export default function CTA() {
  return (
    <Box className="bg-blue">
      <img alt="" src={WaveTeamImage} width="100%" />
      <Container maxWidth="xl">
        <Grid container>
          <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} pb={{ xs: 5, sm: 8, md: 8, lg: 8, xl: 8 }} justifyContent="center">
            <Grid item sx={{ textAlign: 'center' }}>
              <Typography variant="h1" pt={2}>
                Medium length heading goes here
              </Typography>
              <Typography variant="body2" pt={4} pb={4}>
                At OnWave Design, we specialize in proving cutting-edge web design
              </Typography>
              <Box>
                <Button variant="contained" color="info" size="large">
                  Consult
                </Button>
                <Button variant="contained" color="primary" size="large">
                  Request
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} justifyContent="space-evenly" alignItems="center">
            <Box m={3}>
              <img alt="" src={AppLogo} />
            </Box>
            <Box>
              <img alt="" src={AppLogo2} />
            </Box>
            <Box>
              <img alt="" src={AppLogo} />
            </Box>
            <Box>
              <img alt="" src={AppLogo2} />
            </Box>
            <Box>
              <img alt="" src={AppLogo} />
            </Box>
            <Box>
              <img alt="" src={AppLogo2} />
            </Box>
            <Box>
              <img alt="" src={AppLogo} />
            </Box>
            <Box>
              <img alt="" src={AppLogo2} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
