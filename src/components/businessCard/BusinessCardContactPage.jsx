import React from 'react';
import BusinessCard from './BusinessCard';
import CedricBalsImage from '../imageComponents/CedricBalsImage';

function BusinessCardContactPage() {
  return (
    <BusinessCard
      image={<CedricBalsImage widthClass="w-24" />}
      name="Cedric Bals"
      position="CEO"
      actionName="Termin planen"
    >
      <h2 className="text-center text-4xl leading-8">30-Minuten Online-Austausch planen</h2>
      <h3 className="text-center text-xl leading-7">
        Erzählen Sie mir mehr von Ihrem Projekt! Ich freue mich, Sie kennenzulernen.
      </h3>
    </BusinessCard>
  );
}

export default BusinessCardContactPage;
