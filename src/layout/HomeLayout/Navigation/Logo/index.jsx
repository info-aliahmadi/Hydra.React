import 'react';
import logo from 'assets/images/OnWaveLogo.png';
import { Box } from '@mui/material';
export default function Logo({ sx }) {
  return (
    <Box sx={sx}>
      <img alt="profile user" src={logo} height="50" />
    </Box>
  );
}
