import React from 'react';
import PropTypes from 'prop-types';
import simonHagedornImage from '../../images/simonHagedorn/simon_hagedorn.jpeg';

function SimonHagedornImage({ className }) {
  return <img src={simonHagedornImage} alt="Simon Hagedorn" className={className} />;
}

SimonHagedornImage.defaultProps = {
  className: '',
};

SimonHagedornImage.propTypes = {
  className: PropTypes.string,
};

export default SimonHagedornImage;
