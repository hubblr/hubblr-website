import React from 'react';
import PropTypes from 'prop-types';
import DesignAdvertisementHeader from './DesignAdvertisementHeader';
import ConceptCard from './ConceptCard';
import IndexGradientBorderButtonLongArrow from '../gradientBorderButtons/IndexGradientBorderButtonLongArrow';

function MainContentCard({ conceptCardDescription, navigationButtonInfo }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full mb-6">
        <DesignAdvertisementHeader
          targetCustomers={[
            'Mittelständische Unternehmen',
            'Großunternehmen',
            'Post-Seed Startups',
          ]}
        />
      </div>
      <div className="mb-5">
        <ConceptCard
          title={conceptCardDescription.title}
          description={conceptCardDescription.description}
          tabledConcepts={conceptCardDescription.tabledConcepts}
        />
      </div>
      <IndexGradientBorderButtonLongArrow theme="light">
        {navigationButtonInfo.text}
      </IndexGradientBorderButtonLongArrow>
    </div>
  );
}

MainContentCard.propTypes = {
  conceptCardDescription: PropTypes.object.isRequired,
  navigationButtonInfo: PropTypes.object.isRequired,
};

export default MainContentCard;
