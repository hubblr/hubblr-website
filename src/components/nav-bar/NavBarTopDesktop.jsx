import React from 'react';
import { Link } from 'gatsby';

import NavigationButtonHubblrIcon from './NavigationButtonHubblrIcon';

function NavBarTopDesktop() {
  return (
    <div className="h-20 w-full p-5 flex flex-row">
      <div className="w-1/3" />
      <div className=" w-1/3 flex justify-center h-full">
        <NavigationButtonHubblrIcon />
      </div>
      <div className="flex flex-col justify-center items-end w-1/3">
        <Link
          to="/contact"
          className="button button-dark text-center font-extrabold tracking-tight "
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r bg-gradient-to-r from-teal-400 to-blue-500">
            Kontaktieren
          </span>
        </Link>
      </div>
    </div>
  );
}

export default NavBarTopDesktop;
