import { Button, Card, Grid, Stack, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import PreviewImage from 'assets/images/Image.png';
import WaveContactImage from 'assets/images/wave-contact.svg';
import 'react';
import Author from '../../Shared/Author';
import { useEffect, useState } from 'react';
import HomeService from 'modules/home/services/HomeService';
import CONFIG from 'config';
import { DateTimeViewer } from 'utils/DateViewer';
import readingTime from 'utils/readingTime';

export default function RelatedPosts({ postId }) {
  const [relatedPost, setRelatedPost] = useState();

  var homeService = new HomeService();

  function loadRelatedArticles(postId) {
    homeService.getRelatedArticles(postId).then((result) => {
      setRelatedPost(result);
    });
  }
  useEffect(() => {
    loadRelatedArticles(postId);
  }, [postId]);

  function Post({ post }) {
    return (
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <Card className="post-card">
          <Grid container>
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
                <Typography variant="body2" pt={2} fontWeight={700}>
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
                      length: 150,
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
                {/* <Typography variant="body2" pt={2} pb={2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography> */}
              </Stack>
            </Grid>
            <Grid item container xs={12} sm={12} md={12} lg={12} xl={12} spacing={{ xs: 5, sm: 5, md: 5, lg: 5, xl: 5 }}>
              {relatedPost?.map((post, index) => (
                <Post key={'rp-' + index} post={post} />
              ))}
              {/* <Post /> <Post /> <Post /> */}
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Box textAlign="center" p={10}>
                <Button href="/blog" variant="contained" color="info" size="large">
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
