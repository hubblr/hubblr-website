import React from 'react';
import PropTypes from 'prop-types';
import cedricBalsImage from '../../images/cedricBals/cedric-bals.png';

function CedricBalsImage({ className }) {
  return <img src={cedricBalsImage} alt="Cedric Bals" className={className} />;
}

CedricBalsImage.defaultProps = {
  className: '',
};

CedricBalsImage.propTypes = {
  className: PropTypes.string,
};

export default CedricBalsImage;
