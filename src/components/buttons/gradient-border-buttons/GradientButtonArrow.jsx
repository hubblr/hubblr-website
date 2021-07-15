import React from 'react';
import PropTypes from 'prop-types';
import LongArrowImage from '../../image-components/LongArrowImage';
import GradientButton from './GradientButton';

function GradientButtonArrow({
  children,
  onClick,
  className,
  innerOverlayDivClassName,
  textDivClassName,
  isSubmitButton,
}) {
  return (
    <GradientButton
      type={isSubmitButton}
      onClick={onClick}
      className={`light ${className}`}
      innerOverlayDivClassName={innerOverlayDivClassName}
      textDivClassName={textDivClassName}
    >
      <LongArrowImage theme="light" className="ml-3" />
      {children}
    </GradientButton>
  );
}

GradientButtonArrow.propTypes = {
  children: PropTypes.node.isRequired,
  isSubmitButton: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  innerOverlayDivClassName: PropTypes.string,
  textDivClassName: PropTypes.string,
};

GradientButtonArrow.defaultProps = {
  isSubmitButton: false,
  onClick: null,
  className: '',
  innerOverlayDivClassName: '',
  textDivClassName: '',
};

export default GradientButtonArrow;
