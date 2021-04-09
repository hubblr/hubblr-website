import { Link } from '@reach/router';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import PlanetImage from '../../../images/planet.png';
// import SectionHeading from '../section-heading/SectionHeading';

const NewsSection = () => {
  return (
    // Section Content Container
    <div className="m-6 mt-20">
      {/* Section Header */}
      <h1 className="text-5xl mb-3 mx-5">
        <FormattedMessage id="index.startups.title" />
      </h1>
      {/* 2 ROW GRID - FOR 2 NEWS ARTICLES  */}
      <div className="grid grid-cols-2 grid-flow-row gap-10 p-4">
        {/* 2 COLS GRID - SEPARATING PHOTO AND TEXT */}
        <div className="">
          {/* EACH CONTENT CARD CAN BE OUTSOURCED INTO SINGLE CONTENT CARD COMPONENT */}
          <div className="w-full h-auto items-center md:flex-col mx-3 rounded-2xl">
            <p className="m-5 py-2 text-left">
              <FormattedMessage id="index.startups.description" />
            </p>
            <div className="w-full h-auto items-center md:flex-col mx-3 my-20 rounded-2xl">
              {/* FIRST RPW */}
              <img src={PlanetImage} alt="" className="object-scale-down" />
            </div>
            {/* SECOND ROW */}
          </div>
        </div>
        <div className="grid-rows-2 flex flex-col">
          {/* FIRST STARTUP */}
          <div className="w-full h-auto items-center mx-3 my-5 bg-gray-primary rounded-2xl">
            <h1 className="text-xl m-5 text-left">
              <FormattedMessage id="index.startups.example1.firm" />
            </h1>
            <p className="m-5 py-2 text-left">
              <FormattedMessage id="index.startups.example1.description" />
            </p>
            <div className="flex mb-5">
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-hubblr-link-gradient-1 to-hubblr-link-gradient-2">
                <Link to="/contact" className="m-5 w-1/2 ">
                  <FormattedMessage id="generic.read-more" />
                </Link>
              </h1>
            </div>
          </div>
          {/* SECOND STARTUP */}
          <div className="w-full h-auto items-center mx-3 my-5 bg-gray-primary rounded-2xl">
            <h1 className="text-xl m-5 text-left">
              <FormattedMessage id="index.startups.example2.firm" />
            </h1>
            <p className="m-5 py-2 text-left">
              <FormattedMessage id="index.startups.example2.description" />
            </p>
            <div className="flex mb-5">
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-hubblr-link-gradient-1 to-hubblr-link-gradient-2">
                <Link to="/contact" className="m-5 w-1/2 ">
                  <FormattedMessage id="generic.read-more" />
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
