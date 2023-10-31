import 'react';
import logo from 'assets/images/OnWaveLogo.png';
import { Box } from '@mui/material';
export default function Logo({ sx }) {
  return (
    <Box sx={sx}>
      <a href="/">
        <img alt="" src={logo} height="50" />
      </a>
    </Box>
  );
}
