import React from 'react';
import Category from './Sections/Category';
import Posts from './Sections/Posts';
import Header from '../Shared/Header';
import BottomPost from '../Blog/Sections/BottomPost';

export default function BlogCategory() {
  return (
    <>
      <Header title="Posts By Category" description={'At OnWave Design, we specialize in designing'} />
      <Category />
      <Posts />
      <BottomPost />
    </>
  );
}
