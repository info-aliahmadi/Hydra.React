import { Grid, Stack, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import WaveAboutImage from 'assets/images/wave-about.svg';
import 'react';

export default function Introduce() {
  return (
    <Box className="bg-white">
      <Box
        className="bg-wave"
        sx={{
          backgroundImage: `url(${WaveAboutImage})`
        }}
        height={{ xs: 300, sm: 350, md: 400, lg: 400, xl: 480 }}
      ></Box>
      <Container maxWidth="xl">
        <Grid container alignItems="center" alignContent="center" justifyContent="center">
          <Grid item xs={10} sm={10} md={8} lg={8} xl={8}>
            <Stack alignItems="center" textAlign={'center'} pt={15} pb={15}>
              <Typography variant="h5" pt={2}>
                Our Vision
              </Typography>
              <Typography variant="h1" pt={2}>
                {/* Elevating Your Brand With Innovative Website Solutions */}
                Let Us Turn Your <strong className="gradient-text"> Vision </strong> Into{' '}
                <strong className="gradient-text"> Reality </strong>
              </Typography>
              <Typography variant="body2" pt={4}>
                Our team will collaborate with you to bring your vision to life through expert website design and development. With a focus
                on delivering exceptional results, we&apos;ll work tirelessly to ensure that your website exceeds your expectations and
                effectively communicates your brand and message.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
