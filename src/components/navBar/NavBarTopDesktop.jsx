import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import NavigationButtonHubblrIcon from './NavigationButtonHubblrIcon';
import HubblrGradientBorderButtonBase from '../gradientBorderButtons/HubblrGradientBorderButtonBase';
import ArrowImageDown from '../imageComponents/ArrowImageDown';
import IndexPageContext from '../../context/IndexPageContext';

const NavBarTopDesktop = forwardRef(({ className }, ref) => {
  const { navBarSizeClass } = useContext(IndexPageContext);

  return (
    <div
      ref={ref}
      className={`box-border fixed top-0 h-${navBarSizeClass} w-full z-40 p-5 ${className} `}
    >
      <div className="absolute w-full inset-0 navbar-background-blur" />
      <div className="relative flex justify-center h-full">
        <NavigationButtonHubblrIcon />
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <HubblrGradientBorderButtonBase
            image={<ArrowImageDown rotationDegree={270} widthClass="w-5" />}
            addedFlexClasses="gap-1"
            theme="dark"
          >
            Kontaktieren
          </HubblrGradientBorderButtonBase>
        </div>
      </div>
    </div>
  );
});

NavBarTopDesktop.propTypes = {
  className: PropTypes.string,
};

NavBarTopDesktop.defaultProps = {
  className: '',
};

export default NavBarTopDesktop;
