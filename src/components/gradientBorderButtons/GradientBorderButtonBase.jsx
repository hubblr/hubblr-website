import React from 'react';
import PropTypes from 'prop-types';

function GradientBorderButtonBase({
  children,
  borderWidth,
  widthClass,
  paddingClasses,
  textColorClass,
  backgroundColorClass,
  gradientColors,
  addedFlexClasses,
  onClick,
}) {
  return (
    <button
      className={`${widthClass} rounded-lg`}
      style={{
        background: `linear-gradient(to right, ${gradientColors.join(',')})`,
      }}
      onClick={onClick}
    >
      <div
        className={
          `flex items-center ${addedFlexClasses} rounded-lg ${paddingClasses} ` +
          `bg-clip-padding ${textColorClass} ${backgroundColorClass}`
        }
        style={{
          border: `solid ${borderWidth} transparent`,
          boxSizing: 'border-box',
        }}
      >
        {children}
      </div>
    </button>
  );
}

GradientBorderButtonBase.propTypes = {
  children: PropTypes.node,
  borderWidth: PropTypes.string.isRequired,
  widthClass: PropTypes.string,
  paddingClasses: PropTypes.string,
  textColorClass: PropTypes.string,
  backgroundColorClass: PropTypes.string,
  gradientColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  addedFlexClasses: PropTypes.string,
  onClick: PropTypes.func,
};

export default GradientBorderButtonBase;
