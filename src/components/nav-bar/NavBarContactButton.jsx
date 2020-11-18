import React from 'react';
import { Link } from 'gatsby';

function NavBarContactButton() {
  return (
    <div className="flex flex-col justify-center items-end">
      <Link to="/contact" className="button button-dark text-center font-extrabold tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r bg-gradient-to-r from-teal-400 to-blue-500">
          Kontaktieren
        </span>
      </Link>
    </div>
  );
}

export default NavBarContactButton;
