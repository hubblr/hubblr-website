import React from 'react';
import HubblrImage from '../imageComponents/HubblrImage';
import IndexGradientBorderButtonLongArrow from '../gradientBorderButtons/IndexGradientBorderButtonLongArrow';

function IntroductionSectionContent() {
  return (
    <>
      <HubblrImage className="w-20 md:w-40 mb-12" />
      <h1 className="mb-10 text-4xl md:text-6xl font-black leading-tight md:leading-none">
        Developing our digital world of tomorrow
      </h1>

      <h2 className="mb-12 text-base md:text-2xl md:font-light leading-snug md:leading-tight">
        Um Nutzer-Zentrierte und innovative Softwareprodukte mit der Aufschrift “Made in Germany”
        endlich auch auf der Welt zu sehen, entwickeln wir in 3 Sparten herausstechende Projekte.
      </h2>

      <IndexGradientBorderButtonLongArrow theme="dark">
        Jetzt kontaktieren
      </IndexGradientBorderButtonLongArrow>
    </>
  );
}

export default IntroductionSectionContent;
