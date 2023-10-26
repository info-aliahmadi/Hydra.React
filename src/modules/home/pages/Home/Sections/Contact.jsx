import { FormControl, Grid, InputLabel, OutlinedInput, Typography } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import InnovationImage from 'assets/images/innovation.png';
import WaveContactImage from 'assets/images/wave-contact.svg';
import 'react';

export default function Contact() {
  return (
    <Box style={{ background: '#A1D4F8' }}>
      <img alt="profile user" src={WaveContactImage} width="100%" />
      <Container maxWidth="xl">
        <Grid container pt={{ xs: 3, sm: 5, md: 8, lg: 10, xl: 15 }} pb={{ xs: 10, sm: 10, md: 10, lg: 10, xl: 10 }}>
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={5}
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
                Get in Touch
              </Typography>
              <Typography variant="body2" pt={2}>
                Have a question or need assistance? Contact us!
              </Typography>
              <Typography variant="body2" pt={2}>
                info@onwavedesign.com
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
            <form noValidate autoComplete="off">
              <Stack spacing={1}>
                <InputLabel htmlFor="name">Name</InputLabel>
                <OutlinedInput id="name" type="text" name="name" placeholder={'Name'} fullWidth />
              </Stack>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
