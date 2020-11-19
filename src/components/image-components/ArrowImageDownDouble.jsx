import React from 'react';
import PropTypes from 'prop-types';
import arrowImageDown from '../../images/shortArrow/short-arrow-down.svg';

function ArrowImageDownDouble({ widthClass }) {
  const singleArrowImage = <img src={arrowImageDown} alt="arrow down" className="w-full" />;

  return (
    <div className={widthClass}>
      {singleArrowImage}
      {singleArrowImage}
    </div>
  );
}

ArrowImageDownDouble.propTypes = {
  widthClass: PropTypes.string,
};

ArrowImageDownDouble.defaultProps = {
  widthClass: '',
};

export default ArrowImageDownDouble;
