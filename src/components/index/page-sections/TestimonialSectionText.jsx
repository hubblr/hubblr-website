import React from 'react';
import PropTypes from 'prop-types';

const TestimonialSectionText = ({ personaQuoteText, className }) => {
  return (
    <div>
      <p className={`${className} m-5 text-center my-10 2xl:text-xl`}>{personaQuoteText}</p>
    </div>
  );
};

export default TestimonialSectionText;

TestimonialSectionText.propTypes = {
  personaQuoteText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  className: PropTypes.string,
};

TestimonialSectionText.defaultProps = {
  className: '',
};
