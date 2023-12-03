import React, { useEffect, useState } from 'react';
import TopPost from './Sections/TopPost';
import Category from './Sections/Category';
import Posts from './Sections/Posts';
import BottomPost from './Sections/BottomPost';
import Header from '../Shared/Header';
import HomeService from 'modules/home/services/HomeService';
import { useParams } from 'react-router-dom';

export default function Blog() {
  const [blogPost, setBlogPost] = useState();

  const params = useParams();
  const page = params.page;

  var homeService = new HomeService();
  function loadArticles(page) {
    page = page > 0 ? page : 1;
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
      <Posts blogPost={blogPost} />
      <BottomPost />
    </>
  );
}
