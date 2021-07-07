import React from 'react';
import PropTypes from 'prop-types';
import LongArrowImage from '../../image-components/LongArrowImage';
import GradientButton from './GradientButton';

function IndexGradientBorderButtonLongArrow({
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
      image={<LongArrowImage theme={theme} className="ml-3" />}
      theme="light"
      onClick={onClick}
      borderButtonClassName={borderButtonClassName}
      innerOverlayDivClassName={innerOverlayDivClassName}
      textDivClassName={textDivClassName}
    >
      {children}
    </GradientButton>
  );
}

IndexGradientBorderButtonLongArrow.propTypes = {
  children: PropTypes.node.isRequired,
  isSubmitButton: PropTypes.bool,
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  onClick: PropTypes.func,
  borderButtonClassName: PropTypes.string,
  innerOverlayDivClassName: PropTypes.string,
  textDivClassName: PropTypes.string,
};

IndexGradientBorderButtonLongArrow.defaultProps = {
  isSubmitButton: false,
  onClick: null,
  borderButtonClassName: '',
  innerOverlayDivClassName: '',
  textDivClassName: '',
};

export default IndexGradientBorderButtonLongArrow;
