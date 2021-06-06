import React from 'react';
import PropTypes from 'prop-types';
import hubblrIcon from '../../images/hubblr-icon.svg';

function HubblrImage({ className }) {
  return <img src={hubblrIcon} alt="hubblr icon" className={className} />;
}

HubblrImage.defaultProps = {
  className: '',
};

HubblrImage.propTypes = {
  className: PropTypes.string,
};

export default HubblrImage;
