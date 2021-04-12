import { Link } from '@reach/router';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import CallToActionLogo from '../../../images/call-to-action.png';
import IndexGradientBorderButtonBasic from '../../buttons/gradient-border-buttons/IndexGradientBorderButtonBasic';
// import PropTypes from 'prop-types';
// import { LocalizedLink as Link } from 'gatsby-theme-i18n';
// import { FormattedMessage } from 'react-intl';
// import HubblrMainContentSection from '../page-section-bases/sections/HubblrMainContentSection';
// import ConsultingIllustrationImageBackground from '../../image-components/ConsultingIllustrationImageBackground';
// import IndexGradientBorderButtonLongArrow from '../../buttons/gradient-border-buttons/IndexGradientBorderButtonLongArrow';
// import { MobileAndTabletQuery, DesktopQuery } from '../../../util/helpers';
// import ConsultingSectionContent from './ConsultingSectionContent';
// import SectionScrollBar from '../section-scroll-bar/SectionScrollBar';
// import ArrowImageDownDouble from '../../image-components/ArrowImageDownDouble';

const CallToActionSection = () => {
  return (
    // Section Container
    <div className="grid grid-cols-2 gap-10 mb-40">
      {/* Image */}
      <div className=" flex px-4 ">
        <img src={CallToActionLogo} alt="" className="object-scale-down" />
      </div>
      {/* Content */}
      <div className="flex flex-col justify-center items-center md:flex-colfont-black font-sans">
        <h1 className="my-5 text-center w-1/2">
          <FormattedMessage id="index.call-to-action.text" />
        </h1>
        <Link to="/contact" className="my-5 w-1/2">
          <IndexGradientBorderButtonBasic
            theme="dark"
            widthClass="w-full"
            addedFlexClasses="justify-center"
          >
            <FormattedMessage id="generic.contact" />
          </IndexGradientBorderButtonBasic>
        </Link>
      </div>
    </div>
  );
};

export default CallToActionSection;
