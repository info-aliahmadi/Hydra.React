import { Grid, Link } from '@mui/material';
import { Box, Container } from '@mui/system';
import 'react';

export default function Category() {
  return (
    <Box className="bg-white" pt={{ xs: 10, sm: 10, md: 0, lg: 0, xl: 0 }}>
      <Container maxWidth="xl">
        <Grid container>
          <Box className="category" p={5} pl={{ xs: 5, sm: 5, md: 15, lg: 0, xl: 0 }} pr={{ xs: 5, sm: 5, md: 5, lg: 0, xl: 0 }}>
            <Link href={'#'}>View all</Link>
            <Link href={'#'}>Category 1</Link>
            <Link href={'#'}>Category 2</Link>
            <Link href={'#'}>Category 3</Link>
            <Link href={'#'}>Category 4</Link>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
