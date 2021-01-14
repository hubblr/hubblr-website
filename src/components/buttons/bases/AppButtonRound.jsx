import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function AppButtonRound({ children, onClick, className }) {
  return (
    <Button onClick={onClick} className={`round-button ${className}`}>
      {children}
    </Button>
  );
}

AppButtonRound.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

AppButtonRound.defaultProps = {
  children: null,
  onClick: null,
  className: '',
};

export default AppButtonRound;
