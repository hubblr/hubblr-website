import React from 'react';
import PropTypes from 'prop-types';
import { LocalizedLink as Link } from 'gatsby-theme-i18n';
import { FormattedMessage } from 'react-intl';

function NavBarHomeButton({ className }) {
  return (
    <Link
      to="/"
      className={`button button-dark text-center font-extrabold tracking-tight ${className}`}
    >
      <span className="bg-clip-text text-transparent bg-gradient-to-r bg-gradient-to-r from-teal-400 to-blue-500">
        <FormattedMessage id="index.title" />
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
