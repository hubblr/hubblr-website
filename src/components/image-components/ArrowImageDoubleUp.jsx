import React from 'react';
import PropTypes from 'prop-types';
import arrowImageUp from '../../images/shortArrow/short-arrow-up.svg';

function ArrowImageDoubleUp({ className }) {
  const singleArrowImage = <img src={arrowImageUp} alt="arrow up" className="w-full" />;

  return (
    <div className={className}>
      {singleArrowImage}
      {singleArrowImage}
    </div>
  );
}

ArrowImageDoubleUp.propTypes = {
  className: PropTypes.string,
};

ArrowImageDoubleUp.defaultProps = {
  className: '',
};

export default ArrowImageDoubleUp;
