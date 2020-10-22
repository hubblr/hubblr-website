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
      backgroundColorClass = 'bg-gray-800';
      textColorClass = 'text-white';
      break;
  }

  return (
    <GradientBorderButtonBase
      isSubmitButton={isSubmitButton}
      borderWidth="3px"
      gradientColors={['yellow', 'orange', 'red', 'magenta']}
      widthClass={widthClass}
      paddingClasses={paddingClasses}
      textColorClass={textColorClass}
      backgroundColorClass={backgroundColorClass}
      addedFlexClasses={addedFlexClasses}
      onClick={onClick}
    >
      <span className="text-lg">{children}</span>
      {image}
    </GradientBorderButtonBase>
  );
}

HubblrGradientBorderButtonBase.defaultProps = {
  isSubmitButton: false,
  image: null,
  widthClass: '',
  addedFlexClasses: '',
  paddingClasses: 'px-8 py-3',
  onClick: null,
};

HubblrGradientBorderButtonBase.propTypes = {
  children: PropTypes.string.isRequired,
  isSubmitButton: PropTypes.bool,
  image: PropTypes.element,
  widthClass: PropTypes.string,
  paddingClasses: PropTypes.string,
  addedFlexClasses: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  onClick: PropTypes.func,
};

export default HubblrGradientBorderButtonBase;
