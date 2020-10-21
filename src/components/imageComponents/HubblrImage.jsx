import React from 'react';
import PropTypes from 'prop-types';
import hubblrIcon from '../../images/hubblr-icon.png';

function HubblrImage({ className }) {
  return <img src={hubblrIcon} alt="hubblr icon" className={className} />;
}

HubblrImage.propTypes = {
  className: PropTypes.string,
};

export default HubblrImage;
