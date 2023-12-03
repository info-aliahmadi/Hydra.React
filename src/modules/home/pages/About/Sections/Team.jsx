import { Avatar, Grid, Grow, Link, Stack, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import WaveContactImage from 'assets/images/wave-contact.svg';
function Person() {
  return (
    <Stack alignItems="center">
      <Avatar sx={{ width: 170, height: 170 }} />
      <Typography variant="h5" pt={2}>
        Full Name
      </Typography>
      <Typography variant="body1" pt={2} fontWeight={800}>
        Job Title
      </Typography>
      <Typography variant="body1" pt={1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
      </Typography>
      <Stack className="team social-link" pt={2} flexDirection={'row'} alignItems="center" justifyContent="center">
        <Link href="#" p={1}>
          <LinkedInIcon fontSize="large" />
        </Link>
        <Link href="#" style={{ color: '#000' }}>
          <svg width="28" height="26" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.8427 0.742676H17.6028L11.5727 7.52008L18.6666 16.7427H13.1122L8.76173 11.1493L3.78386 16.7427H1.02207L7.4718 9.49348L0.666626 0.742676H6.36208L10.2945 5.8553L14.8427 0.742676ZM13.8739 15.1181H15.4034L5.53104 2.28196H3.88983L13.8739 15.1181Z" />
          </svg>
        </Link>
      </Stack>
    </Stack>
  );
}

export default function Team() {
  return (
    <Box className="bg-blue">
      <Box
        className="bg-wave"
        sx={{
          backgroundImage: `url(${WaveContactImage})`
        }}
        height={{ xs: 300, sm: 350, md: 380, lg: 400, xl: 400 }}
      ></Box>
      <Container maxWidth="xl">
        <Grid container pl={{ xs: 5, sm: 5, md: 15, lg: 0, xl: 0 }} pr={{ xs: 5, sm: 5, md: 15, lg: 0, xl: 0 }}>
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            justifyContent="center"
            pb={{ xs: 3, sm: 10, md: 15, lg: 15, xl: 15 }}
          >
            <Grid item sx={{ textAlign: 'center' }}>
              <Typography variant="h5" pt={2}>
                Innovative
              </Typography>
              <Typography variant="h1" pt={2}>
                Our Team
              </Typography>
              <Typography variant="body2" pt={2}>
                At OnWave Design, we specialize in proving cutting-edge web design
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} rowSpacing={{ xs: 7, sm: 7, md: 5, lg: 7, xl: 7 }}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} textAlign={'center'}>
              <Person />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} textAlign={'center'}>
              <Person />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} textAlign={'center'}>
              <Person />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
