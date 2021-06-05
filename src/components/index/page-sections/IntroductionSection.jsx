import React from 'react';
import PropTypes from 'prop-types';
import WebsiteHeroVideo from '../../videos/hubblr-hero-video.mp4';
import { DesktopQuery } from '../../../util/helpers';

function IntroductionSection({ children }) {
  return (
    <div className="relative overflow-hidden mb-40">
      <DesktopQuery>
        {/* DARK OVERLAY FOR VIDEO */}
        <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50 z-10" />
        <video playsinline muted autoPlay loop className="background-video z-0">
          <source src={WebsiteHeroVideo} type="video/mp4" />
        </video>
      </DesktopQuery>
      <div className="relative container mx-auto min-h-screen flex flex-col h-screen z-20">
        <div className="flex-grow flex flex-col lg:justify-center pt-20 pb-5 lg:pt-0 md:pb-0 z-0">
          {children}
        </div>
      </div>
    </div>
  );
}

IntroductionSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IntroductionSection;
