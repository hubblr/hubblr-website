import React from 'react';
import PropTypes from 'prop-types';
import DesignAdvertisementHeader from './DesignAdvertisementHeader';
import ConceptCard from './ConceptCard';

function MainContentCard({ conceptCardDescription }) {
  return (
    <div className="h-full flex flex-col items-center">
      <div className="w-full mb-6">
        <DesignAdvertisementHeader
          targetCustomers={[
            'Mittelständische Unternehmen',
            'Großunternehmen',
            'Post-Seed Startups',
          ]}
        />
      </div>
      <div className="flex-grow relative overflow-hidden mb-5">
        <ConceptCard
          title={conceptCardDescription.title}
          description={conceptCardDescription.description}
          tabledConcepts={conceptCardDescription.tabledConcepts}
        />
      </div>
    </div>
  );
}

MainContentCard.propTypes = {
  conceptCardDescription: PropTypes.object.isRequired,
};

export default MainContentCard;
