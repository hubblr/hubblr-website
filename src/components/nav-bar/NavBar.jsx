import React from 'react';
import PropTypes from 'prop-types';
import { DesktopQuery, MobileAndTabletQuery } from '../../util/helpers';
import useIsPageScrolled from '../../hooks/window/useIsPageScrolled';

const NavBar = React.forwardRef(
  (
    {
      isCollapsed,
      desktopContent,
      mobileLeftContent,
      mobileRightContent,
      collapsedContent,
      containerClassName,
      expandedClassName,
      scrolledBackgroundClassName,
      showNavBar,
    },
    ref
  ) => {
    const isPageScrolled = useIsPageScrolled();
    const isBackgroundBlurred = isCollapsed && isPageScrolled;
    const isVisible = showNavBar || !isCollapsed;

    return (
      <div
        className={`fixed top-0 w-full ${
          !isCollapsed ? `h-screen overflow-y-scroll ${expandedClassName}` : ''
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
                <div className="w-1/2 flex flex-col justify-center items-start">
                  {mobileLeftContent}
                </div>
                <div className="w-1/2 flex flex-col justify-center items-end">
                  {mobileRightContent}
                </div>
              </div>
            </MobileAndTabletQuery>
            <DesktopQuery>{desktopContent}</DesktopQuery>
          </div>
          {collapsedContent}
        </div>
      </div>
    );
  }
);

NavBar.propTypes = {
  desktopContent: PropTypes.node,
  mobileLeftContent: PropTypes.node,
  mobileRightContent: PropTypes.node,
  isCollapsed: PropTypes.bool,
  collapsedContent: PropTypes.node,
  containerClassName: PropTypes.string, // class of all navbar, e.g., background
  expandedClassName: PropTypes.string, // class of all navbar when collapsed content is expanded
  // class of otherwise unseen background when scrolling the page - useful for e.g., blur
  scrolledBackgroundClassName: PropTypes.string,
  showNavBar: PropTypes.bool,
};

NavBar.defaultProps = {
  desktopContent: null,
  mobileLeftContent: null,
  mobileRightContent: null,
  isCollapsed: true, // controlled by parent
  collapsedContent: null,
  containerClassName: '',
  expandedClassName: '',
  scrolledBackgroundClassName: '',
  showNavBar: true,
};

export default NavBar;
