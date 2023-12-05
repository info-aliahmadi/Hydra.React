import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header';
import BottomPost from '../Blog/Sections/BottomPost';
import { useNavigate, useParams } from 'react-router-dom';
import HomeService from 'modules/home/services/HomeService';
import { Box } from '@mui/system';
import { Container, Grid, Pagination } from '@mui/material';
import Tags from './Sections/Tags';
import Posts from '../Blog/Sections/Posts';

export default function BlogTag() {
  const [blogPost, setBlogPost] = useState();

  let navigate = useNavigate();
  const params = useParams();

  let page = params.page;
  page = page > 0 ? parseInt(page) : 1;

  let tag = params.tag;
  if (tag == null || tag == '' || tag == undefined) navigate('/blog');

  const handlePageChange = (event, value) => {
    navigate('/blogtag/' + tag + '/' + value);
  };

  var homeService = new HomeService();
  function loadArticles(page, tag) {
    homeService.getArticles('', '', tag, page, 0).then((result) => {
      setBlogPost(result);
    });
  }
  useEffect(() => {
    loadArticles(page, tag);
  }, [page, tag]);

  return (
    <>
      <Header title="Posts By Tag" description={'At OnWave Design, we specialize in designing'} />
      <Tags active={tag} />
      <Posts blogPost={blogPost?.items} />
      <Box className="bg-white">
        <Container maxWidth="xl">
          <Grid container pt={10} justifyContent="center">
            <Pagination count={blogPost?.totalPages} page={page} size="large" onChange={handlePageChange} />
          </Grid>
        </Container>
      </Box>
      <BottomPost />
    </>
  );
}
