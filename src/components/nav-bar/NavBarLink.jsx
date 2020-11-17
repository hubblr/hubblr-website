import React from 'react';
import PropTypes from 'prop-types';

function NavBarLink({ linkImage, children }) {
  return (
    <div className="h-20 flex flex-row justify-center items-center w-full navbar-hover-blur h-20 text-white p-5">
      <div className="relative z-1 text-lg font-bold">
        <div
          style={{
            transform: 'translate(-50%, -50%)',
            top: '50%',
          }}
          className="h-16 -mr-3 opacity-50 absolute left-0 z-0"
        >
          {linkImage}
        </div>
        <div className="relative">{children}</div>
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
