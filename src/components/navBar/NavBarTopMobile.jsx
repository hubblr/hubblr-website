import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import NavigationButtonHubblrIcon from './NavigationButtonHubblrIcon';
import HamburgerMenuIcon from '../imageComponents/HamburgerMenuIcon';
import NavBarTopStackedLinks from './NavBarTopStackedLinks';
import LightningImage from '../imageComponents/LightningImage';
import ConsultingIllustrationImage from '../imageComponents/ConsultingIllustrationImage';
import VenturesArrowImage from '../imageComponents/VenturesArrowImage';
import IndexPageContext from '../../context/IndexPageContext';

function NavBarTopMobile({ contentWidth }) {
  const { navBarSizeClass } = useContext(IndexPageContext);
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <>
      <div className="flex justify-center">
        <div className={`h-${navBarSizeClass} w-full p-5`} style={{ width: contentWidth }}>
          <div className="absolute w-full inset-0" />
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
      </div>
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
        className={`relative w-full navbar-background-blur ${isCollapsed && 'hidden'}`}
      />
    </>
  );
}

NavBarTopMobile.propTypes = {
  contentWidth: PropTypes.number.isRequired,
};

export default NavBarTopMobile;
