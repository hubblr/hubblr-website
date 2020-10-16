import React from "react";
import PropTypes from 'prop-types';

const BaseGradientBorderButton = (props) => {
  return (
    <button
      className={'rounded-lg'}
      style={{
        background: 'linear-gradient(to right, lightblue, teal, blue, purple)',
      }}
      onClick={props.onClick}
    >
      <div
        className={'flex items-center gap-3 bg-gray-800 rounded-lg px-8 py-3 bg-clip-padding'}
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

BaseGradientBorderButton.propTypes = {
  buttonText: PropTypes.string,
  borderWidth: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default BaseGradientBorderButton;
