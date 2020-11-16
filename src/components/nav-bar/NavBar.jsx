import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import { Link } from 'gatsby';
import { DesktopQuery, MobileAndTabletQuery } from '../../util/helpers';
import LightningImage from '../image-components/LightningImage';
import ConsultingIllustrationImage from '../image-components/ConsultingIllustrationImage';
import VenturesArrowImage from '../image-components/VenturesArrowImage';
import HubblrGradientBorderButtonBase from '../gradient-border-buttons/HubblrGradientBorderButtonBase';
import LongArrowImage from '../image-components/LongArrowImage';
import HamburgerMenuIcon from '../image-components/HamburgerMenuIcon';
import NavBarLink from './NavBarLink';
import Button from '../simple/button/Button';
import useIsPageScrolled from '../hooks/window/useIsPageScrolled';
import PageContext from '../../context/PageContext';
import HubblrImage from '../image-components/HubblrImage';

const NavBar = React.forwardRef(({ leftContent, rightContent, className, showNavBar }, ref) => {
  // state of page & nav bar
  const pageInfo = useContext(PageContext);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const isPageScrolled = useIsPageScrolled();
  const isBackgroundBlurred = isCollapsed && isPageScrolled;
  const isVisible = showNavBar || !isCollapsed;

  // navigation functions
  function navigateByNavBar(to) {
    navigate(to).then(() => {
      setIsCollapsed(true);
    });
  }
  function navigateToIndexSection(to, fieldName) {
    if (pageInfo.page === 'index') {
      // when already on index page, it is much cleaner to scroll
      if (fieldName) {
        window.scrollTo(0, pageInfo.sectionContentStarts[fieldName]);
      } else {
        window.scrollTo(0, 0);
      }
      setIsCollapsed(true);
    } else {
      navigateByNavBar(to);
    }
  }

  return (
    <div
      className={`fixed top-0 w-full z-50 ${
        !isCollapsed ? 'h-screen overflow-y-scroll bg-black' : ''
      } ${isVisible ? '' : 'invisible'} ${className}`}
    >
      <div
        className={`${
          isBackgroundBlurred ? '' : 'hidden'
        } absolute w-full h-full navbar-background-blur`}
      />
      <div className="relative container mx-auto h-full flex flex-col">
        <div ref={ref} className="w-full px-8 lg:px-0 py-4">
          <MobileAndTabletQuery>
            <div className="flex justify-between items-center">
              <Button
                onClick={() => {
                  navigateToIndexSection('/');
                }}
              >
                <HubblrImage className="w-20" />
              </Button>
              <Button
                onClick={() => {
                  setIsCollapsed(!isCollapsed);
                }}
              >
                <HamburgerMenuIcon className="w-12" />
              </Button>
            </div>
          </MobileAndTabletQuery>
          <div className="flex items-center">
            <DesktopQuery>
              <div className="w-1/3">{leftContent}</div>
              <div className="w-1/3 flex justify-center">
                <Button
                  onClick={() => {
                    navigateToIndexSection('/');
                  }}
                >
                  <HubblrImage className="w-20" />
                </Button>
              </div>
              <div className="w-1/3">{rightContent}</div>
            </DesktopQuery>
          </div>
        </div>

        <div className={`${isCollapsed ? 'hidden' : ''} w-full px-8 pb-8 flex-grow flex flex-col`}>
          <div className="flex-grow flex flex-col">
            <hr className="bg-white h-p" />
            <Button
              onClick={() => {
                navigateToIndexSection('/');
              }}
            >
              <NavBarLink>Home</NavBarLink>
            </Button>
            <hr className="bg-white h-p" />
            <Button
              onClick={() => {
                navigateToIndexSection('/#softwareLaboratory', 'softwareLaboratory');
              }}
            >
              <NavBarLink linkImage={<LightningImage className="h-full" />}>
                Software Laboratory
              </NavBarLink>
            </Button>
            <hr className="bg-white h-p" />
            <Button
              onClick={() => {
                navigateToIndexSection('/#consulting', 'consulting');
              }}
            >
              <NavBarLink linkImage={<ConsultingIllustrationImage className="h-full" />}>
                Solution Assessment
              </NavBarLink>
            </Button>
            <hr className="bg-white h-p" />
            <Button
              onClick={() => {
                navigateToIndexSection('/#ventures', 'ventures');
              }}
            >
              <NavBarLink linkImage={<VenturesArrowImage className="h-full" />}>
                Digital Ventures
              </NavBarLink>
            </Button>
            <hr className="bg-white h-p" />
            <Link to="/contact" className="button">
              <NavBarLink>Kontakt</NavBarLink>
            </Link>
            <hr className="bg-white h-p" />
          </div>
          <Link to="/contact">
            <HubblrGradientBorderButtonBase
              widthClass="w-full"
              addedFlexClasses="justify-between"
              theme="dark"
              image={<LongArrowImage theme="dark" className="w-10" />}
            >
              <div className="text-xl">Jetzt kontaktieren</div>
            </HubblrGradientBorderButtonBase>
          </Link>
        </div>
      </div>
    </div>
  );
});

NavBar.propTypes = {
  leftContent: PropTypes.node,
  rightContent: PropTypes.node,
  className: PropTypes.string,
  showNavBar: PropTypes.bool,
};

NavBar.defaultProps = {
  leftContent: null,
  rightContent: null,
  className: '',
  showNavBar: true,
};

export default NavBar;
