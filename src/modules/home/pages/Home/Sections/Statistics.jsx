import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import StatisticsImage from 'assets/images/statistics.png';
import 'react';

export default function Statistics() {
  return (
    <Box className="bg-blue">
      <Container maxWidth="xl">
        <Grid container pt={{ xs: 3, sm: 5, md: 8, lg: 10, xl: 15 }} pb={{ xs: 10, sm: 10, md: 10, lg: 10, xl: 10 }}>
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
              <Typography variant="h5" pt={2}>
                Innovative
              </Typography>
              <Typography variant="h1" pt={2}>
                Transforming Ideas into Exceptional Web Experiences
              </Typography>
              <Typography variant="body2" pt={2}>
                With a track record of successful projects, satisfied clients, and seamless launches, OnWave Design is the go-to web
                development company for cutting-edge technologies.
              </Typography>
            </Grid>
            <Grid container item columnSpacing={{ xs: 2, sm: 2, md: 5, lg: 5, xl: 5 }}>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Typography variant="h1">50%</Typography>
                <Typography variant="h3">Satisfied Clients</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Typography variant="h1">50%</Typography>
                <Typography variant="h3">Project Completed</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={7} lg={7} md={12} sm={12}>
            <img alt="profile user" src={StatisticsImage} width="100%" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
