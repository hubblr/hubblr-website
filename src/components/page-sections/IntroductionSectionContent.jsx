import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import HubblrIconImage from '../animated-elements/hubblr-icon-image/AnimatedHubblrIconImage';
import IndexGradientBorderButtonLongArrow from '../buttons/gradient-border-buttons/IndexGradientBorderButtonLongArrow';

function IntroductionSectionContent() {
  return (
    <>
      <HubblrIconImage className="w-20 md:w-40 mb-12" />
      <h1 className="mb-10 text-4xl md:text-6xl font-black leading-tight md:leading-none max-w-2xl">
        <FormattedMessage id="index.introduction.heading" />
      </h1>

      <h2 className="mb-12 text-base md:text-3xl md:font-light leading-snug md:leading-tight">
        <FormattedMessage id="index.introduction.main" />
      </h2>

      <Link to="/contact">
        <IndexGradientBorderButtonLongArrow theme="dark">
          <FormattedMessage id="index.introduction.contact" />
        </IndexGradientBorderButtonLongArrow>
      </Link>
    </>
  );
}

export default IntroductionSectionContent;
