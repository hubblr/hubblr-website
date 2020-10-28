import React from 'react';
import PropTypes from 'prop-types';
import NavigationButtonHubblrIcon from './NavigationButtonHubblrIcon';
import HubblrGradientBorderButtonBase from '../gradientBorderButtons/HubblrGradientBorderButtonBase';
import ArrowImageDown from '../imageComponents/ArrowImageDown';

const NavBarTop = React.forwardRef(({ className }, ref) => {
  return (
    <div
      ref={ref}
      className={`box-border ${className} fixed top-0 w-full z-40 p-5`}
      style={{ height: '107px' }}
    >
      <div
        className="absolute w-full bg-gray-900 inset-0 opacity-25"
        style={{
          backdropFilter: 'blur(40px)',
        }}
      />
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

NavBarTop.propTypes = {
  className: PropTypes.string,
};

NavBarTop.defaultProps = {
  className: '',
};

export default NavBarTop;
