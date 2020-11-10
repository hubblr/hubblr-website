import React from 'react';
import PropTypes from 'prop-types';

function GradientBorderButtonBase({
  children,
  isSubmitButton,
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
      type={isSubmitButton ? 'submit' : 'button'}
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

GradientBorderButtonBase.defaultProps = {
  isSubmitButton: false,
  widthClass: '',
  paddingClasses: '',
  textColorClass: 'text-black',
  backgroundColorClass: 'text-white',
  addedFlexClasses: '',
  onClick: null,
};

GradientBorderButtonBase.propTypes = {
  children: PropTypes.node.isRequired,
  isSubmitButton: PropTypes.bool,
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
