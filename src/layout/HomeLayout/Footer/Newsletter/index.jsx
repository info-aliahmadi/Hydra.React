import { Button, Grid, InputLabel, OutlinedInput, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import 'react';

export default function Newsletter() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography variant="body2">Join our newsletter to stay up to date on features and releases.</Typography>
        </Grid>
        <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput id="email" name="email" type="text" placeholder={'Email'} fullWidth />
            </Stack>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <Button variant="contained" color="primary" size="large">
              Submit
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
