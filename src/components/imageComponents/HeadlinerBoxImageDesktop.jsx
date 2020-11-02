import React from 'react';
import PropTypes from 'prop-types';
import BoxImage from '../../images/headlinerBox/Headliner-Box-Cropped-Desktop.png';

function HeadlinerBoxImageDesktop({ className }) {
  return <img src={BoxImage} alt="Box" className={className} />;
}

HeadlinerBoxImageDesktop.defaultProps = {
  className: '',
};

HeadlinerBoxImageDesktop.propTypes = {
  className: PropTypes.string,
};

export default HeadlinerBoxImageDesktop;
