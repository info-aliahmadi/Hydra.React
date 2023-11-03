import { Button, Grid, Stack, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import PreviewImage from 'assets/images/Image.png';
import WaveContactImage from 'assets/images/wave-contact.svg';
import 'react';

export default function BottomPost() {
  return (
    <Box className="bg-blue">
        <Box
        className="bg-wave"
        sx={{
          backgroundImage: `url(${WaveContactImage})`
        }}
        height={{ xs: 200, sm: 250, md: 300, lg: 360, xl: 400 }}
      ></Box>
      <Container maxWidth="xl">
        <Grid
          container
          pt={{ xs: 5, sm: 5, md: 5, lg: 10, xl: 10 }}
          pl={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }}
          pr={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }}
        >
          <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} display="flex" alignItems="center">
              <Stack>
                <Typography variant="h1" pt={2}>
                  Blog title heading will go here
                </Typography>
                <Typography variant="body2" pt={2} pb={2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus,
                  mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                </Typography>
                <Box sx={{ flexGrow: 0, display: 'flex' }} pb={{ xs: 8, sm: 8 }}>
                  <Button variant="contained" color="primary" size="large">
                    Request
                  </Button>
                  <Button variant="contained" color="info" size="large">
                    Consult
                  </Button>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <img alt="" src={PreviewImage} width="100%" />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
