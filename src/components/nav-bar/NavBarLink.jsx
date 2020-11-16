import React from 'react';
import PropTypes from 'prop-types';

function NavBarLink({ linkImage, children }) {
  return (
    <div className="h-20 flex flex-row w-full navbar-hover-blur h-20 flex justify-center text-white">
      <div className="relative">
        <div className="h-16 -mr-3 opacity-50 absolute left-0 transform -mt-5 -ml-8 z-0">
          {linkImage}
        </div>
        <div className="relative z-1 text-lg font-bold">{children}</div>
      </div>
    </div>
  );
}

NavBarLink.propTypes = {
  children: PropTypes.node.isRequired,
  linkImage: PropTypes.element,
};

NavBarLink.defaultProps = {
  linkImage: null,
};

export default NavBarLink;
