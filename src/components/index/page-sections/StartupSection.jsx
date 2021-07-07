import React from 'react';
import { FormattedMessage } from 'react-intl';
import PlanetImage from '../../../images/planet.png';
import StartupSectionContentCard from './StartupSectionContentCard';

const NewsSection = () => {
  return (
    // Section Content Container
    <div className="container mx-auto mb-40">
      {/* Section Header */}
      <h2 className="text-5xl mb-12">
        <FormattedMessage id="index.startups.title" />
      </h2>
      {/* 
      @LARGE DISPLAYS:    2 COL GRID 
        --> For general startup description and 2 startup examples 
      @SMALLER DISPLAYS:  1 COL GRID  
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-10">
        <div>
          <div className="w-full h-auto items-center md:flex-col rounded-2xl gap-10">
            <p className="text-left mb-20 2xl:text-xl">
              <FormattedMessage id="index.startups.description" />
            </p>
            <div className="w-full h-auto items-center md:flex-col mx-auto rounded-2xl -ml-32">
              <img src={PlanetImage} alt="" className="object-scale-down" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {/* TRYFF */}
          <StartupSectionContentCard
            firm={<FormattedMessage id="index.startups.example1.firm" />}
            description={<FormattedMessage id="index.startups.example1.description" />}
            link="https://tryff.de/"
            target="_blank"
          />
          {/* INOURHANDS */}
          <StartupSectionContentCard
            firm={<FormattedMessage id="index.startups.example2.firm" />}
            description={<FormattedMessage id="index.startups.example2.description" />}
            link="https://inourhands.io/"
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
