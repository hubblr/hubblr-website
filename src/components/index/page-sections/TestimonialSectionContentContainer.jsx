import React from 'react';
import PropTypes from 'prop-types';
import TestimonialSectionText from './TestimonialSectionText';
import TestimonialSectionPersonaRow from './TestimonialSectionPersonaRow';
import TestimonialPhoto from '../../../images/cedricBals/cedric-bals.png';

const TestimonialSectionContentContainer = ({
  personasImage,
  corporateLogo,
  personasName,
  personasJobtitle,
  personasQuoteText,
}) => {
  return (
    <div className="col-span-1 flex flex-col justify-around items-center">
      <TestimonialSectionPersonaRow
        personasImage={personasImage}
        corporateLogo={corporateLogo}
        personasName={personasName}
        personasJobtitle={personasJobtitle}
      />
      <TestimonialSectionText
        className="m-5 text-center my-10"
        personasQuoteText={personasQuoteText}
      />
    </div>
  );
};

export default TestimonialSectionContentContainer;

TestimonialSectionContentContainer.propTypes = {
  personasImage: PropTypes.string,
  corporateLogo: PropTypes.string,
  personasName: PropTypes.string,
  personasJobtitle: PropTypes.string,
  personasQuoteText: PropTypes.string,
};

TestimonialSectionContentContainer.defaultProps = {
  personasImage: `${TestimonialPhoto}`,
  corporateLogo: `${TestimonialPhoto}`,
  personasName: '',
  personasJobtitle: '',
  personasQuoteText: '',
};
