import React from 'react';
import PropTypes from 'prop-types';
import { LocalizedLink as Link } from 'gatsby-theme-i18n';
import { FormattedMessage } from 'react-intl';
import AppKnockoutText from '../text/AppKnockoutText';

function NavBarContactButton({ className }) {
  return (
    <Link to="/contact" className={`button text-center ${className}`}>
      <AppKnockoutText>
        <FormattedMessage id="generic.contact-short" />
      </AppKnockoutText>
    </Link>
  );
}

NavBarContactButton.propTypes = {
  className: PropTypes.string,
};

NavBarContactButton.defaultProps = {
  className: 'button-theme-transparent',
};

export default NavBarContactButton;
