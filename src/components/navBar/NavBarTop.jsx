import React from 'react';
import PropTypes from 'prop-types';
import NavBarTopDesktop from './NavBarTopDesktop';
import NavBarTopMobile from './NavBarTopMobile';
import { MobileAndTabletQuery, DesktopQuery } from '../../util/helpers';

const NavBarTop = React.forwardRef(({ className }, ref) => {
  return (
    <>
      <MobileAndTabletQuery>
        <NavBarTopMobile ref={ref} className={className} />
      </MobileAndTabletQuery>
      <DesktopQuery>
        <NavBarTopDesktop ref={ref} className={className} />
      </DesktopQuery>
    </>
  );
});

NavBarTop.propTypes = {
  className: PropTypes.string,
};

NavBarTop.defaultProps = {
  className: '',
};

export default NavBarTop;
