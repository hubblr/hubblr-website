import { Link } from '@reach/router';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import PlanetImage from '../../../images/planet.png';

const NewsSection = () => {
  return (
    // Section Content Container
    <div className="container mx-auto mb-40">
      {/* Section Header */}
      <h1 className="text-5xl mb-12">
        <FormattedMessage id="index.startups.title" />
      </h1>
      {/* 2 COL GRID - For general startup description and 2 startup examples */}
      <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-10">
        {/* 2 COLS GRID - SEPARATING PHOTO AND TEXT */}
        <div className="">
          {/* EACH CONTENT CARD CAN BE OUTSOURCED INTO SINGLE CONTENT CARD COMPONENT */}
          <div className="w-full h-auto items-center md:flex-col rounded-2xl gap-10">
            <p className="text-left mb-20">
              <FormattedMessage id="index.startups.description" />
            </p>
            <div className="w-full h-auto items-center md:flex-col mx-auto rounded-2xl -ml-32">
              {/* FIRST RPW */}
              <img src={PlanetImage} alt="" className="object-scale-down" />
            </div>
            {/* SECOND ROW */}
          </div>
        </div>
        <div className="grid-rows-2 flex flex-col gap-10">
          {/* FIRST STARTUP */}
          <div className="w-full h-auto items-center bg-gray-primary rounded-2xl">
            <h1 className="text-xl m-5 text-left">
              <FormattedMessage id="index.startups.example1.firm" />
            </h1>
            <p className="m-5 text-left">
              <FormattedMessage id="index.startups.example1.description" />
            </p>
            <div className="flex mb-5">
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-hubblr-blue to-hubblr-green">
                <Link to="/contact" className="m-5 w-1/2 ">
                  <FormattedMessage id="generic.read-more" />
                </Link>
              </h1>
            </div>
          </div>
          {/* SECOND STARTUP */}
          <div className="w-full h-auto items-center bg-gray-primary rounded-2xl">
            <h1 className="text-xl m-5 text-left">
              <FormattedMessage id="index.startups.example2.firm" />
            </h1>
            <p className="m-5 text-left">
              <FormattedMessage id="index.startups.example2.description" />
            </p>
            <div className="flex mb-5">
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-hubblr-blue to-hubblr-green">
                <Link to="/contact" className="m-5 w-1/2">
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
