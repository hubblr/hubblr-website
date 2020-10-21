import React from 'react';
import PropTypes from 'prop-types';
import cedricBalsImage from '../../images/cedricBals/cedric-bals.png';

function CedricBalsImage({ widthClass }) {
  return <img src={cedricBalsImage} alt="Cedric Bals Image" className={widthClass} />;
}

CedricBalsImage.propTypes = {
  widthClass: PropTypes.string,
};

export default CedricBalsImage;
