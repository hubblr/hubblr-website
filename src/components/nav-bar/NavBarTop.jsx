import React from 'react';
import PropTypes from 'prop-types';
import NavBarTopDesktop from './NavBarTopDesktop';
import NavBarTopMobile from './NavBarTopMobile';
import { MobileAndTabletQuery, DesktopQuery } from '../../util/helpers';

const NavBarTop = React.forwardRef(({ contentWidth, className }, ref) => {
  return (
    <>
      <MobileAndTabletQuery>
        <NavBarTopMobile ref={ref} contentWidth={contentWidth} className={className} />
      </MobileAndTabletQuery>
      <DesktopQuery>
        <NavBarTopDesktop ref={ref} contentWidth={contentWidth} className={className} />
      </DesktopQuery>
    </>
  );
});

NavBarTop.propTypes = {
  contentWidth: PropTypes.number.isRequired,
  className: PropTypes.string,
};

NavBarTop.defaultProps = {
  className: '',
};

export default NavBarTop;
