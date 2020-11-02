import React from 'react';
import PropTypes from 'prop-types';
import BoxImage from '../../images/headlinerBox/Headliner-Box-Cropped-Mobile.png';

function HeadlinerBoxImageMobile({ className }) {
  return <img src={BoxImage} alt="Box" className={className} />;
}

HeadlinerBoxImageMobile.propTypes = {
  className: PropTypes.string,
};

HeadlinerBoxImageMobile.defaultProps = {
  className: '',
};

export default HeadlinerBoxImageMobile;
