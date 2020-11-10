import React, { forwardRef } from 'react';
import HubblrImage from '../image-components/HubblrImage';
import IndexGradientBorderButtonLongArrow from '../gradient-border-buttons/IndexGradientBorderButtonLongArrow';

const IntroductionSectionContent = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <HubblrImage className="w-20 md:w-40 mb-12" />
      <h1 className="mb-10 text-4xl md:text-6xl font-black leading-tight md:leading-none max-w-2xl">
        Developing our digital tomorrow
      </h1>

      <h2 className="mb-12 text-base md:text-3xl md:font-light leading-snug md:leading-tight">
        Um Nutzer-Zentrierte und innovative Softwareprodukte mit der Aufschrift “Made in Germany”
        endlich auch auf der Welt zu sehen, entwickeln wir in 3 Sparten herausstechende Projekte.
      </h2>

      <IndexGradientBorderButtonLongArrow theme="dark">
        Jetzt kontaktieren
      </IndexGradientBorderButtonLongArrow>
    </div>
  );
});

export default IntroductionSectionContent;
