import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function NavBarContactButton({ className }) {
  return (
    <Link
      to="/contact"
      className={`button button-dark text-center font-extrabold tracking-tight ${className}`}
    >
      <span className="bg-clip-text text-transparent bg-gradient-to-r bg-gradient-to-r from-teal-400 to-blue-500">
        Kontaktieren
      </span>
    </Link>
  );
}

NavBarContactButton.propTypes = {
  className: PropTypes.string,
};

NavBarContactButton.defaultProps = {
  className: '',
};

export default NavBarContactButton;
