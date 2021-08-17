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
        <div className="flex flex-row justify-start">
          <TestimonialImageContainer image={personaImage} alt="" className="w-24 h-24 z-20" />
          <TestimonialImageContainer image={corporateLogo} alt="" className="w-12 h-12 z-10" />
        </div>
        <div className="flex flex-col md:justify-end px-2">
          <div className="secondary-title w-full pt-2 text-center md:text-left 2xl:text-2xl">
            {personaName}
          </div>
          <div className="secondary-subtitle w-full text-center md:text-left 2xl:text-2xl">
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
  personaName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  personaJobtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

TestimonialSectionPersonaRow.defaultProps = {
  personaImage: '',
  corporateLogo: '',
  personaName: '',
  personaJobtitle: '',
};
