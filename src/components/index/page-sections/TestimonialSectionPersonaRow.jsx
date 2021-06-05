import React from 'react';
import PropTypes from 'prop-types';
import TestimonialImageContainer from '../../image-components/TestimonialImageContainer';

const TestimonialSectionPersonaRow = ({
  personaImage,
  corporateLogo,
  personaName,
  personaJobtitle,
}) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-row w-1/2 justify-start">
          <TestimonialImageContainer image={personaImage} alt="" className="w-24 h-24" />
          <TestimonialImageContainer image={corporateLogo} alt="" className="w-12 h-12 " />
        </div>
        <div className="flex flex-col w-full md:w-1/2 md:justify-end">
          <div className="secondary-title w-full pt-2 text-center md:text-left lg:text-2xl">
            {personaName}
          </div>
          <div className="secondary-subtitle w-full text-center md:text-left lg:text-2xl">
            {personaJobtitle}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSectionPersonaRow;

TestimonialSectionPersonaRow.propTypes = {
  personaImage: PropTypes.string,
  corporateLogo: PropTypes.string,
  personaName: PropTypes.string,
  personaJobtitle: PropTypes.string,
};

TestimonialSectionPersonaRow.defaultProps = {
  personaImage: '',
  corporateLogo: '',
  personaName: '',
  personaJobtitle: '',
};
