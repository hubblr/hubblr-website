/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import GradientButton from '../../buttons/gradient-border-buttons/GradientButton';

function BusinessCardContactPage({ contact }) {
  return (
    <div className="w-full h-full bg-brand-gray-darkest rounded-lg p-4 md:p-6 flex flex-col items-center">
      <div className="mb-5">
        {/* <SimonHagedornImage className="w-24 h-24 flex items-center justify-center rounded-full" /> */}
        <img
          alt="{contact.image.file.title}"
          src="{contact.image.file.url}"
          className="w-24 h-24 flex items-center justify-center rounded-full"
        />
      </div>
      <div className="flex-grow flex flex-col justify-between items-center mb-5">
        <h2 className="text-center text-2xl font-extrabold leading-none mb-10">
          <FormattedMessage id="contact.business-card.heading" />
        </h2>
        <div className="text-center text-xl leading-7 mb-10 leading-tight">
          <FormattedMessage id="contact.business-card.text" />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg font-extrabold">{contact.name}</p>
          <p className="text-base">{contact.position}</p>
        </div>
      </div>
      <a href="https://calendly.com/cbals/30min" className="flex justify-center w-full">
        <GradientButton className="button-theme-dark">
          <FormattedMessage id="contact.business-card.schedule-appointment" />
        </GradientButton>
      </a>
    </div>
  );
}

BusinessCardContactPage.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default BusinessCardContactPage;
