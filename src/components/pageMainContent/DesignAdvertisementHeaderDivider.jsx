import React from 'react';
import PropTypes from 'prop-types';

function DesignAdvertisementHeaderDivider({ className }) {
  return <div className={`bg-gray-800 h-1 w-3 ${className}`} />;
}

DesignAdvertisementHeaderDivider.propTypes = {
  className: PropTypes.string,
};

DesignAdvertisementHeaderDivider.defaultProps = {
  className: '',
};

export default DesignAdvertisementHeaderDivider;
