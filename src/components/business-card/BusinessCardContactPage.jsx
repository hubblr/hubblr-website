import React from 'react';
import BusinessCard from './BusinessCard';
import CedricBalsImage from '../image-components/CedricBalsImage';

function BusinessCardContactPage() {
  return (
    <BusinessCard
      image={<CedricBalsImage widthClass="w-24" />}
      name="Cedric Bals"
      position="CEO"
      actionName="Termin planen"
    >
      <h2 className="text-center text-2xl font-extrabold leading-8 mb-10 leading-none">
        30-Minuten Online-Austausch planen
      </h2>
      <h3 className="text-center text-xl leading-7 mb-10 leading-tight">
        &quot;Erzählen Sie mir mehr von Ihrem Projekt! Ich freue mich, Sie kennenzulernen.&quot;
      </h3>
    </BusinessCard>
  );
}

export default BusinessCardContactPage;
