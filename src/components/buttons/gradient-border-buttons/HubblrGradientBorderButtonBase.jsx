import React from 'react';
import PropTypes from 'prop-types';
import GradientBorderButtonBase from './GradientBorderButtonBase';

function HubblrGradientBorderButtonBase({
  children,
  isSubmitButton,
  image,
  widthClass,
  paddingClasses,
  addedFlexClasses,
  theme,
  onClick,
}) {
  let backgroundColorClass;
  let textColorClass;
  switch (theme) {
    case 'light':
      backgroundColorClass = 'bg-white';
      textColorClass = 'text-black';
      break;
    case 'dark':
    default:
      backgroundColorClass = 'bg-brand-gray-darkest';
      textColorClass = 'text-white';
      break;
  }

  return (
    <GradientBorderButtonBase
      isSubmitButton={isSubmitButton}
      borderWidth="2px"
      gradientColors={['#bdfff4', '#44ced8', '#0da2ff', '#8d00ff']}
      widthClass={widthClass}
      paddingClasses={paddingClasses}
      textColorClass={textColorClass}
      backgroundColorClass={backgroundColorClass}
      addedFlexClasses={addedFlexClasses}
      onClick={onClick}
    >
      <span className="text-sm py-1">{children}</span>
      {image}
    </GradientBorderButtonBase>
  );
}

HubblrGradientBorderButtonBase.propTypes = {
  children: PropTypes.node.isRequired,
  isSubmitButton: PropTypes.bool,
  image: PropTypes.element,
  widthClass: PropTypes.string,
  paddingClasses: PropTypes.string,
  addedFlexClasses: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  onClick: PropTypes.func,
};

HubblrGradientBorderButtonBase.defaultProps = {
  isSubmitButton: false,
  image: null,
  widthClass: '',
  addedFlexClasses: '',
  paddingClasses: 'px-8 py-1.5',
  onClick: null,
};

export default HubblrGradientBorderButtonBase;
