import React from 'react';
import TopPost from './Sections/TopPost';
import Category from './Sections/Category';
import Posts from './Sections/Posts';
import BottomPost from './Sections/BottomPost';
import Header from '../Shared/Header';

export default function Blog() {
  return (
    <>
      <Header title="Blog" description={'At OnWave Design, we specialize in designing'} />
      <TopPost />
      <Category />
      <Posts />
      <BottomPost />
    </>
  );
}
