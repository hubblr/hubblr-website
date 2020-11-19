import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function AppButton({ children, onClick, className }) {
  return (
    <Button onClick={onClick} className={`button ${className}`}>
      {children}
    </Button>
  );
}

AppButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

AppButton.defaultProps = {
  children: null,
  onClick: null,
  className: '',
};

export default AppButton;
