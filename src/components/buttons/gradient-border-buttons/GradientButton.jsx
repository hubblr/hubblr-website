import React from 'react';
import PropTypes from 'prop-types';

function GradientButton({
  children,
  onClick,
  innerOverlayDivClassName,
  isSubmitButton,
  gradientColors,
  className,
}) {
  return (
    <button
      type={isSubmitButton ? 'submit' : 'button'}
      className={`${className} rounded-lg rotategradient `}
      style={{
        background: `linear-gradient(90deg, ${gradientColors.join(',')})`,
      }}
      onClick={onClick}
    >
      <div
        className={
          `${innerOverlayDivClassName}` +
          // Alignment
          `flex items-center justify-center rounded-lg ` +
          // Border Styling
          `bg-clip-padding border-2 border-transparent border-solid ` +
          // Text Styling
          `font-sans font-black text-tiny ` +
          // Hover-Effects
          `hover:text-hubblr-turquoise hover:bg-black`
        }
      >
        <div className={`text-center flex justify-center text-lg px-8 py-1 `}>{children}</div>
      </div>
    </button>
  );
}

GradientButton.propTypes = {
  children: PropTypes.node.isRequired,
  isSubmitButton: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string, // defines the gradient border line (lowest layer) and thereby allows a gradient styling
  innerOverlayDivClassName: PropTypes.string, // innerOverlayDivClassName: defines the overlay (middle layer) where the border is made transparent to show the buttons gradient effect
  gradientColors: PropTypes.array,
};

GradientButton.defaultProps = {
  isSubmitButton: false,
  onClick: null,
  className: 'button-light',
  innerOverlayDivClassName: '',
  gradientColors: ['#bdfff4', '#44ced8', '#0da2ff', '#8d00ff'],
};

export default GradientButton;
