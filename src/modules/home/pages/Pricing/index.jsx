import React from 'react';
import Introduce from './Sections/Introduce';
import Plans from './Sections/Plans';
import FAQ from './Sections/FAQ';
import CTA from './Sections/CTA';
import Header from '../Shared/Header';
// import Header from './Sections/Header';

export default function Pricing() {
  return (
    <>
    <Header title="Pricing Plan" description="Fair Price for High Quality Work" />
      <Introduce />
      <Plans />
      <FAQ />
      <CTA />
    </>
  );
}
