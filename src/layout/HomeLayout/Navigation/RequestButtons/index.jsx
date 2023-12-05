import { Button } from '@mui/material';
import 'react';

export default function RequestButtons() {
  return (
    <>
      <Button
        href="/contact"
        variant="contained"
        color="info"
        size="large"
        sx={{
          display: { xs: 'none', sm: 'inline-block', md: 'inline-block', lg: 'inline-block', xl: 'inline-block' }
        }}
      >
        Consult
      </Button>
      <Button href="/contact" variant="contained" color="primary" size="large">
        Request
      </Button>
    </>
  );
}
