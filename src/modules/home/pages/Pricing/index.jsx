import React from 'react';
import Header from './Sections/Header';
import Introduce from './Sections/Introduce';
import Plans from './Sections/Plans';
import ServiceTab from './Sections/ServiceTab';
import Team from './Sections/Team';
import Testimonial from '../Home/Sections/Testimonial';
import Request from '../Home/Sections/Request';
import Contact from '../Home/Sections/Contact';
import Process from './Sections/Process';

export default function Pricing() {
  return (
    <>
      <Header />
      <Introduce />
      <Plans />
      <ServiceTab />
      <Process />
      <Testimonial showWave={true} />
      <Request />
      <Contact />
    </>
  );
}
