import React from 'react';
import PropTypes from 'prop-types';
import NavBarTopDesktop from './NavBarTopDesktop';
import NavBarTopMobile from './NavBarTopMobile';
import { MobileAndTabletQuery, DesktopQuery } from '../../util/helpers';

const NavBarTop = React.forwardRef(({ className }, ref) => {
  return (
    <div ref={ref} className={className}>
      <MobileAndTabletQuery>
        <NavBarTopMobile />
      </MobileAndTabletQuery>
      <DesktopQuery>
        <NavBarTopDesktop />
      </DesktopQuery>
    </div>
  );
});

NavBarTop.propTypes = {
  className: PropTypes.string,
};

NavBarTop.defaultProps = {
  className: '',
};

export default NavBarTop;
