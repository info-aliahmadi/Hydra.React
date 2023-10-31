import { Button, Grid, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import 'react';

export default function Newsletter() {
  return (
    <>
      <Grid container justifyContent="flex-end">
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            Join our newsletter to stay up to date on features and releases.
          </Typography>
        </Grid>
        <Grid item container xs={12} sm={12} md={12} lg={12} xl={12} pt={2} alignItems={'center'} justifyContent="flex-end">
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Stack spacing={1}>
              <OutlinedInput
                id="email"
                name="email"
                type="text"
                placeholder={'Email'}
                fullWidth
                sx={{ paddingRight: 0 }}
                endAdornment={
                  <InputAdornment position="end">
                    <Button variant="contained" color="secondary" size="large" sx={{ margin: 0, borderRadius: '0 30px 30px 0' }}>
                      Subscribe
                    </Button>
                  </InputAdornment>
                }
              />
            </Stack>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4} pl={3}></Grid>
        </Grid>

        <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
          <Typography variant="body1" fontSize={11} pl={4}>
            By subscribing you agree to with our Privacy Policy
          </Typography>
          <Typography variant="body1" fontSize={11} pl={4}>
            and provide consent to receive updates from our company.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
