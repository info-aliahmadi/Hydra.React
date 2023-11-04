import 'react';
import { Button } from '@mui/material';
import { Box } from '@mui/system';

export default function Tags() {
  return (
    <Box>
      <Button href="/blogTag" variant="contained" color="info">
        Tage 1
      </Button>
      <Button href="/blogTag" variant="contained" color="info">
        Tage 2
      </Button>
      <Button href="/blogTag" variant="contained" color="info">
        Tage 3
      </Button>
      <Button href="/blogTag" variant="contained" color="info">
        Tage 4
      </Button>
    </Box>
  );
}
