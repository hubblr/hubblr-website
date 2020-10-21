import React from 'react';
import PropTypes from 'prop-types';
import arrowImage from '../../images/shortArrow/short-arrow-down.svg';

function ArrowImageDown({ rotationDegree, widthClass }) {
  const transformClasses = rotationDegree ? `transform rotate-${rotationDegree}` : '';

  return <img src={arrowImage} alt="arrow down" className={`${widthClass} ${transformClasses}`} />;
}

ArrowImageDown.propTypes = {
  rotationDegree: PropTypes.number,
  widthClass: PropTypes.string,
};

export default ArrowImageDown;
