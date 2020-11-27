import React from 'react';
import PropTypes from 'prop-types';
import { DesktopQuery, MobileAndTabletQuery } from '../../util/helpers';
import useIsPageScrolled from '../hooks/window/useIsPageScrolled';

const NavBar = React.forwardRef(
  (
    {
      isCollapsed,
      desktopLeftContent,
      desktopMiddleContent,
      desktopRightContent,
      mobileLeftContent,
      mobileRightContent,
      collapsedContent,
      className,
      showNavBar,
    },
    ref
  ) => {
    const isPageScrolled = useIsPageScrolled();
    const isBackgroundBlurred = isCollapsed && isPageScrolled;
    const isVisible = showNavBar || !isCollapsed;

    return (
      <div
        className={`navbar fixed top-0 w-full z-50 px-1 ${
          !isCollapsed ? 'h-screen overflow-y-scroll bg-black' : ''
        } ${isVisible ? '' : 'opacity-0'} ${className}`}
      >
        <div
          className={`${
            isBackgroundBlurred ? '' : 'hidden'
          } absolute inset-0 w-full h-full navbar-background-blur`}
        />
        <div className="relative container mx-auto h-full flex flex-col">
          <div ref={ref} className="w-full py-2">
            <MobileAndTabletQuery>
              <div className="flex justify-between items-center">
                <div className="w-1/2 flex flex-col justify-center items-start">
                  {mobileLeftContent}
                </div>
                <div className="w-1/2 flex flex-col justify-center items-end">
                  {mobileRightContent}
                </div>
              </div>
            </MobileAndTabletQuery>
            <DesktopQuery>
              <div className="flex items-center">
                <div className="w-1/3">{desktopLeftContent}</div>
                <div className="w-1/3 flex justify-center">{desktopMiddleContent}</div>
                <div className="w-1/3">{desktopRightContent}</div>
              </div>
            </DesktopQuery>
          </div>
          {collapsedContent}
        </div>
      </div>
    );
  }
);

NavBar.propTypes = {
  desktopLeftContent: PropTypes.node,
  desktopMiddleContent: PropTypes.node,
  desktopRightContent: PropTypes.node,
  mobileLeftContent: PropTypes.node,
  mobileRightContent: PropTypes.node,
  isCollapsed: PropTypes.bool,
  collapsedContent: PropTypes.node,
  className: PropTypes.string,
  showNavBar: PropTypes.bool,
};

NavBar.defaultProps = {
  desktopLeftContent: null,
  desktopMiddleContent: null,
  desktopRightContent: null,
  mobileLeftContent: null,
  mobileRightContent: null,
  isCollapsed: true,
  collapsedContent: null,
  className: '',
  showNavBar: true,
};

export default NavBar;
