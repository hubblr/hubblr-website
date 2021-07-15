import React from 'react';
import PropTypes from 'prop-types';

function GradientButton({
  children,
  image,
  theme,
  onClick,
  borderButtonClassName,
  innerOverlayDivClassName,
  textDivClassName,
  isSubmitButton,
}) {
  let backgroundColorClass;
  let textColorClass;
  let classNameTheme;
  const GRADIENT_COLORS = ['#bdfff4', '#44ced8', '#0da2ff', '#8d00ff'];
  switch (theme) {
    case 'light':
      backgroundColorClass = 'bg-white';
      textColorClass = 'text-black';
      classNameTheme = 'hover:text-hubblr-turquoise hover:bg-black';
      break;
    case 'dark':
    default:
      backgroundColorClass = 'bg-brand-gray-darkest';
      textColorClass = 'text-white';
      break;
  }

  return (
    <button
      type={isSubmitButton ? 'submit' : 'button'}
      className={`${borderButtonClassName} rounded-lg rotategradient `}
      style={{
        background: `linear-gradient(90deg, ${GRADIENT_COLORS.join(',')})`,
      }}
      onClick={onClick}
      theme={theme}
    >
      <div
        className={
          `${innerOverlayDivClassName} ${backgroundColorClass} ${textColorClass} ${classNameTheme} ` +
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
        <div className={`${textDivClassName} text-center flex justify-center text-lg px-8 py-1 `}>
          {children}
          {image}
        </div>
      </div>
    </button>
  );
}

GradientButton.propTypes = {
  children: PropTypes.node.isRequired,
  isSubmitButton: PropTypes.bool,
  image: PropTypes.element,
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  onClick: PropTypes.func,
  borderButtonClassName: PropTypes.string, // borderButtonClassName: defines the gradient border line (lowest layer) and thereby allows a gradient styling
  innerOverlayDivClassName: PropTypes.string, // innerOverlayDivClassName: defines the overlay (middle layer) where the border is made transparent to show the buttons gradient effect
  textDivClassName: PropTypes.string, // textDivClassName: defines the actual text content (highest layer) and allows alignments of the text,
};

GradientButton.defaultProps = {
  isSubmitButton: false,
  onClick: null,
  image: null,
  borderButtonClassName: '',
  innerOverlayDivClassName: '',
  textDivClassName: '',
};

export default GradientButton;
