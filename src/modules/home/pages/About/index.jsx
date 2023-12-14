import React from 'react';
// import Header from './Sections/Header';
import Story from './Sections/Story';
import Factory from './Sections/Factory';
import Statistics from './Sections/Statistics';
import Team from './Sections/Team';
import Header from '../Shared/Header';

export default function About() {
  return (
    <>
      <Header title="About Us" description="At OnWave Design, We Believe in Teamwork" />
      <Story />
      <Factory />
      <Statistics />
      <Team />
    </>
  );
}
