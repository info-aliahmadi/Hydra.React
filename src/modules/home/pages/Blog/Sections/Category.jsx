import { Grid, Link } from '@mui/material';
import { Box, Container } from '@mui/system';
import 'react';

export default function Category() {
  return (
    <Box className="bg-white">
      <Container maxWidth="xl">
        <Grid container>
          <Box className="category" p={5} pl={0}>
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
