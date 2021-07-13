import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { LocalizedLink as Link } from 'gatsby-theme-i18n';
import HubblrImage from '../image-components/HubblrImage';
import HamburgerMenuIcon from '../image-components/HamburgerMenuIcon';

const MobileContent = ({ isCollapsed, menuOnClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="w-1/2 flex flex-col justify-center items-start">
        <Link to="/" className="button button-dark">
          <HubblrImage className="w-20 h-auto" />
        </Link>
      </div>

      <div className="w-1/2 flex flex-col justify-center items-end">
        <HamburgerMenuIcon onClick={menuOnClick} isActive={!isCollapsed} />
      </div>
    </>
  );
};

MobileContent.propTypes = {
  isCollapsed: PropTypes.bool,
  menuOnClick: PropTypes.func.isRequired,
};

MobileContent.defaultProps = {
  isCollapsed: true,
};

export default MobileContent;
