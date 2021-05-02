import React from 'react';
import PropTypes from 'prop-types';
import TestimonialPhoto from '../../images/testimonial_profile.jpeg';

const TestimonialImageContainer = ({ image, altText, className }) => {
  return (
    <img
      src={image}
      alt={altText}
      className={`${className} rounded-full border-2 border-hubblr-turquoise shadow-box-purple`}
    />
  );
};

export default TestimonialImageContainer;

TestimonialImageContainer.propTypes = {
  image: PropTypes.string,
  altText: PropTypes.string,
  className: PropTypes.string,
};

TestimonialImageContainer.defaultProps = {
  image: `${TestimonialPhoto}`,
  altText: 'photo missing',
  className: '',
};
