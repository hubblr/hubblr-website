import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import useOffsetWidth from '../../../hooks/dimensions/useOffsetWidth';

function DesignAdvertisementHeaderPill({ children, colorStyles, setWidth }) {
  const pillRef = useRef();
  const pillWidth = useOffsetWidth(pillRef);
  useEffect(() => {
    setWidth(pillWidth);
  }, [pillWidth, setWidth]);

  return (
    <div ref={pillRef} className={`${colorStyles} text-lg p-3 rounded-full whitespace-no-wrap`}>
      {children}
    </div>
  );
}

DesignAdvertisementHeaderPill.propTypes = {
  children: PropTypes.node.isRequired,
  colorStyles: PropTypes.string.isRequired,
  setWidth: PropTypes.func.isRequired,
};

export default DesignAdvertisementHeaderPill;
