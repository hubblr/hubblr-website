import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { LocalizedLink as Link } from 'gatsby-theme-i18n';
import HubblrImage from '../image-components/HubblrImage';

const DesktopContent = ({ desktopLeftContent, desktopRightContent }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="flex items-center">
        <div className="w-1/3">{desktopLeftContent}</div>
        <div className="w-1/3 self-center flex justify-center">
          <Link to="/" className="button button-dark">
            <HubblrImage className="w-20 h-auto" />
          </Link>
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
