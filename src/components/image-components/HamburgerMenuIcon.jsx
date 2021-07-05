import React from 'react';
import PropTypes from 'prop-types';
import AppButton from '../buttons/bases/AppButton';

function HamburgerMenuIcon({ isActive, className, onClick }) {
  return (
    <AppButton
      className={`button-dark hamburger hamburger--spring ${
        isActive ? 'is-active' : ''
      } ${className}`}
      onClick={onClick}
    >
      <div className="flex justify-center items-center py-2">
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </div>
    </AppButton>
  );
}

HamburgerMenuIcon.propTypes = {
  isActive: PropTypes.bool.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

HamburgerMenuIcon.defaultProps = {
  className: '',
  onClick: null,
};

export default HamburgerMenuIcon;
