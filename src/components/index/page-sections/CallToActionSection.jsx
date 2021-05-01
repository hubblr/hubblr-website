import { Link } from '@reach/router';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import CallToActionLogo from '../../../images/call-to-action.png';
import IndexGradientBorderButtonBasic from '../../buttons/gradient-border-buttons/IndexGradientBorderButtonBasic';

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
        <span className="calltoaction-text my-5 text-center w-full md:w-1/2">
          <FormattedMessage id="index.call-to-action.text" />
        </span>
        <Link to="/contact" className="my-5 w-full md:w-1/2">
          <IndexGradientBorderButtonBasic theme="dark" borderButtonClassName="w-full">
            <FormattedMessage id="generic.contact" />
          </IndexGradientBorderButtonBasic>
        </Link>
      </div>
    </div>
  );
};

export default CallToActionSection;
