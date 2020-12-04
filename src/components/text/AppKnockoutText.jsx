import React from 'react';
import PropTypes from 'prop-types';

function AppKnockoutText({ children, className }) {
  return (
    <span
      className={`font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r bg-gradient-to-r to-teal-400 from-blue-500 ${className}`}
    >
      {children}
    </span>
  );
}

AppKnockoutText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

AppKnockoutText.defaultProps = {
  className: '',
};

export default AppKnockoutText;
