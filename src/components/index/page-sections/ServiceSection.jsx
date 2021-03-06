import React from 'react';
import { FormattedMessage } from 'react-intl';
import IndexGradientBorderButtonBasic from '../../buttons/gradient-border-buttons/IndexGradientBorderButtonBasic';
import ServiceSectionCard from './ServiceSectionCard';

const ServiceSection = () => {
  return (
    <div className="container mx-auto mb-40">
      <h1 className="flex flex-row w-full justify-center md:justify-start text-4xl md:text-5xl mb-12">
        <FormattedMessage id="index.services.title" />
      </h1>
      {/* 3 COL GRID @SMALL SCREEN 1 COL */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <ServiceSectionCard
          title={<FormattedMessage id="index.services.software-laboratory.title" />}
          content={<FormattedMessage id="index.services.software-laboratory.description" />}
          link="/softwarelaboratory"
          className="flex justify-around items-center flex-col bg-gray-primary rounded-2xl text-center h-full"
        >
          <IndexGradientBorderButtonBasic theme="dark" borderButtonClassName="w-full">
            <FormattedMessage id="generic.more" />
          </IndexGradientBorderButtonBasic>
        </ServiceSectionCard>

        <ServiceSectionCard
          title={<FormattedMessage id="index.services.consulting.title" />}
          content={<FormattedMessage id="index.services.consulting.description" />}
          link="/consulting"
          className="flex justify-around items-center flex-col bg-gray-primary rounded-2xl text-center h-full"
        >
          <IndexGradientBorderButtonBasic theme="dark" borderButtonClassName="w-full">
            <FormattedMessage id="generic.more" />
          </IndexGradientBorderButtonBasic>
        </ServiceSectionCard>

        <ServiceSectionCard
          title={<FormattedMessage id="index.services.ventures.title" />}
          content={<FormattedMessage id="index.services.ventures.description" />}
          link="/ventures"
          className="flex justify-around items-center flex-col bg-gray-primary rounded-2xl text-center h-full"
        >
          <IndexGradientBorderButtonBasic theme="dark" borderButtonClassName="w-full">
            <FormattedMessage id="generic.more" />
          </IndexGradientBorderButtonBasic>
        </ServiceSectionCard>
      </div>
    </div>
  );
};

export default ServiceSection;
