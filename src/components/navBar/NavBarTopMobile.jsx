import React, { useContext, useState } from 'react';
import NavigationButtonHubblrIcon from './NavigationButtonHubblrIcon';
import HamburgerMenuIcon from '../imageComponents/HamburgerMenuIcon';
import NavBarTopStackedLinks from './NavBarTopStackedLinks';
import LightningImage from '../imageComponents/LightningImage';
import ConsultingIllustrationImage from '../imageComponents/ConsultingIllustrationImage';
import VenturesArrowImage from '../imageComponents/VenturesArrowImage';
import IndexPageContext from '../../context/IndexPageContext';

function NavBarTopMobile() {
  const { navBarSizeClass } = useContext(IndexPageContext);
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <>
      <div className={`h-${navBarSizeClass} w-full p-5`}>
        <div className="absolute w-full inset-0 navbar-background-blur" />
        <div className="relative flex justify-between h-full">
          <NavigationButtonHubblrIcon />
          <button
            type="button"
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
          >
            <HamburgerMenuIcon />
          </button>
        </div>
      </div>
      <NavBarTopStackedLinks
        content={[
          { text: 'Home' },
          { text: 'Software Laboratory', linkImage: <LightningImage /> },
          { text: 'Solution Assessment', linkImage: <ConsultingIllustrationImage /> },
          { text: 'Digital Ventures', linkImage: <VenturesArrowImage /> },
          { text: 'Kontakt' },
        ]}
        className={`relative w-full navbar-background-blur ${isCollapsed && 'hidden'}`}
      />
    </>
  );
}

export default NavBarTopMobile;
