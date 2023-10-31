import React from 'react';
import Header from './Sections/Header';
import Introduce from './Sections/Introduce';
import Features from './Sections/Features';
import Testimonial from './Sections/Testimonial';
import Statistics from './Sections/Statistics';
import Request from './Sections/Request';
import Contact from './Sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <Introduce />
      <Features />
      <Testimonial />
      <Statistics />
      <Request />
      <Contact />
    </>
  );
}
