import { Button, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import WaveRequestImage from 'assets/images/wave-request.svg';
import 'react';

export default function Request() {
  return (
    <Box style={{ background: '#EAEEFD' }}>
      <img alt="profile user" src={WaveRequestImage} width="100%" />
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
            <Grid item>
              <Typography variant="h1" pt={2}>
                Transforming your web development dreams
              </Typography>
              <Typography variant="body2" pt={2}>
                Get a quote or consultation for your web development needs
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            <Button variant="contained" color="primary" size="large">
              Request
            </Button>
            <Button variant="outlined" color="primary" size="large">
              Consult
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
