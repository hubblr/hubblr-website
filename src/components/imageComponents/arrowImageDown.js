import React from "react";
import PropTypes from "prop-types"
import arrowImage from '../../images/shortArrow/short-arrow-down.svg';

function ArrowImageDown(props) {
  const transformClasses = props.rotationDegree
    ? `transform rotate-${props.rotationDegree}`
    : "";

  return (
    <img
      src={arrowImage}
      alt={"arrow down"}
      className={`${props.widthClass} ${transformClasses}`}
    />
  );
}

ArrowImageDown.propTypes = {
  rotationDegree: PropTypes.number,
  widthClass: PropTypes.string,
}

export default ArrowImageDown;