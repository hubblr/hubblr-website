import React from 'react';
import PropTypes from 'prop-types';
import DesignAdvertisementHeaderPill from './DesignAdvertisementHeaderPill';
import DesignAdvertisementHeaderDivider from './DesignAdvertisementHeaderDivider';

function DesignAdvertisementHeader({ className, targetCustomers }) {
  const textClass = 'text-white';

  return (
    <div className={`overflow-x-auto flex items-center ${className}`}>
      <div className="text-2xl font-extrabold flex flex-col items-end mr-2">
        <p>designed</p>
        <p>for</p>
      </div>
      <DesignAdvertisementHeaderDivider className="flex-grow" />
      <div className="flex items-center">
        {targetCustomers.map((targetName, i) => {
          const divider =
            i < targetCustomers.length - 1 ? <DesignAdvertisementHeaderDivider /> : null;
          return (
            <>
              <DesignAdvertisementHeaderPill
                key={targetName}
                colorStyles={`${textClass} bg-gray-800`}
              >
                {targetName}
              </DesignAdvertisementHeaderPill>
              {divider}
            </>
          );
        })}
      </div>
    </div>
  );
}

DesignAdvertisementHeader.propTypes = {
  className: PropTypes.string,
  targetCustomers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

DesignAdvertisementHeader.defaultProps = {
  className: '',
};

export default DesignAdvertisementHeader;
