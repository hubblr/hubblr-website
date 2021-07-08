import React from 'react';
import PropTypes from 'prop-types';
import { LocalizedLink as Link } from 'gatsby-theme-i18n';
import AppButton from '../buttons/bases/AppButton';
import HubblrImage from '../image-components/HubblrImage';

const DesktopContent = ({ desktopLeftContent, desktopRightContent }) => {
  return (
    <>
      <div className="flex items-center">
        <div className="w-1/3">{desktopLeftContent}</div>
        <div className="w-1/3 self-center flex justify-center">
          <AppButton
            className="button-dark"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Link to="/">
              <HubblrImage className="w-20 h-auto" />
            </Link>
          </AppButton>
        </div>
        <div className="w-1/3">{desktopRightContent}</div>
      </div>
    </>
  );
};

DesktopContent.propTypes = {
  desktopLeftContent: PropTypes.node,
  desktopRightContent: PropTypes.node,
};

DesktopContent.defaultProps = {
  desktopLeftContent: null,
  desktopRightContent: null,
};

export default DesktopContent;
