import { Button } from '@mui/material';
import 'react';

export default function RequestButtons() {
  return (
    <>
      <Button href="/contact" variant="contained" color="info" size="large">
        Consult
      </Button>
      <Button href="/contact" variant="contained" color="primary" size="large">
        Request
      </Button>
    </>
  );
}
