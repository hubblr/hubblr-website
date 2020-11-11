import React from 'react';
import PropTypes from 'prop-types';
import NavBarTopDesktop from './NavBarTopDesktop';
import NavBarTopMobile from './NavBarTopMobile';
import { MobileAndTabletQuery, DesktopQuery } from '../../util/helpers';

const NavBarTop = React.forwardRef(({ contentWidth, className }, ref) => {
  return (
    <div ref={ref} className={className}>
      <MobileAndTabletQuery>
        <NavBarTopMobile contentWidth={contentWidth} />
      </MobileAndTabletQuery>
      <DesktopQuery>
        <NavBarTopDesktop contentWidth={contentWidth} />
      </DesktopQuery>
    </div>
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
