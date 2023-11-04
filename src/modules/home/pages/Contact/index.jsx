import React from 'react';

import EmailIcon from '@mui/icons-material/Email';
import { Box, Container, Grid, Typography } from '@mui/material';
import ContactForm from './Sections/ContactForm';
import WaveContactImage from 'assets/images/wave-contact-page.svg';

export default function Contact() {
  return (
    <>
      <Box className="bg-blue">
        <Box
          className="bg-wave"
          sx={{
            backgroundImage: `url(${WaveContactImage})`
          }}
          height={{ xs: 300, sm: 300, md: 350, lg: 450, xl: 400 }}
        ></Box>
        <Container maxWidth="xl">
          <Grid
            container
            pb={{ xs: 10, sm: 10, md: 10, lg: 10, xl: 10 }}
            pl={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }}
            pr={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }}
          >
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Grid container item xs={12} sm={12} md={5} lg={5} xl={5}>
                <Box>
                  <Typography variant="h5" pt={2}>
                    Contact
                  </Typography>
                  <Typography variant="h1" pt={2}>
                    Contact
                  </Typography>
                  <Typography variant="body2" pt={2}>
                    Have a question or need assistance? Contact us!
                  </Typography>
                  <Typography variant="body2" pt={2} sx={{ display: 'flex', alignItems: 'center' }}>
                    <EmailIcon sx={{ marginRight: '5px' }} /> info@onwavedesign.com
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <ContactForm />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
