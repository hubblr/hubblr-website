import React from "react";
import PropTypes from 'prop-types';

function GradientBorderButtonBase(props) {
  return (
    <button
      className={'rounded-lg'}
      style={{
        background: 'linear-gradient(to right, lightblue, teal, blue, purple)',
      }}
      onClick={props.onClick}
    >
      <div
        className={`flex items-center ${props.gapClass} rounded-lg px-8 py-3 ` +
         `bg-clip-padding ${props.textColorClass} ${props.backgroundColorClass}`}
        style={{
          border: `solid ${props.borderWidth} transparent`,
          boxSizing: 'border-box',
        }}
      >
        <span
          className={'text-lg'}
        >
          {props.buttonText}
        </span>
        {props.children}
      </div>
    </button>
  );
}

GradientBorderButtonBase.defaultProps = {
  gapClass: "gap-0",
}

GradientBorderButtonBase.propTypes = {
  buttonText: PropTypes.string,
  borderWidth: PropTypes.string,
  textColorClass: PropTypes.string,
  backgroundColorClass: PropTypes.string,
  gapClass: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default GradientBorderButtonBase;
