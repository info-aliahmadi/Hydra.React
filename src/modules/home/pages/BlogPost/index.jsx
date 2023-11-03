import React from 'react';
import Content from './Sections/Content';
import RelatedPosts from './Sections/RelatedPosts';
import Header from '../Shared/Header';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Typography } from '@mui/material';
import Author from './Sections/Author';
import ShareButtons from './Sections/ShareButtons';

export default function BlogPost() {

  return (
    <>
      <Header>
        <Typography variant="body2" pt={2} display="flex" alignItems="center">
          Blog <ArrowForwardIosIcon fontSize="small" sx={{ padding: '0 2px', margin: '0 5px' }} /> Category
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
