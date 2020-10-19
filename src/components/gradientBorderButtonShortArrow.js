import React from "react";
import PropTypes from "prop-types";
import GradientBorderButtonBase from "./gradientBorderButtonBase";
import ArrowImageDown from "./arrowImageDown";

function GradientBorderButtonShortArrow(props) {
  return (
    <GradientBorderButtonBase
      buttonText={props.buttonText}
      borderWidth={props.borderWidth}
      gapClass={"gap-1"}
      onClick={props.onClick}
    >
      <ArrowImageDown
        rotationDegree={270}
        widthClass={"w-5"}
      />
    </GradientBorderButtonBase>
  )
}

GradientBorderButtonShortArrow.propTypes = {
  buttonText: PropTypes.string,
  borderWidth: PropTypes.string,
  onClick: PropTypes.func,
}

export default GradientBorderButtonShortArrow;