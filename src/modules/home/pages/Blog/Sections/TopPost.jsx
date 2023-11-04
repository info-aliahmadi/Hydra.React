import { Grid, Stack, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import PreviewImage from 'assets/images/Image.png';
import 'react';
import Author from '../../Shared/Author';

export default function TopPost() {
  return (
    <Box className="bg-white">
      <Container maxWidth="xl">
        <Grid
          container
          alignItems="center"
          alignContent="center"
          justifyContent="center"
          pt={{ xs: 5, sm: 5, md: 0, lg: 5, xl: 5 }}
          pl={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }}
          pr={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }}
          columnSpacing={7}
        >
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <img alt="" src={PreviewImage} width={'100%'} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Stack>
              <a href="/blogcategory" className="post-title">
                <Typography variant="h5" pt={2}>
                  Category
                </Typography>
              </a>
              <a href="/blogpost" className="post-title">
                <Typography variant="h1" pt={2}>
                  Blog title heading will go here
                </Typography>
              </a>
              <Typography variant="body2" pt={4} pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus,
                mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              </Typography>
              <Author />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
