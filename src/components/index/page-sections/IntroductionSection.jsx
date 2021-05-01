import React from 'react';
import PropTypes from 'prop-types';
import WebsiteHeroVideo from '../../videos/web-hero.mp4';

function IntroductionSection({ children }) {
  return (
    <>
      <video
        muted
        autoPlay
        loop
        className="absolute min-h-full min-w-full w-auto h-screen overflow-hidden max-w-none z-0"
      >
        <source src={WebsiteHeroVideo} type="video/mp4" />
      </video>
      <div className=" absolute flex-grow min-h-screen flex flex-col w-screen h-screen bg-black bg-opacity-75 z-30">
        <p> </p>
      </div>
      <div className="container mx-auto min-h-screen flex flex-col h-screen mb-40 ">
        <div className="flex-grow flex flex-col lg:justify-center pt-20 pb-5 lg:pt-0 md:pb-0 z-50">
          {children}
        </div>
      </div>
    </>
  );
}

IntroductionSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IntroductionSection;
