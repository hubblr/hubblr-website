import React from 'react';
import PropTypes from 'prop-types';

function GradientBorderButtonBase({
  children,
  buttonText,
  borderWidth,
  textColorClass,
  backgroundColorClass,
  gapClass,
  onClick,
}) {
  return (
    <button
      className="rounded-lg"
      style={{
        background: 'linear-gradient(to right, lightblue, teal, blue, purple)',
      }}
      onClick={onClick}
    >
      <div
        className={
          `flex items-center ${gapClass} rounded-lg px-8 py-3 ` +
          `bg-clip-padding ${textColorClass} ${backgroundColorClass}`
        }
        style={{
          border: `solid ${borderWidth} transparent`,
          boxSizing: 'border-box',
        }}
      >
        <span className="text-lg">{buttonText}</span>
        {children}
      </div>
    </button>
  );
}

GradientBorderButtonBase.defaultProps = {
  gapClass: 'gap-0',
};

GradientBorderButtonBase.propTypes = {
  children: PropTypes.node,
  buttonText: PropTypes.string,
  borderWidth: PropTypes.string,
  textColorClass: PropTypes.string,
  backgroundColorClass: PropTypes.string,
  gapClass: PropTypes.string,
  onClick: PropTypes.func,
};

export default GradientBorderButtonBase;
