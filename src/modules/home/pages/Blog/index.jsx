import React from 'react';
import Header from './Sections/Header';
import TopPost from './Sections/TopPost';
import Category from './Sections/Category';
import Posts from './Sections/Posts';
import BottomPost from './Sections/BottomPost';

export default function Blog() {
  return (
    <>
      <Header />
      <TopPost />
      <Category />
      <Posts />
      <BottomPost />
    </>
  );
}
