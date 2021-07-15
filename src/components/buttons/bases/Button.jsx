import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={`button ${className}`} type="button">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  onClick: null,
  className: '',
};

export default Button;
