import React from 'react';
import PropTypes from 'prop-types';
import GradientButton from './GradientButton';

function IndexGradientBorderButtonBasic({
  children,
  theme,
  onClick,
  borderButtonClassName,
  innerOverlayDivClassName,
  textDivClassName,
  isSubmitButton,
}) {
  return (
    <GradientButton
      type={isSubmitButton}
      theme={theme}
      onClick={onClick}
      borderButtonClassName={borderButtonClassName}
      innerOverlayDivClassName={innerOverlayDivClassName}
      textDivClassName={textDivClassName}
    >
      {children}
    </GradientButton>
  );
}

IndexGradientBorderButtonBasic.propTypes = {
  children: PropTypes.node.isRequired,
  isSubmitButton: PropTypes.bool,
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  onClick: PropTypes.func,
  borderButtonClassName: PropTypes.string,
  innerOverlayDivClassName: PropTypes.string,
  textDivClassName: PropTypes.string,
};

IndexGradientBorderButtonBasic.defaultProps = {
  isSubmitButton: false,
  onClick: null,
  borderButtonClassName: '',
  innerOverlayDivClassName: '',
  textDivClassName: '',
};

export default IndexGradientBorderButtonBasic;
