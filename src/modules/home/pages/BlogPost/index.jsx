import React from 'react';
import Content from './Sections/Content';
import RelatedPosts from './Sections/RelatedPosts';
import Header from '../Shared/Header';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Typography } from '@mui/material';
import ShareButtons from './Sections/ShareButtons';
import Author from '../Shared/Author';

export default function BlogPost() {
  return (
    <>
      <Header>
        <Typography variant="body2" pt={2} display="flex" alignItems="center">
          <a href="/blog" className="link-body">
            Blog
          </a>
          <ArrowForwardIosIcon fontSize="small" sx={{ padding: '0 2px', margin: '0 5px' }} />{' '}
          <a href="/blogcategory" className="link-body">
            Category
          </a>
        </Typography>
        <Typography variant="h1" pt={3}>
          Blog title heading will go here
        </Typography>
        <Box pt={6} display="flex" justifyContent="space-between" alignItems="center">
          <Author />
          <ShareButtons />
        </Box>
      </Header>
      <Content />
      <RelatedPosts />
    </>
  );
}
