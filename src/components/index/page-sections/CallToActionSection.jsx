import { Link } from '@reach/router';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import CallToActionLogo from '../../../images/call-to-action.png';
import GradientButton from '../../buttons/gradient-border-buttons/GradientButton';

const CallToActionSection = () => {
  return (
    // Section Container
    // <div className="container mx-auto grid grid-cols-2 gap-10 mb-40">
    <div className="container mx-auto flex flex-wrap flex-row mb-40">
      {/* Image */}
      <div className="flex flex-col w-full md:w-1/2 px-4 ">
        <img src={CallToActionLogo} alt="" className="object-scale-down" />
      </div>
      {/* Content */}
      <div className="flex flex-col w-full md:w-1/2 justify-center items-center ">
        <span className="h1 my-5 text-center w-full md:w-1/2 2xl:text-3xl">
          <FormattedMessage id="index.call-to-action.text" />
        </span>
        <Link to="/contact" className="my-5 w-full md:w-1/2">
          <GradientButton theme="dark" borderButtonClassName="w-full">
            <FormattedMessage id="generic.contact" />
          </GradientButton>
        </Link>
      </div>
    </div>
  );
};

export default CallToActionSection;
