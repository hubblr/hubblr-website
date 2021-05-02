import React from 'react';
import PropTypes from 'prop-types';
import TestimonialImageContainer from '../../image-components/TestimonialImageContainer';

const TestimonialSectionPersonaRow = ({
  personasImage,
  corporateLogo,
  personasName,
  personasJobtitle,
}) => {
  return (
    <div>
      <div className="grid-cols-2">
        <div className="col-span-1 flex flex-row justify-start">
          <TestimonialImageContainer image={personasImage} alt="" className="w-24 h-24" />
          <TestimonialImageContainer image={corporateLogo} alt="" className="w-12 h-12 " />
        </div>
        <div className="col-span-1">
          <div className="testimonial-person w-full pt-2 text-left"> {personasName}</div>
          <div className="testimonial-jobtitle w-full text-left"> {personasJobtitle}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSectionPersonaRow;

TestimonialSectionPersonaRow.propTypes = {
  personasImage: PropTypes.string,
  corporateLogo: PropTypes.string,
  personasName: PropTypes.string,
  personasJobtitle: PropTypes.string,
};

TestimonialSectionPersonaRow.defaultProps = {
  personasImage: '',
  corporateLogo: '',
  personasName: '',
  personasJobtitle: '',
};
