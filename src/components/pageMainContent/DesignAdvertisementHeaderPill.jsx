import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DesignAdvertisementHeaderPill = forwardRef(({ children, colorStyles }, ref) => {
  return (
    <div ref={ref} className={`${colorStyles} text-lg p-3 rounded-full whitespace-no-wrap`}>
      {children}
    </div>
  );
});

DesignAdvertisementHeaderPill.propTypes = {
  children: PropTypes.node.isRequired,
  colorStyles: PropTypes.string.isRequired,
};

export default DesignAdvertisementHeaderPill;
