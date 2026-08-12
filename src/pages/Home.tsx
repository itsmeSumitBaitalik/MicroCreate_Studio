import React from 'react';
import { Hero } from '../components/Hero';
import { WhyUs } from '../components/WhyUs';
import { AboutTeaser } from '../components/AboutTeaser';
import { ServicesTeaser } from '../components/ServicesTeaser';
import { WorkTeaser } from '../components/WorkTeaser';
import { ContactCta } from '../components/ContactCta';

export function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <AboutTeaser />
      <ServicesTeaser />
      <WorkTeaser />
      <ContactCta />
    </>);

}