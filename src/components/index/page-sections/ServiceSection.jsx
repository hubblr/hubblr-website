import { Link } from '@reach/router';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import IndexGradientBorderButtonBasic from '../../buttons/gradient-border-buttons/IndexGradientBorderButtonBasic';
// import SectionHeading from '../section-heading/SectionHeading';

const ServiceSection = () => {
  return (
    // Section Container
    <div className="container mx-auto mb-40">
      {/* Defining HEADLINE */}
      <h1 className="text-5xl mb-12">
        <FormattedMessage id="index.services.title" />
      </h1>
      {/* 3 COL GRID  */}
      <div className="grid grid-cols-3 gap-10">
        {/* EACH CONTENT CARD CAN BE OUTSOURCED INTO SINGLE CONTENT CARD COMPONENT */}
        <div className="row-span-1 flex justify-around items-center flex-col bg-gray-primary rounded-2xl text-center ">
          <h1 className="text-xl md:text-3xl m-5 px-5">
            <FormattedMessage id="index.services.software-laboratory.title" />
          </h1>
          <p className="m-5 text-center py-10">
            <FormattedMessage id="index.services.software-laboratory.description" />
          </p>
          <Link to="/softwarelaboratory" className="m-5">
            <IndexGradientBorderButtonBasic
              theme="dark"
              widthClass="w-full"
              addedFlexClasses="justify-center"
            >
              <FormattedMessage id="generic.more" />
            </IndexGradientBorderButtonBasic>
          </Link>
        </div>
        {/* Content */}
        <div className="row-span-1 flex justify-around items-center flex-col bg-gray-primary rounded-2xl text-center">
          <h1 className="text-3xl m-5 px-5">
            <FormattedMessage id="index.services.consulting.title" />
          </h1>
          <p className="m-5 text-center py-10">
            <FormattedMessage id="index.services.consulting.description" />
          </p>
          <Link to="/consulting" className="m-5">
            <IndexGradientBorderButtonBasic
              theme="dark"
              widthClass="w-full"
              addedFlexClasses="justify-center"
            >
              <FormattedMessage id="generic.more" />
            </IndexGradientBorderButtonBasic>
          </Link>
        </div>
        <div className="row-span-1 flex justify-around items-center flex-col bg-gray-primary rounded-2xl text-center">
          <h1 className="text-3xl m-5 px-5">
            <FormattedMessage id="index.services.ventures.title" />
          </h1>
          <p className="m-5 text-center py-10">
            <FormattedMessage id="index.services.ventures.description" />
          </p>
          <Link to="/ventures" className="m-5">
            <IndexGradientBorderButtonBasic
              theme="dark"
              widthClass="w-full"
              addedFlexClasses="justify-center"
            >
              <FormattedMessage id="generic.more" />
            </IndexGradientBorderButtonBasic>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
