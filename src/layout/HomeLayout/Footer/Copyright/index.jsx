import { Box, Grid, Menu, MenuItem, Typography } from '@mui/material';
import 'react';

export default function Copyright() {
  return (
    <>
      <Grid container sx={{ borderTop: '1px solid #EAEEFD' }} p={3} justifyContent={'space-between'}>
        <Grid item>
          <Typography variant="body1">© 2023 OnWaveDesign. All rights reserved.</Typography>
        </Grid>
        <Grid item>
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-evenly' }}>
            <Typography sx={{ minWidth: 100 }}>Privacy Policy</Typography>
            <Typography sx={{ minWidth: 100 }}>Terms of Service</Typography>
            <Typography sx={{ minWidth: 100 }}> Cookies Settings</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
