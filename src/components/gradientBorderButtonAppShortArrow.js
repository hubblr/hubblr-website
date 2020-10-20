import React from "react";
import PropTypes from "prop-types";
import GradientBorderButtonApp from "./gradientBorderButtonApp";
import ArrowImageDown from "./arrowImageDown";

function GradientBorderButtonAppShortArrow(props) {
  return (
    <GradientBorderButtonApp
      buttonText={props.buttonText}
      gapClass={"gap-1"}
      theme={"dark"}
      onClick={props.onClick}
    >
      <ArrowImageDown
        rotationDegree={270}
        widthClass={"w-5"}
      />
    </GradientBorderButtonApp>
  )
}

GradientBorderButtonAppShortArrow.propTypes = {
  buttonText: PropTypes.string,
  theme: PropTypes.oneOf(["dark", "light"]),
  onClick: PropTypes.func,
}

GradientBorderButtonAppShortArrow.defaultProps = {
  theme: "dark",
}

export default GradientBorderButtonAppShortArrow;