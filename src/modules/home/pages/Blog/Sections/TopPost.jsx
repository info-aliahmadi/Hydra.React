import { Card, Grid, Stack, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import PreviewImage from 'assets/images/Image.png';
import 'react';
import Author from '../../Shared/Author';
import HomeService from 'modules/home/services/HomeService';
import { useEffect, useState } from 'react';
import { DateTimeViewer } from 'utils/DateViewer';
import readingTime from 'utils/readingTime';
import CONFIG from 'config';

export default function TopPost() {
  var homeService = new HomeService();

  const [post, setPost] = useState();

  function loadPost() {
    homeService.getTopArticle().then((result) => {
      setPost(result);
    });
  }
  useEffect(() => {
    loadPost();
  }, []);

  return (
    <Box className="bg-white">
      <Container maxWidth="xl">
        <Grid
          container
          alignItems="center"
          alignContent="center"
          justifyContent="center"
          pl={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }}
          pr={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }}
        >
          <Card className="post-card">
            <Grid container columnSpacing={7}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Stack>
                  <Typography variant="h5" pt={2}>
                    {post?.topics.map((category, index) => (
                      <a key={'c-' + index} href={'/blogcategory/' + category} className="post-category">
                        {category}
                        {post?.topics.length - 1 == index ? '' : ' , '}
                      </a>
                    ))}
                  </Typography>
                  <a href={'/blogpost/' + post?.id + '/' + post?.subject} className="post-title">
                    <Typography variant="h3" pt={2}>
                      {post?.subject}
                    </Typography>
                  </a>
                  <Typography
                    variant="body2"
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
      </Container>
    </Box>
  );
}
