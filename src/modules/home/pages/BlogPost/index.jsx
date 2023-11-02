import React from 'react';
import Header from './Sections/Header';
import Content from './Sections/Content';
import Posts from './Sections/Posts';
import BottomPost from './Sections/BottomPost';

export default function BlogPost() {
  return (
    <>
      <Header />
      <Content />
      {/* <Posts /> */}
      <BottomPost />
    </>
  );
}
