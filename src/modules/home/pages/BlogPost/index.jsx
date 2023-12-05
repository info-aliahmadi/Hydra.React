import React, { useEffect, useState } from 'react';
import Content from './Sections/Content';
import RelatedPosts from './Sections/RelatedPosts';
import Header from '../Shared/Header';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Typography } from '@mui/material';
import ShareButtons from './Sections/ShareButtons';
import Author from '../Shared/Author';
import HomeService from 'modules/home/services/HomeService';
import { useParams } from 'react-router-dom';
import { DateTimeViewer } from 'utils/DateViewer';
import readingTime from 'utils/readingTime';
import CONFIG from 'config';

export default function BlogPost() {
  const params = useParams();
  var homeService = new HomeService();

  const [post, setPost] = useState();

  let postId = params.id;

  function loadPost(postId) {
    homeService.getArticle(postId).then((result) => {
      setPost(result);
    });
  }
  useEffect(() => {
    loadPost(postId);
  }, [postId]);

  return (
    <>
      <Header>
        <Typography variant="body2" pt={2} display="flex" alignItems="center">
          <a href="/blog" className="link-body">
            Blog
          </a>
          <ArrowForwardIosIcon fontSize="small" sx={{ padding: '0 2px', margin: '0 5px' }} />{' '}
          {post?.topics.map((category, index) => (
            <a key={'c-' + index} href={'/blogcategory/' + category} className="link-body">
              {category}
              {post?.topics.length - 1 == index ? '' : ' , '}
            </a>
          ))}
        </Typography>
        <Typography variant="h1" pt={3}>
          {post?.subject}
        </Typography>
        <Box pt={6} display="flex" justifyContent="space-between" alignItems="center">
          <Author
            author={post?.writer}
            date={DateTimeViewer(CONFIG.DEFAULT_LANGUAGE, post?.publishDate)}
            readingTime={readingTime(post?.body)}
          />
          <ShareButtons />
        </Box>
      </Header>
      <Content post={post} />
      <RelatedPosts postId={postId} />
    </>
  );
}
