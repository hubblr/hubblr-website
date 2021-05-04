import React from 'react';
import { FormattedMessage } from 'react-intl';
import PlanetImage from '../../../images/planet.png';
import StartupSectionContentCard from './StartupSectionContentCard';

const NewsSection = () => {
  return (
    // Section Content Container
    <div className="container mx-auto mb-40">
      {/* Section Header */}
      <h1 className="text-5xl mb-12">
        <FormattedMessage id="index.startups.title" />
      </h1>
      {/* 
      @LARGE DISPLAYS --- 2 COL GRID 
        --> For general startup description and 2 startup examples 
      @SMALLER DISPLAYS ---1 COL GRID  
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-10">
        <div>
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
          <StartupSectionContentCard
            firm={<FormattedMessage id="index.startups.example1.firm" />}
            description={<FormattedMessage id="index.startups.example1.description" />}
            link="/contact"
          />
          {/* SECOND STARTUP */}
          <StartupSectionContentCard
            firm={<FormattedMessage id="index.startups.example2.firm" />}
            description={<FormattedMessage id="index.startups.example2.description" />}
            link="/contact"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;