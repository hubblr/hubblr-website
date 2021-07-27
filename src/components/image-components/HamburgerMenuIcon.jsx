import React from 'react';
import PropTypes from 'prop-types';
import Button from '../buttons/bases/Button';

function HamburgerMenuIcon({ isActive, className, onClick }) {
  return (
    <Button
      className={`button-theme-transparent hamburger hamburger--spring ${
        isActive ? 'is-active' : ''
      } ${className}`}
      onClick={onClick}
    >
      <div className="flex justify-center items-center py-2">
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </div>
    </Button>
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
