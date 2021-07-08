import React from 'react';
import PropTypes from 'prop-types';
import AppButton from '../buttons/bases/AppButton';
import HubblrImage from '../image-components/HubblrImage';
import HamburgerMenuIcon from '../image-components/HamburgerMenuIcon';

const MobileContent = ({ isCollapsed, menuOnClick }) => {
  return (
    <>
      <div className="w-1/2 flex flex-col justify-center items-start">
        <AppButton
          className="button-dark"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/';
          }}
        >
          <HubblrImage className="w-20 h-auto" />
        </AppButton>
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
