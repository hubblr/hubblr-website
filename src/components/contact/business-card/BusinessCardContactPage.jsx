import React from 'react';
import { FormattedMessage } from 'react-intl';
import CedricBalsImage from '../../image-components/CedricBalsImage';
import HubblrGradientBorderButtonBase from '../../buttons/gradient-border-buttons/HubblrGradientBorderButtonBase';

function BusinessCardContactPage() {
  return (
    <div className="w-full h-full bg-brand-gray-darkest rounded-lg p-4 md:p-6 flex flex-col items-center">
      <div className="mb-5">
        <CedricBalsImage widthClass="w-24" />
      </div>
      <div className="flex-grow flex flex-col justify-between items-center mb-5">
        <h2 className="text-center text-2xl font-extrabold leading-none mb-10">
          <FormattedMessage id="contact.business-card.heading" />
        </h2>
        <div className="text-center text-xl leading-7 mb-10 leading-tight">
          <FormattedMessage id="contact.business-card.text" />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg font-extrabold">Cedric Bals</p>
          <p className="text-base">CEO</p>
        </div>
      </div>
      <a href="https://calendly.com/cbals/30min" className="flex justify-center w-full">
        <HubblrGradientBorderButtonBase
          widthClass="max-sm:w-full"
          innerOverlayDivClassName="w-full justify-between"
          theme="dark"
        >
          <div>
            <FormattedMessage id="contact.business-card.schedule-appointment" />
          </div>
        </HubblrGradientBorderButtonBase>
      </a>
    </div>
  );
}

export default BusinessCardContactPage;
