import React, { forwardRef, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import NavigationButtonHubblrIcon from './NavigationButtonHubblrIcon';
import HamburgerMenuIcon from '../imageComponents/HamburgerMenuIcon';
import NavBarTopStackedLinks from './NavBarTopStackedLinks';
import LightningImage from '../imageComponents/LightningImage';
import ConsultingIllustrationImage from '../imageComponents/ConsultingIllustrationImage';
import VenturesArrowImage from '../imageComponents/VenturesArrowImage';
import IndexPageContext from '../../context/IndexPageContext';

const NavBarTopMobile = forwardRef(({ className }, ref) => {
  const { navBarSizeClass } = useContext(IndexPageContext);
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className={`fixed top-0 z-40 w-full ${className}`}>
      <div ref={ref} className={`h-${navBarSizeClass} w-full p-5`}>
        <div className="absolute w-full inset-0 navbar-background-blur" />
        <div ref={ref} className="relative flex justify-between h-full">
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
        className={`relative w-full ${isCollapsed && 'hidden'}`}
      />
    </div>
  );
});

NavBarTopMobile.propTypes = {
  className: PropTypes.string,
};

NavBarTopMobile.defaultProps = {
  className: '',
};

export default NavBarTopMobile;
