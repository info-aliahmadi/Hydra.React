import React from 'react';
import Header from './Sections/Header';
import Story from './Sections/Story';
import Factory from './Sections/Factory';
import Statistics from './Sections/Statistics';
import Team from './Sections/Team';

export default function About() {
  return (
    <>
      <Header />
      <Story />
      <Factory />
      <Statistics />
      <Team />
    </>
  );
}
