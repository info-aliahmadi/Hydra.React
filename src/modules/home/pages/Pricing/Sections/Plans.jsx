import { Button, Grid, Stack, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import WaveServiceImage from 'assets/images/wave-service.svg';
import 'react';

export default function Plans() {
  function PlanBox() {
    return (
      <Box className="plan-box"  p={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 5 }} textAlign="center">
        <Typography variant="h3">Basic plan</Typography>
        <Typography variant="h1" lineHeight={2}>
          $19/mo
        </Typography>
        <Typography variant="body1" lineHeight={3}>Feature text goes here</Typography>
        <Button variant="contained" color="primary" size="large" fullWidth>
          Request
        </Button>
      </Box>
    );
  }
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
            <Stack alignItems="center" textAlign={'center'} pt={15} pb={15}>
              <Typography variant="h5" pt={2}>
                Tagline
              </Typography>
              <Typography variant="h1" pt={2}>
                Medium length section heading goes here
              </Typography>
              <Typography variant="body2" pt={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus,
                mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              </Typography>
            </Stack>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              spacing={{ xs: 0.5, sm: 0.5, md: 2, lg: 3, xl: 3 }}
              justifyContent="flex-end"
            >
              <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                <PlanBox />
              </Grid>
              <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                <PlanBox />
              </Grid>
              <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                <PlanBox />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} textAlign={'center'}></Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
