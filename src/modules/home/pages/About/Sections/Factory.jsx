import { Button, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import WaveAboutImage from 'assets/images/wave-about-2.svg';
import FactoryImage from 'assets/images/statistics.png';
import 'react';

export default function Factory() {
  return (
    <Box className="bg-blue">
      <img alt="" src={WaveAboutImage} width="100%" />
      <Container maxWidth="xl">
        <img alt="" src={FactoryImage} width="100%" />
      </Container>
    </Box>
  );
}
