import React from 'react';
import { FormattedMessage } from 'react-intl';
import TestimonialPhoto from '../../../images/testimonial_profile.jpeg';
import TestimonialLogo from '../../../images/flink-logo.png';
import HelgePlehn from '../../../images/testimonial_helge_plehn.png';
import TestimonialSectionContentContainer from './TestimonialSectionContentContainer';
import MedikamentoLogo from '../../../images/medikamendo.png';

const TestimonialSection = () => {
  return (
    // Section Container
    <div className="container mx-auto mb-40">
      {/* 2 COL GRID @largerScreen */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <TestimonialSectionContentContainer
          personaImage={TestimonialPhoto}
          corporateLogo={TestimonialLogo}
          personaName={<FormattedMessage id="index.testimonials.flink.person-full-name" />}
          personaJobtitle={<FormattedMessage id="index.testimonials.flink.person-position" />}
          personaQuoteText={<FormattedMessage id="index.testimonials.flink.quote" />}
        />
        <TestimonialSectionContentContainer
          personaImage={HelgePlehn}
          corporateLogo={MedikamentoLogo}
          personaName={<FormattedMessage id="index.testimonials.medikamento.person-full-name" />}
          personaJobtitle={<FormattedMessage id="index.testimonials.medikamento.person-position" />}
          personaQuoteText={<FormattedMessage id="index.testimonials.medikamento.quote" />}
        />
      </div>
    </div>
  );
};

export default TestimonialSection;
