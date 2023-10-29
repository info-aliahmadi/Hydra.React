import { Box, Grid, Typography } from '@mui/material';
import 'react';

export default function Copyright() {
  return (
    <>
      <Grid container className="copyright" p={3} justifyContent={'space-between'}>
        <Grid item>
          <Typography variant="body1">© 2023 OnWaveDesign. All rights reserved.</Typography>
        </Grid>
        <Grid item>
          <Box className="copyright-links">
            <Typography sx={{ minWidth: 100 }} variant="body1">
              <a href="#"> Privacy Policy</a>
            </Typography>
            <Typography sx={{ minWidth: 100 }} variant="body1">
              <a href="#"> Terms of Service</a>
            </Typography>
            <Typography sx={{ minWidth: 100 }} variant="body1">
              <a href="#"> Cookies Settings</a>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
