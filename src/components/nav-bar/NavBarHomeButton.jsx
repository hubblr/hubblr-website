import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function NavBarHomeButton({ className }) {
  return (
    <Link
      to="/"
      className={`button button-dark text-center font-extrabold tracking-tight ${className}`}
    >
      <span className="bg-clip-text text-transparent bg-gradient-to-r bg-gradient-to-r from-teal-400 to-blue-500">
        Home
      </span>
    </Link>
  );
}

NavBarHomeButton.propTypes = {
  className: PropTypes.string,
};

NavBarHomeButton.defaultProps = {
  className: '',
};

export default NavBarHomeButton;
