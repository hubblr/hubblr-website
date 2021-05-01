import React from 'react';
import { LocalizedLink as Link } from 'gatsby-theme-i18n';
import { FormattedMessage } from 'react-intl';
import HubblrIconImage from '../animated-elements/hubblr-icon-image/AnimatedHubblrIconImage';
import IndexGradientBorderButtonBasic from '../../buttons/gradient-border-buttons/IndexGradientBorderButtonBasic';
import FlinkLogo from '../../../images/flink-logo.png';
import MedikamendoLogo from '../../../images/medikamendo.png';

function IntroductionSectionContent() {
  return (
    <div className="flex flex-col">
      <HubblrIconImage className="w-24 md:w-40 mb-10 md:mb-12" />
      <h1 className="mb-10 text-4xl md:text-6xl leading-tight md:leading-none max-w-2xl text-shadow-headline-purple">
        <FormattedMessage id="index.introduction.heading" />
      </h1>

      <Link to="/contact">
        <IndexGradientBorderButtonBasic theme="dark">
          <FormattedMessage id="generic.more" />
        </IndexGradientBorderButtonBasic>
      </Link>

      <p className="flex flex-row items-center mt-20">
        <FormattedMessage id="index.introduction.trust" />
        <a href="https://www.goflink.com/">
          <img src={FlinkLogo} alt="" className="h-8 w-auto mx-4" />
        </a>
        <a href="https://medikamendo.com/">
          <img src={MedikamendoLogo} alt="" className="h-8 w-auto mx-4" />
        </a>
      </p>
    </div>
  );
}

export default IntroductionSectionContent;
