import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DesignAdvertisementHeaderDivider = forwardRef(({ className }, ref) => {
  return <div ref={ref} className={`bg-gray-800 lg:h-1 h-0 w-3 ${className}`} />;
});

DesignAdvertisementHeaderDivider.propTypes = {
  className: PropTypes.string,
};

DesignAdvertisementHeaderDivider.defaultProps = {
  className: '',
};

export default DesignAdvertisementHeaderDivider;
