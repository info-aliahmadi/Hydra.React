import React from 'react';
import Header from './Sections/Header';
import Introduce from './Sections/Introduce';
import Features from './Sections/Features';
import ServiceTab from './Sections/ServiceTab';
import Team from './Sections/Team';
import Testimonial from '../Home/Sections/Testimonial';
import Request from '../Home/Sections/Request';
import Contact from '../Home/Sections/Contact';
import Process from './Sections/Process';

export default function Service() {
  return (
    <>
      <Header />
      <Introduce />
      <Features />
      <ServiceTab />
      <Process />
      <Testimonial showWave={true} />
      <Request />
      <Contact />
    </>
  );
}
