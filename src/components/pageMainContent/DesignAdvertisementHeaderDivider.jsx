import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import useClientWidth from '../hooks/dimensions/useClientWidth';

function DesignAdvertisementHeaderDivider({ className, setWidth }) {
  const dividerRef = useRef();
  const dividerWidth = useClientWidth(dividerRef);
  useEffect(() => {
    setWidth(dividerWidth);
  }, [dividerWidth, setWidth]);
  return <div ref={dividerRef} className={`bg-gray-800 lg:h-1 h-0 w-3 ${className}`} />;
}

DesignAdvertisementHeaderDivider.propTypes = {
  className: PropTypes.string,
  setWidth: PropTypes.func.isRequired,
};

DesignAdvertisementHeaderDivider.defaultProps = {
  className: '',
};

export default DesignAdvertisementHeaderDivider;
