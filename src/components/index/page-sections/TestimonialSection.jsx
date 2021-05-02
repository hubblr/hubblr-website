import React from 'react';
import { FormattedMessage } from 'react-intl';
import TestimonialPhoto from '../../../images/testimonial_profile.jpeg';
import TestimonialLogo from '../../../images/flink-logo.png';
import TestimonialSectionContentContainer from './TestimonialSectionContentContainer';

const TestimonialSection = () => {
  return (
    // Section Container
    <div className="container mx-auto mb-40">
      {/* 2 COL GRID @largerScreen */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <TestimonialSectionContentContainer
          personasImage={TestimonialPhoto}
          corporateLogo={TestimonialLogo}
          personasName={<FormattedMessage id="index.testimonials.flink.person-full-name" />}
          personasJobtitle={<FormattedMessage id="index.testimonials.flink.person-position" />}
          personasQuoteText={<FormattedMessage id="index.testimonials.flink.quote" />}
        />
        <TestimonialSectionContentContainer
          personasImage={TestimonialPhoto}
          corporateLogo={TestimonialLogo}
          personasName={<FormattedMessage id="index.testimonials.flink.person-full-name" />}
          personasJobtitle={<FormattedMessage id="index.testimonials.flink.person-position" />}
          personasQuoteText={<FormattedMessage id="index.testimonials.flink.quote" />}
        />
      </div>
    </div>
  );
};

export default TestimonialSection;
