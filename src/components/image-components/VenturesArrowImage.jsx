import React from 'react';
import PropTypes from 'prop-types';
import arrowImage from '../../images/ventures/venturesArrow.png';

function VenturesArrowImage({ className }) {
  return <img src={arrowImage} alt="ventures" className={className} />;
}

VenturesArrowImage.propTypes = {
  className: PropTypes.string,
};

VenturesArrowImage.defaultProps = {
  className: 'h-full w-full',
};

export default VenturesArrowImage;
