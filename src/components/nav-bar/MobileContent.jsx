import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import HubblrImage from '../image-components/HubblrImage';
import HamburgerMenuIcon from '../image-components/HamburgerMenuIcon';
import AppButton from '../buttons/bases/AppButton';

const MobileContent = ({ isCollapsed, onClick }) => {
  return (
    <>
      <div className="w-1/2 flex flex-col justify-center items-start">
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

      <div className="w-1/2 flex flex-col justify-center items-end">
        <HamburgerMenuIcon onClick={onClick} isActive={!isCollapsed} />
      </div>
    </>
  );
};

MobileContent.propTypes = {
  isCollapsed: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

MobileContent.defaultProps = {
  isCollapsed: true,
};

export default MobileContent;
