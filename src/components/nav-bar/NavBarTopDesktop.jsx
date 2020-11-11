import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import NavigationButtonHubblrIcon from './NavigationButtonHubblrIcon';

function NavBarTopDesktop({ contentWidth }) {
  return (
    <div
      className="h-20 w-full p-5 flex flex-row container mx-auto"
      style={{ width: contentWidth }}
    >
      <div className="absolute inset-0 navbar-background-blur" />
      <div className="w-1/3" />
      <div className=" w-1/3 relative flex justify-center h-full">
        <NavigationButtonHubblrIcon />
      </div>
      <div className="relative flex flex-col justify-center items-end w-1/3">
        <Link
          to="/contact"
          className="text-center font-extrabold leading-none tracking-tight p-4 hover:bg-brand-gray-darkest rounded-lg animate"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r bg-gradient-to-r from-teal-400 to-blue-500">
            Kontaktieren
          </span>
        </Link>
      </div>
    </div>
  );
}

NavBarTopDesktop.propTypes = {
  contentWidth: PropTypes.number.isRequired,
};

export default NavBarTopDesktop;