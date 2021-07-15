import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import HubblrImage from '../image-components/HubblrImage';
import HamburgerMenuIcon from '../image-components/HamburgerMenuIcon';
import Button from '../buttons/bases/Button';

const NavBarMobileContent = ({ isCollapsed, onClick }) => {
  return (
    <>
      <div className="w-1/2 flex flex-col justify-center items-start">
        <Button
          className="button-theme-transparent"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
            window.scrollTo(0, 0);
          }}
        >
          <HubblrImage className="w-20 h-auto" />
        </Button>
      </div>

      <div className="w-1/2 flex flex-col justify-center items-end">
        <HamburgerMenuIcon onClick={onClick} isActive={!isCollapsed} />
      </div>
    </>
  );
};

NavBarMobileContent.propTypes = {
  isCollapsed: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

NavBarMobileContent.defaultProps = {
  isCollapsed: true,
};

export default NavBarMobileContent;
