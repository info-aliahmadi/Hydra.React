import { Button, Grid, Stack, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import PreviewImage from 'assets/images/Image.png';
import WaveContactImage from 'assets/images/wave-contact.svg';
import 'react';
import Author from './Author';

export default function BottomPost() {
  return (
    <Box className="bg-blue">
      <img alt="" src={WaveContactImage} width="100%" />
      <Container maxWidth="xl">
        <Grid container pt={5}>
          <Grid container Item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid Item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Stack pb={15} pt={15}>
                <Typography variant="h1" pt={2}>
                  Blog title heading will go here
                </Typography>
                <Typography variant="body2" pt={2} pb={2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus,
                  mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                </Typography>
                <Box sx={{ flexGrow: 0, display: 'flex' }}>
                  <Button variant="contained" color="primary" size="large">
                    Request
                  </Button>
                  <Button variant="contained" color="info" size="large">
                    Consult
                  </Button>
                </Box>
              </Stack>
            </Grid>
            <Grid Item xs={12} sm={12} md={6} lg={6} xl={6}>
              <img alt="" src={PreviewImage} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
