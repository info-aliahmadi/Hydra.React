import React from 'react';
import Introduce from './Sections/Introduce';
import Plans from './Sections/Plans';
import FAQ from './Sections/FAQ';
import CTA from './Sections/CTA';
import Header from './Sections/Header';

export default function Pricing() {
  return (
    <>
      <Header />
      <Introduce />
      <Plans />
      <FAQ />
      <CTA />
    </>
  );
}
