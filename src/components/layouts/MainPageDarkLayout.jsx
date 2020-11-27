import React from 'react';
import PropTypes from 'prop-types';
import HubblrPageLinks from '../links/HubblrPageLinks';

function MainPageDarkLayout({ children, navBar }) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      {navBar}
      <div className="flex-grow flex flex-col">{children}</div>
      <div className="container mx-auto">
        <HubblrPageLinks />
      </div>
    </div>
  );
}

MainPageDarkLayout.propTypes = {
  children: PropTypes.node.isRequired,
  navBar: PropTypes.element,
};

MainPageDarkLayout.defaultProps = {
  navBar: null,
};

export default MainPageDarkLayout;
