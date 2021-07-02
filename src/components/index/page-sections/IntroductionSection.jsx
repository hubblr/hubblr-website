import React from 'react';
import PropTypes from 'prop-types';
import WebsiteHeroVideo from '../../videos/hubblr-hero-video.mp4';
import { DesktopQuery } from '../../../util/helpers';

function IntroductionSection({ children }) {
  return (
    <div className="relative overflow-hidden items-center justify-center w-screen h-screen mb-40">
      <DesktopQuery>
        <div className="relative w-full h-full">
          <video
            playsInline
            muted
            autoPlay
            loop
            className="absolute top-0 left-0 w-auto min-w-full min-h-full max-w-none background-video"
          >
            <source src={WebsiteHeroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 z-10 h-screen w-screen bg-black bg-opacity-50" />
        </div>
      </DesktopQuery>
      <div className="absolute top-0 left-0 z-20 h-full w-full">
        <div className="container mx-auto flex flex-col h-screen">
          <div className="flex-grow flex flex-col lg:justify-center pt-20 pb-5 lg:pt-0 md:pb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

IntroductionSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IntroductionSection;
