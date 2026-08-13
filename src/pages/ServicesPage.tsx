import React from 'react';
import { PageHero } from '../components/PageHero';
import { Services } from '../components/Services';
import { WhyUs } from '../components/WhyUs';
import { Faq } from '../components/Faq';
import { ContactCta } from '../components/ContactCta';

const SERVICES_HERO = "/47522b40-9ed1-4028-8145-c761bc015399.webp";


export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Textures for walls,"
        accent="floors and facades."
        description="Every finish is hand-applied and custom-tinted. Wall systems run 1–3mm; floor systems are sealed for wet areas and heavy footfall."
        image={SERVICES_HERO}
        imageAlt="Showroom wall of graded plaster sample tiles above a consultation table"
        badge={{
          value: '450+',
          label: 'Custom shades',
          text: 'Tinted to your sample, your light and your brief — not a fixed swatch book.'
        }} />
      
      <Services />
      <WhyUs />
      <Faq />
      <ContactCta />
    </>);

}