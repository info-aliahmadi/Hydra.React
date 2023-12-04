import React, { useEffect, useState } from 'react';
import TopPost from './Sections/TopPost';
import Category from './Sections/Category';
import Posts from './Sections/Posts';
import BottomPost from './Sections/BottomPost';
import Header from '../Shared/Header';
import HomeService from 'modules/home/services/HomeService';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Container, Grid, Pagination } from '@mui/material';

export default function Blog() {
  const [blogPost, setBlogPost] = useState();
  let navigate = useNavigate();
  const params = useParams();
  var homeService = new HomeService();

  let page = params.page;
  page = page > 0 ? parseInt(page) : 1;

  const handlePageChange = (event, value) => {
    navigate('/blog/' + value);
  };
  function loadArticles(page) {
    homeService.getArticles('', '', '', page, 0).then((result) => {
      setBlogPost(result);
    });
  }
  useEffect(() => {
    loadArticles(page);
  }, [page]);

  return (
    <>
      <Header title="Blog" description={'At OnWave Design, we specialize in designing'} />
      <TopPost />
      <Category />
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
