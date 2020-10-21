import React from "react";
import PropTypes from "prop-types";
import GradientBorderButtonBase from "./gradientBorderButtonBase";

function GradientBorderButtonApp(props) {
  let backgroundColorClass, textColorClass;
  switch(props.theme) {
    case "light":
      backgroundColorClass = 'bg-white';
      textColorClass = 'text-black';
      break;
    case "dark":
    default:
      backgroundColorClass = 'bg-gray-800';
      textColorClass = 'text-white';
      break;
  }

  return (
    <GradientBorderButtonBase
      buttonText={props.buttonText}
      borderWidth={"3px"}
      textColorClass={textColorClass}
      backgroundColorClass={backgroundColorClass}
      gapClass={props.gapClass}
      onClick={props.onClick}
    >
      {props.children}
    </GradientBorderButtonBase>
  )
}

GradientBorderButtonApp.propTypes = {
  children: PropTypes.node,
  buttonText: PropTypes.string,
  gapClass: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
  onClick: PropTypes.func,
}

export default GradientBorderButtonApp;