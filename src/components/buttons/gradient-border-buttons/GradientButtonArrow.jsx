import React from 'react';
import PropTypes from 'prop-types';
import LongArrowImage from '../../image-components/LongArrowImage';
import GradientButton from './GradientButton';

function GradientButtonArrow({ children, onClick, className, isSubmitButton }) {
  return (
    <GradientButton
      type={isSubmitButton}
      onClick={onClick}
      className={`button-theme-light ${className}`}
    >
      <div className="flex flex-row items-center">
        <LongArrowImage theme="light" className="ml-3" />
        {children}
      </div>
    </GradientButton>
  );
}

GradientButtonArrow.propTypes = {
  children: PropTypes.node.isRequired,
  isSubmitButton: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

GradientButtonArrow.defaultProps = {
  isSubmitButton: false,
  onClick: null,
  className: '',
};

export default GradientButtonArrow;
