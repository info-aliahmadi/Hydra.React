import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header';
import BottomPost from '../Blog/Sections/BottomPost';
import Category from '../Blog/Sections/Category';
import Posts from '../Blog/Sections/Posts';
import HomeService from 'modules/home/services/HomeService';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Container, Grid, Pagination } from '@mui/material';

export default function BlogCategory() {
  const [blogPost, setBlogPost] = useState();

  let navigate = useNavigate();
  const params = useParams();

  let page = params.page;
  page = page > 0 ? parseInt(page) : 1;

  let category = params.category;
  if (category == null || category == '' || category == undefined) navigate('/blog');

  const handlePageChange = (event, value) => {
    navigate('/blogcategory/' + category + '/' + value);
  };

  var homeService = new HomeService();
  function loadArticles(page, category) {
    homeService.getArticles('', category, '', page, 0).then((result) => {
      setBlogPost(result);
    });
  }
  useEffect(() => {
    loadArticles(page, category);
  }, [page, category]);

  return (
    <>
      <Header title="Posts By Category" description={'At OnWave Design, we specialize in designing'} />
      <Category active={category} />
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
