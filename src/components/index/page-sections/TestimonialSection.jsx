import React from 'react';
import { FormattedMessage } from 'react-intl';
import TestimonialPhoto from '../../../images/testimonial_profile.jpeg';
import TestimonialLogo from '../../../images/flink-logo.png';
// import SectionHeading from '../section-heading/SectionHeading';

const TestimonialSection = () => {
  return (
    // Section Container
    <div className="m-6">
      {/* 2 COL GRID  */}
      <div className="grid grid-cols-2 gap-10 p-4">
        {/* EACH CONTENT CARD CAN BE OUTSOURCED INTO SINGLE CONTENT CARD COMPONENT */}
        <div className="col-span-1 flex justify-around items-center md:flex-col mx-3 rounded-2xl text-center">
          <div className="grid-cols-2">
            <div className="col-span-1 flex flex-row">
              <img
                src={TestimonialPhoto}
                alt=""
                className="w-24 h-auto rounded-full border-2 border-hubblr-turkis shadow-box-purple"
              />
              <img
                src={TestimonialLogo}
                alt=""
                className="w-12 h-12 rounded-full border-2 border-hubblr-turkis
              shadow-box-purple"
              />
            </div>
            <div className="col-span-1">
              <h1 className="text-3xl m-5 px-5">
                <FormattedMessage id="index.testimonials.flink.person-full-name" />
              </h1>
              <h1>
                <FormattedMessage id="index.testimonials.flink.person-position" />
              </h1>
            </div>
          </div>
          <p className="m-5 text-center py-10">
            <FormattedMessage id="index.testimonials.flink.quote" />
          </p>
        </div>
        <div className="col-span-1 flex justify-around items-center md:flex-col mx-3 rounded-2xl text-center">
          <div className="grid-cols-2">
            <div className="col-span-1 flex flex-row">
              <img
                src={TestimonialPhoto}
                alt=""
                className="w-24 h-auto rounded-full border-2 border-hubblr-turkis shadow-box-purple"
              />
              <img
                src={TestimonialLogo}
                alt=""
                className="w-12 h-12 rounded-full border-2 border-hubblr-turkis
              shadow-box-purple"
              />
            </div>
            <div className="col-span-1">
              <h1 className="text-3xl m-5 px-5">
                <FormattedMessage id="index.testimonials.flink.person-full-name" />
              </h1>
              <h1>
                <FormattedMessage id="index.testimonials.flink.person-position" />
              </h1>
            </div>
          </div>
          <p className="m-5 text-center py-10">
            <FormattedMessage id="index.testimonials.flink.quote" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
