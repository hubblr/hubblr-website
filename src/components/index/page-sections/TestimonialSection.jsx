import React from 'react';
import PropTypes from 'prop-types';
import TestimonialSectionContentContainer from './TestimonialSectionContentContainer';

const TestimonialSection = ({ testimonials }) => {
  return (
    // Section Container
    <div className="container mx-auto mb-40">
      {/* 2 COL GRID @largerScreen */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {testimonials.map((edge) => {
          return (
            <TestimonialSectionContentContainer
              key={`testimonial-${edge.node.id}`}
              personaImage={edge.node.profileImage.file.url}
              corporateLogo={edge.node.logo.file.url}
              personaName={edge.node.name}
              personaJobtitle={edge.node.jobRole}
              personaQuoteText={edge.node.testimonial.testimonial}
            />
          );
        })}
      </div>
    </div>
  );
};

TestimonialSection.propTypes = {
  testimonials: PropTypes.array.isRequired,
};

export default TestimonialSection;
