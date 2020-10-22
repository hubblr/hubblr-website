import React from 'react';
import PropTypes from 'prop-types';

function DesignAdvertisementHeaderPill({ children }) {
  return <div className="text-black bg-white text-lg p-3 rounded-full">{children}</div>;
}

DesignAdvertisementHeaderPill.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DesignAdvertisementHeaderPill;
