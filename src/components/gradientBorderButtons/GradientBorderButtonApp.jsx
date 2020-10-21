import React from 'react';
import PropTypes from 'prop-types';
import GradientBorderButtonBase from './GradientBorderButtonBase.jsx';

function GradientBorderButtonApp({ children, buttonText, gapClass, theme, onClick }) {
  let backgroundColorClass, textColorClass;
  switch (theme) {
    case 'light':
      backgroundColorClass = 'bg-white';
      textColorClass = 'text-black';
      break;
    case 'dark':
    default:
      backgroundColorClass = 'bg-gray-800';
      textColorClass = 'text-white';
      break;
  }

  return (
    <GradientBorderButtonBase
      buttonText={buttonText}
      borderWidth="3px"
      textColorClass={textColorClass}
      backgroundColorClass={backgroundColorClass}
      gapClass={gapClass}
      onClick={onClick}
    >
      {children}
    </GradientBorderButtonBase>
  );
}

GradientBorderButtonApp.propTypes = {
  children: PropTypes.node,
  buttonText: PropTypes.string,
  gapClass: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
  onClick: PropTypes.func,
};

export default GradientBorderButtonApp;
