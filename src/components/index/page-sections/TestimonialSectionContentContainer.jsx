import React from 'react';
import PropTypes from 'prop-types';
import TestimonialSectionText from './TestimonialSectionText';
import TestimonialSectionPersonaRow from './TestimonialSectionPersonaRow';
import TestimonialPhoto from '../../../images/cedricBals/cedric-bals.png';

const TestimonialSectionContentContainer = ({
  personaImage,
  corporateLogo,
  personaName,
  personaJobtitle,
  personaQuoteText,
}) => {
  return (
    <div className="flex flex-col items-center">
      <TestimonialSectionPersonaRow
        personaImage={personaImage}
        corporateLogo={corporateLogo}
        personaName={personaName}
        personaJobtitle={personaJobtitle}
      />
      <TestimonialSectionText
        className="m-5 text-center my-10"
        personaQuoteText={personaQuoteText}
      />
    </div>
  );
};

export default TestimonialSectionContentContainer;

TestimonialSectionContentContainer.propTypes = {
  personaImage: PropTypes.string,
  corporateLogo: PropTypes.string,
  personaName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  personaJobtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  personaQuoteText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

TestimonialSectionContentContainer.defaultProps = {
  personaImage: TestimonialPhoto,
  corporateLogo: TestimonialPhoto,
};
