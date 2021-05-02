import React from 'react';
// import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

const TestimonialSectionText = ({ personasQuoteText, className }) => {
  return (
    <div>
      <p className={`${className} m-5 text-center my-10`}>
        {/* <FormattedMessage id={personasQuoteText} /> */}
        {personasQuoteText}
      </p>
    </div>
  );
};

export default TestimonialSectionText;

TestimonialSectionText.propTypes = {
  personasQuoteText: PropTypes.string,
  className: PropTypes.string,
};

TestimonialSectionText.defaultProps = {
  personasQuoteText: 'personasQuoteText is missing',
  className: '',
};
