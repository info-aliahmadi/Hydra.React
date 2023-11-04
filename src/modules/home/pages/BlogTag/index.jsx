import React from 'react';
import Posts from './Sections/Posts';
import Header from '../Shared/Header';
import BottomPost from '../Blog/Sections/BottomPost';

export default function BlogTag() {
  return (
    <>
      <Header title="Posts By Tag" description={'At OnWave Design, we specialize in designing'} />
      <Posts />
      <BottomPost />
    </>
  );
}
