import React from 'react';
import PropTypes from 'prop-types';

function DesignAdvertisementHeaderPill({ children, colorStyles }) {
  return (
    <div className={`${colorStyles} text-lg p-3 rounded-full whitespace-no-wrap`}>{children}</div>
  );
}

DesignAdvertisementHeaderPill.propTypes = {
  children: PropTypes.node.isRequired,
  colorStyles: PropTypes.string.isRequired,
};

export default DesignAdvertisementHeaderPill;
