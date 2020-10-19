import React from "react";
import PropTypes from 'prop-types';
import GradientBorderButtonBase from "./gradientBorderButtonBase";
import arrowSvg from '../images/longArrow/long-arrow.svg';

function GradientBorderButtonLongArrow(props) {
  return (
    <GradientBorderButtonBase
      buttonText={props.buttonText}
      borderWidth={props.borderWidth}
      gapClass={"gap-3"}
      onClick={props.onClick}
    >
      <img
        src={arrowSvg}
        alt={''}
        className={'w-22'}
      />
    </GradientBorderButtonBase>
  )
}

GradientBorderButtonLongArrow.propTypes = {
  buttonText: PropTypes.string,
  borderWidth: PropTypes.string,
  onClick: PropTypes.func,
}

export default GradientBorderButtonLongArrow;