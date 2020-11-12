import React from 'react';
import PropTypes from 'prop-types';
import NavigationButtonHubblrIcon from './NavigationButtonHubblrIcon';
import HamburgerMenuIcon from '../image-components/HamburgerMenuIcon';

function NavBarTopMobile({ isCollapsed, setIsCollapsed }) {
  return (
    <div className="flex justify-between h-full">
      <NavigationButtonHubblrIcon />
      <button
        type="button"
        onClick={() => {
          setIsCollapsed(!isCollapsed);
        }}
      >
        <HamburgerMenuIcon className="w-12" />
      </button>
    </div>
  );
}

NavBarTopMobile.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  setIsCollapsed: PropTypes.func.isRequired,
};

export default NavBarTopMobile;
