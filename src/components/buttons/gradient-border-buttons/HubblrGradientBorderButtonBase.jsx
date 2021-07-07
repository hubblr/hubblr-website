import React from 'react';
import PropTypes from 'prop-types';
import GradientButton from './GradientButton';

function HubblrGradientBorderButtonBase({
  children,
  isSubmitButton,
  image,
  theme,
  onClick,
  borderButtonClassName,
  innerOverlayDivClassName,
  textDivClassName,
}) {
  let backgroundColorClass;
  let textColorClass;
  let classNameTheme;
  switch (theme) {
    case 'light':
      backgroundColorClass = 'bg-white';
      textColorClass = 'text-black';
      classNameTheme = 'hover:text-hubblr-turquoise hover:bg-black';
      break;
    case 'dark':
    default:
      backgroundColorClass = 'bg-brand-gray-darkest';
      textColorClass = 'text-white';
      break;
  }

  return (
    <GradientButton
      isSubmitButton={isSubmitButton}
      gradientColors={['#bdfff4', '#44ced8', '#0da2ff', '#8d00ff']}
      onClick={onClick}
      borderButtonClassName={borderButtonClassName}
      innerOverlayDivClassName={`${innerOverlayDivClassName} ${backgroundColorClass} ${textColorClass} ${classNameTheme}`}
      textDivClassName={`${textDivClassName} px-8 py-1`}
      theme="light"
    >
      {children}
      {image}
    </GradientButton>
  );
}

HubblrGradientBorderButtonBase.propTypes = {
  children: PropTypes.node.isRequired,
  isSubmitButton: PropTypes.bool,
  image: PropTypes.element,
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  onClick: PropTypes.func,
  borderButtonClassName: PropTypes.string,
  innerOverlayDivClassName: PropTypes.string,
  textDivClassName: PropTypes.string,
};

HubblrGradientBorderButtonBase.defaultProps = {
  isSubmitButton: false,
  image: null,
  onClick: null,
  borderButtonClassName: '',
  innerOverlayDivClassName: '',
  textDivClassName: '',
};

export default HubblrGradientBorderButtonBase;
