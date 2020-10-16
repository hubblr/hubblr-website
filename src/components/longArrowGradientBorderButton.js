import React from "react";
import PropTypes from 'prop-types';
import BaseGradientBorderButton from "./baseGradientBorderButton";
import arrowSvg from '../images/longArrow/long-arrow.svg';

const LongArrowGradientButton = (props) => {
  return (
    <BaseGradientBorderButton
      buttonText={props.buttonText}
      borderWidth={props.borderWidth}
      onClick={props.onClick}
    >
      <img
        src={arrowSvg}
        alt={''}
        className={'w-22'}
      />
    </BaseGradientBorderButton>
  )
}

LongArrowGradientButton.propTypes = {
  buttonText: PropTypes.string,
  borderWidth: PropTypes.string,
  onClick: PropTypes.func,
}

export default LongArrowGradientButton;