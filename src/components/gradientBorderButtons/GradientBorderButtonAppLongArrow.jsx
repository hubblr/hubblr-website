import React from 'react';
import PropTypes from 'prop-types';
import GradientBorderButtonApp from './GradientBorderButtonApp.jsx';
import blackArrowSvg from '../../images/longArrow/long-arrow-black.svg';
import whiteArrowSvg from '../../images/longArrow/long-arrow-white.svg';

function GradientBorderButtonAppLongArrow({ buttonText, theme, onClick }) {
  let arrowSvg;
  switch (theme) {
    case 'light':
      arrowSvg = blackArrowSvg;
      break;
    case 'dark':
    default:
      arrowSvg = whiteArrowSvg;
      break;
  }

  return (
    <GradientBorderButtonApp
      buttonText={buttonText}
      gapClass="gap-3"
      theme={theme}
      onClick={onClick}
    >
      <img src={arrowSvg} alt="" className="w-22" />
    </GradientBorderButtonApp>
  );
}

GradientBorderButtonAppLongArrow.propTypes = {
  buttonText: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
  onClick: PropTypes.func,
};

GradientBorderButtonAppLongArrow.defaultProps = {
  theme: 'dark',
};

export default GradientBorderButtonAppLongArrow;
