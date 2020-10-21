import React from 'react';
import PropTypes from 'prop-types';
import GradientBorderButtonApp from './GradientBorderButtonApp.jsx';
import ArrowImageDown from '../imageComponents/ArrowImageDown.jsx';

function GradientBorderButtonAppShortArrow({ buttonText, theme, onClick }) {
  return (
    <GradientBorderButtonApp
      buttonText={buttonText}
      gapClass="gap-1"
      theme={theme}
      onClick={onClick}
    >
      <ArrowImageDown rotationDegree={270} widthClass="w-5" />
    </GradientBorderButtonApp>
  );
}

GradientBorderButtonAppShortArrow.propTypes = {
  buttonText: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
  onClick: PropTypes.func,
};

GradientBorderButtonAppShortArrow.defaultProps = {
  theme: 'dark',
};

export default GradientBorderButtonAppShortArrow;
