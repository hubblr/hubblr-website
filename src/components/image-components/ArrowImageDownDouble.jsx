import React from 'react';
import PropTypes from 'prop-types';
import arrowImageDown from '../../images/shortArrow/short-arrow-down.svg';

function ArrowImageDownDouble({ className }) {
  const singleArrowImage = <img src={arrowImageDown} alt="arrow down" className="w-full" />;

  return (
    <div className={className}>
      {singleArrowImage}
      {singleArrowImage}
    </div>
  );
}

ArrowImageDownDouble.propTypes = {
  className: PropTypes.string,
};

ArrowImageDownDouble.defaultProps = {
  className: '',
};

export default ArrowImageDownDouble;
