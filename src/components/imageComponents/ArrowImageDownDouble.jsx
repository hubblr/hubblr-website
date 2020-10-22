import React from 'react';
import PropTypes from 'prop-types';
import ArrowImageDown from './ArrowImageDown';

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

ArrowImageDownDouble.defaultProps = {
  widthClass: '',
  rotationDegree: 0,
};

ArrowImageDownDouble.propTypes = {
  widthClass: PropTypes.string,
  rotationDegree: PropTypes.number,
};

export default ArrowImageDownDouble;
