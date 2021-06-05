import React from 'react';
import PropTypes from 'prop-types';

const TestimonialSectionText = ({ personaQuoteText, className }) => {
  return (
    <div>
      <p className={`${className} m-5 text-center my-10 lg:text-xl`}>{personaQuoteText}</p>
    </div>
  );
};

export default TestimonialSectionText;

TestimonialSectionText.propTypes = {
  personaQuoteText: PropTypes.string.isRequired,
  className: PropTypes.string,
};

TestimonialSectionText.defaultProps = {
  className: '',
};
