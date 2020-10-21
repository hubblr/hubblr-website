import React from 'react';
import NavigationLinkHubblrIcon from './NavigationLinkHubblrIcon.jsx';
import GradientBorderButtonAppShortArrow from '../gradientBorderButtons/GradientBorderButtonAppShortArrow.jsx';

function NavBarTop() {
  return (
    <div className="fixed top-0 w-full z-40 p-5">
      <div
        className="absolute w-full bg-gray-900 inset-0 opacity-25"
        style={{
          backdropFilter: 'blur(10px)',
        }}
      />
      <div className={'relative flex justify-center'}>
        <NavigationLinkHubblrIcon />
        <div className={'absolute right-0 top-1/2 transform -translate-y-1/2'}>
          <GradientBorderButtonAppShortArrow buttonText={'Kontaktieren'} theme={'dark'} />
        </div>
      </div>
    </div>
  );
}

export default NavBarTop;
