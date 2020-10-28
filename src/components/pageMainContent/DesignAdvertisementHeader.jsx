import React from 'react';
import PropTypes from 'prop-types';
import DesignAdvertisementHeaderPill from './DesignAdvertisementHeaderPill';

function DesignAdvertisementHeader({ targetCustomers }) {
  const colorClassEnd = 'gray-800';
  const textClass = 'text-white';

  return (
    <div className="relative flex justify-end gap-6">
      {targetCustomers.map((targetName) => {
        return (
          <DesignAdvertisementHeaderPill
            key={targetName}
            colorStyles={`${textClass} bg-${colorClassEnd}`}
          >
            {targetName}
          </DesignAdvertisementHeaderPill>
        );
      })}
      <div className="absolute -z-5 bottom-1/2 flex gap-4 w-full">
        <div className="-mb-10px text-2xl font-extrabold flex flex-col items-end">
          <p>designed</p>
          <p>for</p>
        </div>
        <div className={`flex-grow border-b-4 border-${colorClassEnd}`} />
      </div>
    </div>
  );
}

DesignAdvertisementHeader.propTypes = {
  targetCustomers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DesignAdvertisementHeader;
