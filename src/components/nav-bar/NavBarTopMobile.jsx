import React, { useState } from 'react';
import { Link } from 'gatsby';
import NavigationButtonHubblrIcon from './NavigationButtonHubblrIcon';
import HamburgerMenuIcon from '../image-components/HamburgerMenuIcon';
import NavBarTopStackedLinks from './NavBarTopStackedLinks';
import LightningImage from '../image-components/LightningImage';
import ConsultingIllustrationImage from '../image-components/ConsultingIllustrationImage';
import VenturesArrowImage from '../image-components/VenturesArrowImage';
import LongArrowImage from '../image-components/LongArrowImage';
import HubblrGradientBorderButtonBase from '../gradient-border-buttons/HubblrGradientBorderButtonBase';

function NavBarTopMobile() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className={`${!isCollapsed ? 'h-screen bg-black' : ''} relative w-full z-50`}>
      <div
        className={`${isCollapsed ? '' : 'hidden'} absolute w-full h-full navbar-background-blur`}
      />
      <div className="container mx-auto h-full flex flex-col p-8 md:p-0">
        <div className="h-20 w-full">
          <div className="relative flex justify-between h-full">
            <NavigationButtonHubblrIcon />
            <button
              type="button"
              onClick={() => {
                setIsCollapsed(!isCollapsed);
              }}
            >
              <HamburgerMenuIcon className="w-12" />
            </button>
          </div>
        </div>

        <div className={`${isCollapsed ? 'hidden' : ''} w-full mt-6 flex-grow flex flex-col`}>
          <NavBarTopStackedLinks
            content={[
              { text: 'Home' },
              { text: 'Software Laboratory', linkImage: <LightningImage className="h-full" /> },
              {
                text: 'Solution Assessment',
                linkImage: <ConsultingIllustrationImage className="h-full" />,
              },
              { text: 'Digital Ventures', linkImage: <VenturesArrowImage className="h-full" /> },
              { text: 'Kontakt' },
            ]}
            className="flex-grow relative w-full"
          />
          <Link to="/contact">
            <HubblrGradientBorderButtonBase
              widthClass="w-full"
              addedFlexClasses="justify-between gap-3"
              theme="dark"
              image={<LongArrowImage theme="dark" className="w-16" />}
            >
              <div className="text-3xl">Jetzt kontaktieren</div>
            </HubblrGradientBorderButtonBase>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBarTopMobile;
