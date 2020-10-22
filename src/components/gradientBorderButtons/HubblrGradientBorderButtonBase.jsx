import React from 'react';
import PropTypes from 'prop-types';
import GradientBorderButtonBase from './GradientBorderButtonBase.jsx';

function HubblrGradientBorderButtonBase({
  children,
  image,
  widthClass,
  paddingClasses,
  addedFlexClasses,
  theme,
  onClick,
}) {
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
  paddingClasses: 'px-8 py-3',
}

HubblrGradientBorderButtonBase.propTypes = {
  children: PropTypes.element.isRequired,
  image: PropTypes.element,
  widthClass: PropTypes.string,
  paddingClasses: PropTypes.string,
  addedFlexClasses: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  onClick: PropTypes.func,
};

export default HubblrGradientBorderButtonBase;
