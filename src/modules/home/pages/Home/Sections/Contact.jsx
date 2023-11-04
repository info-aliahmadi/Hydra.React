import { Button, Checkbox, FormControlLabel, Grid, InputLabel, OutlinedInput, TextareaAutosize, Typography } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import WaveContactImage from 'assets/images/wave-contact.svg';
import SquareIcon from '@mui/icons-material/Square';
import EmailIcon from '@mui/icons-material/Email';
import 'react';
import { useState } from 'react';

export default function Contact() {
  const [checked, setChecked] = useState(false);
  return (
    <Box className="bg-blue">
      <Box
        className="bg-wave"
        sx={{
          backgroundImage: `url(${WaveContactImage})`
        }}
        height={{ xs: 200, sm: 250, md: 300, lg: 360, xl: 400 }}
      ></Box>
      <Container maxWidth="xl">
        <Grid
          container
          pt={{ xs: 3, sm: 5, md: 8, lg: 10, xl: 15 }}
          pb={{ xs: 10, sm: 10, md: 10, lg: 10, xl: 10 }}
          pl={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }}
          pr={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }}
        >
          <Grid container item xs={12} sm={12} md={5} lg={5} xl={5}>
            <Grid item>
              <Typography variant="h5" pt={2}>
                Contact
              </Typography>
              <Typography variant="h1" pt={2}>
                Get in Touch
              </Typography>
              <Typography variant="body2" pt={2}>
                Have a question or need assistance? Contact us!
              </Typography>
              <Typography variant="body2" pt={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ marginRight: '5px' }} /> info@onwavedesign.com
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7} xl={7} spacing={3} pt={{ xs: 10, sm: 10, md: 0, lg: 0, xl: 0 }}>
            <form noValidate autoComplete="off">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <OutlinedInput id="name" name="name" type="text" placeholder={'Name'} fullWidth />
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <OutlinedInput id="email" name="email" type="text" placeholder={'Email'} fullWidth />
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="message">Message</InputLabel>
                    <TextareaAutosize
                      className="MuiTextareaAutosize-root"
                      fullWidth
                      id="Message"
                      name="Message"
                      type="text"
                      placeholder="Message"
                      multiline={true}
                      minRows={6}
                      inputProps={{}}
                    />
                  </Stack>
                </Grid>

                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          id="emailConfirmed"
                          color="primary"
                          required
                          size="medium"
                          onChange={(event) => setChecked(event.target.checked)}
                          checked={checked}
                          icon={<SquareIcon />}
                          defaultChecked
                          sx={{ '& .MuiSvgIcon-root': { fontSize: 28, color: '#e6f1fe', background: '#94c4f1', borderRadius: '3px' } }}
                        />
                      }
                      label={'I accept the Terms'}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={4} sm={4} md={3} lg={2} xl={2}>
                  <Stack spacing={1}>
                    <Button variant="contained" color="primary" size="large">
                      Submit
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
