import { Grid, Stack, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import WaveAboutImage from 'assets/images/wave-about.svg';
import 'react';

export default function Introduce() {
  return (
    <Box className="bg-white">
      <img alt="" src={WaveAboutImage} width="100%" />
      <Container maxWidth="xl">
        <Grid container alignItems="center" alignContent="center" justifyContent="center">
          <Grid item xs={10} sm={10} md={8} lg={8} xl={8}>
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
