import React from 'react';
import PropTypes from 'prop-types';
import ArrowImageDown from './ArrowImageDown.jsx';

function ArrowImageDownDouble({ rotationDegree, widthClass }) {
  const singleArrowImage = (
    <ArrowImageDown widthClass={widthClass} rotationDegree={rotationDegree} />
  );

  return (
    <div className={widthClass}>
      {singleArrowImage}
      {singleArrowImage}
    </div>
  );
}

ArrowImageDownDouble.propTypes = {
  rotationDegree: PropTypes.number,
  widthClass: PropTypes.string,
};

export default ArrowImageDownDouble;
