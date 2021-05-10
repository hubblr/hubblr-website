import React from 'react';
import PropTypes from 'prop-types';
import TestimonialPhoto from '../../images/testimonial_profile.jpeg';

const TestimonialImageContainer = ({ image, alt, className }) => {
  return (
    <img
      src={image}
      alt={alt}
      className={`${className} rounded-full border-2 border-hubblr-turquoise shadow-box-purple`}
    />
  );
};

export default TestimonialImageContainer;

TestimonialImageContainer.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

TestimonialImageContainer.defaultProps = {
  image: `${TestimonialPhoto}`,
  alt: 'photo missing',
  className: '',
};
