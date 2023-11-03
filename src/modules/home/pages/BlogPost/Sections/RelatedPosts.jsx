import { Button, Grid, Stack, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import PreviewImage from 'assets/images/Image.png';
import WaveContactImage from 'assets/images/wave-contact.svg';
import 'react';
import Author from './Author';

export default function RelatedPosts() {
  function Post() {
    return (
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <Grid>
          <img alt="" src={PreviewImage} width={'100%'} />
        </Grid>
        <Grid>
          <Stack>
            <Typography variant="h5" pt={2}>
              Category
            </Typography>
            <a href="#" className="post-title">
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
    <Box className="bg-blue">
      <Box
        className="bg-wave"
        sx={{
          backgroundImage: `url(${WaveContactImage})`
        }}
        height={{ xs: 300, sm: 350, md: 380, lg: 400, xl: 400 }}
      ></Box>
      <Container maxWidth="xl">
        <Grid container pt={5}>
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            pl={{ xs: 5, sm: 5, md: 5, lg: 5, xl: 10 }}
            pr={{ xs: 5, sm: 5, md: 5, lg: 5, xl: 10 }}
          >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} alignItems="center">
              <Stack pb={5} alignItems="center">
                <Typography variant="h1" pt={2}>
                  Related Posts
                </Typography>
                <Typography variant="body2" pt={2} pb={2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Stack>
            </Grid>
            <Grid item container xs={12} sm={12} md={12} lg={12} xl={12} spacing={{ xs: 5, sm: 5, md: 5, lg: 5, xl: 10 }}>
              <Post /> <Post /> <Post />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Box textAlign="center" p={10}>
                <Button variant="contained" color="info" size="large">
                  View All
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
