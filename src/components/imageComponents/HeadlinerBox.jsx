import React from 'react';
import PropTypes from 'prop-types';
import boxImage from '../../images/headlinerBox/Headliner-Box-Transparent-Bg.png';

function HeadlinerBoxImage({ widthClass }) {
  return <img src={boxImage} alt="Box" className={widthClass} />;
}

HeadlinerBoxImage.defaultProps = {
  widthClass: '',
};

HeadlinerBoxImage.propTypes = {
  widthClass: PropTypes.string,
};

export default HeadlinerBoxImage;
