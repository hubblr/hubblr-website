import React from 'react';
import PropTypes from 'prop-types';

function GradientButton({
  children,
  isSubmitButton,
  gradientColors,
  onClick,
  borderButtonClassName,
  innerOverlayDivClassName,
  textDivClassName,
}) {
  return (
    <button
      type={isSubmitButton ? 'submit' : 'button'}
      className={`${borderButtonClassName} rounded-lg rotategradient `}
      style={{
        background: `linear-gradient(90deg, ${gradientColors.join(',')})`,
      }}
      onClick={onClick}
    >
      <div
        className={
          `${innerOverlayDivClassName} ` +
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
        <div className={`${textDivClassName} flex justify-center text-lg`}>
          <span>{children}</span>
        </div>
      </div>
    </button>
  );
}

GradientButton.propTypes = {
  children: PropTypes.node.isRequired,
  isSubmitButton: PropTypes.bool,
  gradientColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func,
  borderButtonClassName: PropTypes.string, // borderButtonClassName: defines the gradient border line (lowest layer) and thereby allows a gradient styling
  innerOverlayDivClassName: PropTypes.string, // innerOverlayDivClassName: defines the overlay (middle layer) where the border is made transparent to show the buttons gradient effect
  textDivClassName: PropTypes.string, // textDivClassName: defines the actual text content (highest layer) and allows alignments of the text,
};

GradientButton.defaultProps = {
  isSubmitButton: false,
  onClick: null,
  borderButtonClassName: '',
  innerOverlayDivClassName: '',
  textDivClassName: '',
};

export default GradientButton;
