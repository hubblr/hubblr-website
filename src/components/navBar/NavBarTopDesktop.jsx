import React, { useContext } from 'react';
import NavigationButtonHubblrIcon from './NavigationButtonHubblrIcon';
import HubblrGradientBorderButtonBase from '../gradientBorderButtons/HubblrGradientBorderButtonBase';
import ArrowImageDown from '../imageComponents/ArrowImageDown';
import IndexPageContext from '../../context/IndexPageContext';

function NavBarTopDesktop() {
  const { navBarSizeClass } = useContext(IndexPageContext);

  return (
    <div className={`h-${navBarSizeClass} w-full p-5`}>
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
}

export default NavBarTopDesktop;
