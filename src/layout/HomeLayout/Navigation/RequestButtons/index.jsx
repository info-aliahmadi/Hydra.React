import { Button } from '@mui/material';
import 'react';

export default function RequestButtons() {
  return (
    <>
      <Button variant="outlined" color="primary" size="large">
        Consult
      </Button>
      <Button variant="contained" color="primary" size="large">
        Request
      </Button>
    </>
  );
}
