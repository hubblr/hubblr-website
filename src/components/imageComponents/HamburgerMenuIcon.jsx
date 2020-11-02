import React from 'react';
import PropTypes from 'prop-types';
import hamburgerIcon from '../../images/hamburgerMenu/hamburger_icon_white.svg';

function HamburgerMenuIcon({ className }) {
  return <img src={hamburgerIcon} alt="hamburger" className={className} />;
}

HamburgerMenuIcon.propTypes = {
  className: PropTypes.string,
};

HamburgerMenuIcon.defaultProps = {
  className: '',
};

export default HamburgerMenuIcon;
