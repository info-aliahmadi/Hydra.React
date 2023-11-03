import 'react';
import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import WaveAboutImage from 'assets/images/bg-about.png';

export default function Header() {
  return (
    <Box className="bg-white">
      <Box
        className="bg-wave"
        sx={{
          backgroundImage: `url(${WaveAboutImage})`
        }}
        height={{ xs: 300, sm: 300, md: 350, lg: 450, xl: 550 }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative' }}>
          <Grid container mb={{ xs: 5, sm: 5, md: 30, lg: 40, xl: 30 }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              pt={{ xs: 15, sm: 15, md: 15, lg: 20, xl: 20 }}
              pl={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }}
              pr={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }}
            >
              <Typography variant="h1" pt={2} sx={{ display: 'block' }}>
                Services
              </Typography>
              <Typography variant="body2" pt={2}>
                At OnWave Design, we specialize in designing
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
