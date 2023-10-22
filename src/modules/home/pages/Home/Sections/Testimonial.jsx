import { Button, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import Feature1Image from 'assets/images/Feature-1.png';
import Feature2Image from 'assets/images/Feature-2.png';
import Feature3Image from 'assets/images/Feature-3.png';
import WaveTestimonialImage from 'assets/images/wave-testimonial.svg';
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import 'react';

export default function Testimonial() {
  return (
    <Box style={{ background: '#A1D4F8' }}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={1} sm={1} md={1} lg={1} xd={1}>
            <WestRoundedIcon style={{ position: 'relative', top: '40%' }} />
          </Grid>
          <Grid container item rowSpacing={{ xs: 7, sm: 7, md: 5, lg: 7, xd: 7 }} xs={10} sm={10} md={10} lg={10} xd={10}>
            <img src={WaveTestimonialImage} alt="" height={'100%'} width={'100%'} />
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xd={1}>
            <EastRoundedIcon  style={{ position: 'relative', top: '40%' }} />
          </Grid>{' '}
        </Grid>
      </Container>
    </Box>
  );
}
