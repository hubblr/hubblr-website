import React from 'react';
import PropTypes from 'prop-types';
import { LocalizedLink as Link } from 'gatsby-theme-i18n';
import { FormattedMessage } from 'react-intl';
import AppKnockoutText from '../text/AppKnockoutText';

function NavBarHomeButton({ className }) {
  return (
    <Link to="/" className={`button button-theme-transparent text-center ${className}`}>
      <AppKnockoutText>
        <FormattedMessage id="index.title" />
      </AppKnockoutText>
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
