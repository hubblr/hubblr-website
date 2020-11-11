import React from 'react';
import PropTypes from 'prop-types';
import { MobileAndTabletQuery, DesktopQuery } from '../../util/helpers';
import SectionScrollBarBase from '../section-scroll-bar/SectionScrollBarBase';
import ArrowImageDownDouble from '../image-components/ArrowImageDownDouble';

function IntroductionSection({ children }) {
  return (
    <div className="container mx-auto min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col lg:justify-center pt-20 pb-5 lg:pt-0 md:pb-0">
        {children}
      </div>
      <MobileAndTabletQuery>
        <div className="w-full flex justify-center">
          <ArrowImageDownDouble />
        </div>
      </MobileAndTabletQuery>
      <DesktopQuery>
        <SectionScrollBarBase upperFlexGrow={0} lowerFlexGrow={0} lowerClassNames="h-16" />
      </DesktopQuery>
    </div>
  );
}

IntroductionSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IntroductionSection;
