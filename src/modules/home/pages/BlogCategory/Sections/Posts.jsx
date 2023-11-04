import { Grid,  Stack, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import PreviewImage from 'assets/images/Image.png';
import 'react';
import Author from '../../Shared/Author';

export default function Posts() {
  function Post() {
    return (
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Grid>
          <img alt="" src={PreviewImage} width={'100%'} />
        </Grid>
        <Grid>
          <Stack>
            <a href="/blogcategory" className="post-title">
              <Typography variant="h5" pt={2}>
                Category
              </Typography>
            </a>
            <a href="/blogpost" className="post-title">
              <Typography variant="h3" pt={2}>
                Blog title heading will go here
              </Typography>
            </a>
            <Typography variant="body2" pt={2} pb={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
              quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </Typography>
            <Author />
          </Stack>
        </Grid>
      </Grid>
    );
  }

  return (
    <Box className="bg-white">
      <Container maxWidth="xl">
        <Grid
          container
          pt={5}
          spacing={{ xs: 5, sm: 5, md: 5, lg: 10, xl: 10 }}
          pl={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }}
          pr={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }}
        >
          <Post /> <Post /> <Post /> <Post /> <Post /> <Post />
        </Grid>
      </Container>
    </Box>
  );
}
