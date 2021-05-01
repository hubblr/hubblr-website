import React from 'react';
import { FormattedMessage } from 'react-intl';
import TestimonialPhoto from '../../../images/testimonial_profile.jpeg';
import TestimonialLogo from '../../../images/flink-logo.png';

const TestimonialSection = () => {
  return (
    // Section Container
    <div className="container mx-auto mb-40">
      {/* 2 COL GRID  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* EACH CONTENT CARD CAN BE OUTSOURCED INTO SINGLE CONTENT CARD COMPONENT */}
        <div className="col-span-1 flex justify-around items-center flex-col rounded-2xl text-center">
          <div className="grid-cols-2">
            <div className="col-span-1 flex flex-row justify-start">
              <img
                src={TestimonialPhoto}
                alt=""
                className="w-24 h-24 rounded-full border-2 border-hubblr-turquoise shadow-box-purple"
              />
              <img
                src={TestimonialLogo}
                alt=""
                className="w-12 h-12 rounded-full border-2 border-hubblr-turquoise
              shadow-box-purple"
              />
            </div>
            <div className="col-span-1">
              <div className="testimonial-person w-full pt-2 text-left">
                <FormattedMessage id="index.testimonials.flink.person-full-name" />
              </div>
              <div className="testimonial-jobtitle w-full text-left">
                <FormattedMessage id="index.testimonials.flink.person-position" />
              </div>
            </div>
          </div>
          <p className="m-5 text-center my-10">
            <FormattedMessage id="index.testimonials.flink.quote" />
          </p>
        </div>
        <div className="col-span-1 flex justify-around items-center flex-col rounded-2xl text-center">
          <div className="grid-cols-2">
            <div className="col-span-1 flex flex-row justify-start">
              <img
                src={TestimonialPhoto}
                alt=""
                className="w-24 h-24 rounded-full border-2 border-hubblr-turquoise shadow-box-purple"
              />
              <img
                src={TestimonialLogo}
                alt=""
                className="w-12 h-12 rounded-full border-2 border-hubblr-turquoise
              shadow-box-purple"
              />
            </div>
            <div className="col-span-1">
              <div className="testimonial-person w-full pt-2 text-left">
                <FormattedMessage id="index.testimonials.flink.person-full-name" />
              </div>
              <div className="testimonial-jobtitle w-full text-left">
                <FormattedMessage id="index.testimonials.flink.person-position" />
              </div>
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
