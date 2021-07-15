import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import HubblrImage from '../image-components/HubblrImage';
import AppButton from '../buttons/bases/AppButton';

const NavBarDesktopContent = ({ desktopLeftContent, desktopRightContent }) => {
  return (
    <>
      <div className="flex items-center">
        <div className="w-1/3">{desktopLeftContent}</div>
        <div className="w-1/3 self-center flex justify-center">
          <AppButton
            className="button-dark"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
              window.scrollTo(0, 0);
            }}
          >
            <HubblrImage className="w-20 h-auto" />
          </AppButton>
        </div>
        <div className="w-1/3">{desktopRightContent}</div>
      </div>
    </>
  );
};

NavBarDesktopContent.propTypes = {
  desktopLeftContent: PropTypes.node,
  desktopRightContent: PropTypes.node,
};

NavBarDesktopContent.defaultProps = {
  desktopLeftContent: null,
  desktopRightContent: null,
};

export default NavBarDesktopContent;
