import 'react';
import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import WaveAboutImage from 'assets/images/bg-about.png';
import Story from './Story';

export default function Header() {
  return (
    <Box className="bg-white">
      <img alt="" src={WaveAboutImage} width="100%" style={{ position: 'absolute' }} />
      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        <Grid container mb={{ xs: 5, sm: 5, md: 30, lg: 40, xl: 30 }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            p={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }}
            pt={{ xs: 10, sm: 10, md: 15, lg: 20, xl: 25 }}
          >
            <Typography variant="h1" pt={2} sx={{ display: 'block' }}>
              About Us
            </Typography>
            <Typography variant="body2" pt={2}>
              At OnWave Design, we specialize in designing
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
