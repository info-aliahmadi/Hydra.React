import { Grid, Stack, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import PreviewImage from 'assets/images/Image.png';
import 'react';
import Author from '../../Shared/Author';
import CONFIG from 'config';
import _ from 'lodash';

export default function Posts({ blogPost }) {
  function Post({ post }) {
    return (
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Grid>
          <img
            alt=""
            src={
              post?.previewImageUrl
                ? post?.previewImageUrl
                : CONFIG.UPLOAD_BASEPATH + post?.previewImage.directory + post?.previewImage.fileName
            }
            width={'100%'}
          />
        </Grid>
        <Grid>
          <Stack>
            {post?.topics.map((index, category) => {
              <a href="/blogcategory" className="post-title">
                <Typography variant="h5" pt={2}>
                  {category}
                </Typography>
              </a>;
            })}
            <a href="/blogpost" className="post-title">
              <Typography variant="h3" pt={2}>
                {post?.Subject}
              </Typography>
            </a>
            <Typography variant="body2" pt={2} pb={2}>
              {_.truncate(post?.Body, {
                length: 250
              })}
            </Typography>
            <Author author={post?.writer} date={post?.publishDate} />
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
          {blogPost?.map((index, post) => {
            <Post post={post} />;
          })}
          {/* <Post /> <Post /> <Post /> <Post /> <Post /> <Post /> */}
        </Grid>
      </Container>
    </Box>
  );
}
