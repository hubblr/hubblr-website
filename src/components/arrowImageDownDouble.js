import React from "react";
import PropTypes from "prop-types";
import ArrowImageDown from "./arrowImageDown";

function ArrowImageDownDouble(props) {
  const singleArrowImage = <ArrowImageDown
    widthClass={props.widthClass}
    rotationDegree={props.rotationDegree}
  />

  return (
    <div
      className={props.widthClass}
    >
      {singleArrowImage}
      {singleArrowImage}
    </div>
  )
}

ArrowImageDownDouble.propTypes = {
  rotationDegree: PropTypes.number,
  widthClass: PropTypes.string,
}

export default ArrowImageDownDouble;