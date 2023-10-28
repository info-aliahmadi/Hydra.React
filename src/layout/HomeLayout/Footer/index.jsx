import { CheckBox } from '@mui/icons-material';
import { Button, Checkbox, FormControlLabel, Grid, InputLabel, OutlinedInput, TextareaAutosize, Typography } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import WaveFooterImage from 'assets/images/wave-footer.svg';
import FooterLogoImage from 'assets/images/logo-footer.png';
import SquareIcon from '@mui/icons-material/Square';
import FacebookIcon from '@mui/icons-material/Facebook';
import 'react';
import { useState } from 'react';
import Newsletter from './Newsletter';
import Copyright from './Copyright';

export default function Footer() {
  const [checked, setChecked] = useState(false);
  return (
    <Box style={{ background: '#2C302E', color: '#EAEEFD' }}>
      <img alt="profile user" src={WaveFooterImage} width="100%" />
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
              <img alt="profile user" src={FooterLogoImage} width="100%" />
              <Newsletter />
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={12} md={7} lg={7} xl={7} spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} spacing={3}>
              <Typography>Column One</Typography>
              <ul>
                <li>Link One</li>
                <li>Link Two</li>
                <li>Link Three</li>
                <li>Link Four</li>
                <li>Link Five</li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} spacing={3}>
              <Typography>Column One</Typography>
              <ul>
                <li>Link six</li>
                <li>Link seven</li>
                <li>Link eight</li>
                <li>Link nine</li>
                <li>Link ten</li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} spacing={3}>
              <Typography>Follow Us</Typography>
              <ul>
                <li>
                  <FacebookIcon /> Facebook
                </li>
                <li>
                  <FacebookIcon /> Facebook
                </li>
                <li>
                  <FacebookIcon /> Facebook
                </li>
                <li>
                  <FacebookIcon /> Facebook
                </li>
                <li>
                  <FacebookIcon /> Facebook
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
        <Copyright />
      </Container>
    </Box>
  );
}
