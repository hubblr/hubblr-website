import React from 'react';
import PropTypes from 'prop-types';
import lightningImage from '../../images/lightning/lightning.svg';

function LightningImage({ className, style }) {
  return <img src={lightningImage} alt="software laboratory" className={className} style={style} />;
}

LightningImage.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};

LightningImage.defaultProps = {
  className: 'h-full w-full',
  style: null,
};

export default LightningImage;
