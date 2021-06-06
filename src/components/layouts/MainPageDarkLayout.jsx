import React from 'react';
import PropTypes from 'prop-types';
import HubblrPageLinks from '../links/HubblrPageLinks';
import LayoutWrapper from './LayoutWrapper';

function MainPageDarkLayout({ children }) {
  return (
    <LayoutWrapper>
      <div className="overflow-hidden flex flex-col min-h-screen bg-black text-white font-sans">
        {children}
        <div className="container mx-auto">
          <HubblrPageLinks />
        </div>
      </div>
    </LayoutWrapper>
  );
}

MainPageDarkLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainPageDarkLayout;
