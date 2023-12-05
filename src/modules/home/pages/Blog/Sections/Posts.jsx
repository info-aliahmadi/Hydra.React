import { Alert, AlertTitle, Card, Grid, Pagination, Stack, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import PreviewImage from 'assets/images/Image.png';
import 'react';
import Author from '../../Shared/Author';
import CONFIG from 'config';
import _ from 'lodash';
import readingTime from 'utils/readingTime';
import { DateTimeViewer } from 'utils/DateViewer';
import { useNavigate } from 'react-router-dom';

function Post({ post }) {
  return (
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <Card className="post-card">
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Card className="box">
              <img
                alt=""
                src={
                  post?.previewImageUrl
                    ? post?.previewImageUrl
                    : post?.previewImageId
                    ? CONFIG.UPLOAD_BASEPATH + post?.previewImage.directory + post?.previewImage.thumbnail
                    : PreviewImage
                }
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Stack>
              <Typography variant="h5" pt={2}>
                {post?.topics.map((category, index) => (
                  <a key={'c-' + index} href={'/blogcategory/' + category} className="post-category">
                    {category}
                    {post?.topics.length - 1 == index ? '' : ', '}
                  </a>
                ))}
              </Typography>
              <a href={'/blogpost/' + post?.id + '/' + post?.subject} className="post-title">
                <Typography variant="h3" pt={2}>
                  {post?.subject}
                </Typography>
              </a>
              <Typography
                variant="body1"
                pt={2}
                pb={2}
                dangerouslySetInnerHTML={{
                  __html: _.truncate(post?.body, {
                    length: 250,
                    seperator: '.'
                  })
                }}
              ></Typography>
              <Author
                author={post?.writer}
                date={DateTimeViewer(CONFIG.DEFAULT_LANGUAGE, post?.publishDate)}
                readingTime={readingTime(post?.body)}
              />
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
export default function Posts({ blogPost }) {
  return (
    <Box className="bg-white">
      <Container maxWidth="xl">
        <Grid
          container
          pt={1}
          spacing={{ xs: 5, sm: 5, md: 5, lg: 6, xl: 6 }}
          pl={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }}
          pr={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }}
        >
          {blogPost?.map((post, index) => (
            <Post key={'p-' + index} post={post} />
          ))}
          {blogPost?.length == 0 && (
            <Container justifyContent="center" sx={{ paddingTop: '20px' }}>
              <Alert severity="info">
                <AlertTitle>Info</AlertTitle>
                <strong> There is no data to display </strong>
              </Alert>
            </Container>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
