import React from 'react';
import PropTypes from 'prop-types';
import lightningImage from '../../images/lightning/lightning.svg';

function LightningImage({ className }) {
  return <img src={lightningImage} alt="software laboratory" className={className} />;
}

LightningImage.propTypes = {
  className: PropTypes.string,
};

LightningImage.defaultProps = {
  className: 'h-full w-full',
};

export default LightningImage;
