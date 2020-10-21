import React from "react";
import PropTypes from 'prop-types';
import GradientBorderButtonApp from "./gradientBorderButtonApp";
import blackArrowSvg from '../../images/longArrow/long-arrow-black.svg';
import whiteArrowSvg from '../../images/longArrow/long-arrow-white.svg';

function GradientBorderButtonAppLongArrow(props) {
  let arrowSvg;
  switch(props.theme) {
    case "light":
      arrowSvg = blackArrowSvg;
      break;
    case "dark":
    default:
      arrowSvg = whiteArrowSvg;
      break;
  }

  return (
    <GradientBorderButtonApp
      buttonText={props.buttonText}
      gapClass={"gap-3"}
      theme={props.theme}
      onClick={props.onClick}
    >
      <img
        src={arrowSvg}
        alt={''}
        className={'w-22'}
      />
    </GradientBorderButtonApp>
  )
}

GradientBorderButtonAppLongArrow.propTypes = {
  buttonText: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
  onClick: PropTypes.func,
}

GradientBorderButtonAppLongArrow.defaultProps = {
  theme: 'dark',
}

export default GradientBorderButtonAppLongArrow;