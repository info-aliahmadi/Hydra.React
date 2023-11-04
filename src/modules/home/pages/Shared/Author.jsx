import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import 'react';

export default function Author() {
  return (
    <Box alignItems="center" display="flex">
      <Avatar sx={{ width: 50, height: 50 }} />
      <Box pl={2} justifyContent="center">
        <Typography variant="body1">Full name</Typography>
        <Box display="flex">
          <Typography variant="body1" component="span" mr={2}>
            11 Jan 2022
          </Typography>
          <AccessTimeIcon fontSize="small" color="action" />
          <Typography variant="body12" component="span" pl={1}>
            5 min read
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}