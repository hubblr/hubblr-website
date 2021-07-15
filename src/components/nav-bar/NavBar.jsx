import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocalization } from 'gatsby-theme-i18n';
import { DesktopQuery, MobileAndTabletQuery } from '../../util/helpers';
import useIsPageScrolled from '../../hooks/window/useIsPageScrolled';
import localizedNavigate from '../../util/localizedNavigate';
import NavBarCollapsedContent from './NavBarCollapsedContent';
import NavBarMobileContent from './NavBarMobileContent';
import NavBarDesktopContent from './NavBarDesktopContent';

const NavBar = React.forwardRef(
  (
    {
      scrolledBackgroundClassName,
      showAlways,
      desktopLeftContent,
      desktopRightContent,
      containerClassName,
      classNameProp,
    },
    ref
  ) => {
    const isPageScrolled = useIsPageScrolled();
    const [isCollapsed, setIsCollapsed] = useState(true);
    const isBackgroundBlurred = isCollapsed && isPageScrolled;
    const [showNavBar, setShowNavBar] = useState(showAlways);
    const isVisible = showNavBar || !isCollapsed;

    const { locale } = useLocalization();
    // navigation functions
    function navigateByNavBar(to) {
      localizedNavigate(to, locale).then(() => {
        setIsCollapsed(!isCollapsed);
      });
    }

    function updateShowNavBar() {
      if (window.scrollY > 50 && !showNavBar) {
        setShowNavBar(true);
      } else if (window.scrollY <= 50 && showNavBar) {
        setShowNavBar(false);
      }
    }

    function onClick() {
      setIsCollapsed(!isCollapsed);
    }

    useEffect(() => {
      if (!showAlways) {
        window.addEventListener('scroll', updateShowNavBar);
      }
      return () => {
        if (!showAlways) {
          window.removeEventListener('scroll', updateShowNavBar);
        }
      };
    });

    return (
      <div
        className={`fixed top-0 w-full ${classNameProp} ${
          !isCollapsed ? `h-screen overflow-y-scroll bg-black` : ''
        } ${isVisible ? '' : 'opacity-0'} ${containerClassName}`}
      >
        <div
          className={`${
            isBackgroundBlurred ? '' : 'hidden'
          } absolute inset-0 w-full h-full ${scrolledBackgroundClassName}`}
        />
        <div className="relative container mx-auto h-full flex flex-col">
          <div ref={ref} className="w-full py-2">
            <MobileAndTabletQuery>
              <div className="flex justify-between items-center">
                <NavBarMobileContent isCollapsed={isCollapsed} onClick={onClick} />
              </div>
            </MobileAndTabletQuery>
            <DesktopQuery>
              <NavBarDesktopContent
                desktopLeftContent={desktopLeftContent}
                desktopRightContent={desktopRightContent}
              />
            </DesktopQuery>
          </div>
          <NavBarCollapsedContent isCollapsed={isCollapsed} navigate={navigateByNavBar} />
        </div>
      </div>
    );
  }
);

NavBar.propTypes = {
  classNameProp: PropTypes.string,
  desktopLeftContent: PropTypes.node,
  desktopRightContent: PropTypes.node,
  containerClassName: PropTypes.string, // class of all navbar, e.g., background
  // class of otherwise unseen background when scrolling the page - useful for e.g., blur
  scrolledBackgroundClassName: PropTypes.string,
  showAlways: PropTypes.bool,
};

NavBar.defaultProps = {
  classNameProp: '',
  desktopLeftContent: null,
  desktopRightContent: null,
  containerClassName: '',
  scrolledBackgroundClassName: '',
  showAlways: false,
};

export default NavBar;
