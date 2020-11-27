import React from 'react';
import PropTypes from 'prop-types';
import { LocalizedLink as Link } from 'gatsby-theme-i18n';
import { FormattedMessage } from 'react-intl';

function NavBarContactButton({ className }) {
  return (
    <Link
      to="/contact"
      className={`button button-dark text-center font-extrabold tracking-tight ${className}`}
    >
      <span className="bg-clip-text text-transparent bg-gradient-to-r bg-gradient-to-r from-teal-400 to-blue-500">
        <FormattedMessage id="generic.contact-short" />
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
