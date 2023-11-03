import 'react';
import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import WaveBlogImage from 'assets/images/wave-blog.svg';

export default function Header({ title, description, children }) {
  function NormalTitle() {
    return (
      <>
        <Typography variant="h1" pt={2} sx={{ display: 'block' }}>
          {title}
        </Typography>
        <Typography variant="body2" pt={2}>
          {description}
        </Typography>{' '}
      </>
    );
  }
  return (
    <Box className="bg-white">
      <Box
        className="bg-wave"
        sx={{
          backgroundImage: `url(${WaveBlogImage})`
        }}
        height={{ xs: 300, sm: 300, md: 350, lg: 450, xl: 600 }}
      >
        <Container maxWidth="xl">
          <Grid container mb={{ xs: 5, sm: 5, md: 30, lg: 40, xl: 30 }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              pt={{ xs: 10, sm: 10, md: 12, lg: 12, xl: 15 }}
              pl={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }}
              pr={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }}
            >
              {children ? children : <NormalTitle />}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
