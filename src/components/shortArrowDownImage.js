import React from "react";
import PropTypes from "prop-types"
import arrowImage from '../images/shortArrow/short-arrow-down.svg';

function ShortArrowDownImage(prop) {
  return (
    <img
      src={arrowImage}
      alt={'arrow down'}
      className={`w-full transform ${prop.flip ? 'rotate-180' : ''}`}
    />
  );
}

ShortArrowDownImage.propTypes = {
  flip: PropTypes.bool,
}

export default ShortArrowDownImage;