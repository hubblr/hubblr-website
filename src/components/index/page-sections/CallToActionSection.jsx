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
    <div className="grid grid-cols-2 gap-10 border-2 border-green p-2 ">
      {/* Image */}
      <div className="flex md:flex-col">
        <img src={CallToActionLogo} alt="" />
      </div>
      {/* Content */}
      <div className="flex items-center place-content-center md:flex-colfont-black font-sans">
        <h1 className="my-5 text-center">
          <FormattedMessage id="index.call-to-action.text" />
        </h1>
        <Link to="/contact" className="my-5">
          <IndexGradientBorderButtonBasic
            theme="light"
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
