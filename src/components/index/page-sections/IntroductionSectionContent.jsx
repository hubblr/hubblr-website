import React from 'react';
import { FormattedMessage } from 'react-intl';
import HubblrIconImage from '../animated/hubblr-icon-image/AnimatedHubblrIconImage';
import FlinkLogo from '../../../images/flink-logo.jpeg';
import MedikamendoLogo from '../../../images/medikamendo.png';

function IntroductionSectionContent() {
  return (
    <div className="flex flex-col items-center md:items-start">
      <HubblrIconImage className="mb-10 md:mb-12 bg-transparent" />
      <h1 className="mb-10 text-4xl md:text-6xl leading-tight md:leading-none max-w-2xl text-shadow-headline-purple text-center md:text-left">
        <FormattedMessage id="index.introduction.heading" />
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start mt-20 w-auto">
        <div className="flex w-full md:w-auto mb-12 text-xl md:text-base">
          <p className="flex w-full justify-center md:justify-start items-center 2xl:text-xl">
            <FormattedMessage id="index.introduction.trust" />
          </p>
        </div>
        <div className="flex w-full md:w-auto justify-center items-center md:mx-4 mb-8 md:mb-0">
          <a href="https://www.goflink.com/">
            <img src={FlinkLogo} alt="" className="object-scale-down h-12 md:h-8 w-auto " />
          </a>
        </div>
        <div className="flex relative w-full md:w-auto justify-center md:mx-4 mb-8 md:mb-0">
          <a href="https://medikamendo.com/">
            <img src={MedikamendoLogo} alt="" className="object-scale-down h-12 md:h-8 w-auto " />
          </a>
        </div>
      </div>
    </div>
  );
}

export default IntroductionSectionContent;
