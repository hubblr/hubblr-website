import React from 'react';
import PropTypes from 'prop-types';
// import { MobileAndTabletQuery } from '../../../util/helpers';
// import { DesktopQuery } from '../../../util/helpers';
// import SectionScrollBar from '../section-scroll-bar/SectionScrollBar';
// import ArrowImageDownDouble from '../../image-components/ArrowImageDownDouble';

function IntroductionSection({ children }) {
  return (
    <div className="container mx-auto min-h-screen flex flex-col h-screen mt-4 ">
      <div className="flex-grow flex flex-col lg:justify-center pt-20 pb-5 lg:pt-0 md:pb-0">
        {children}
      </div>
      {/* <MobileAndTabletQuery>
        <div className="w-full flex justify-center mb-5">
          <ArrowImageDownDouble />
        </div>
      </MobileAndTabletQuery> */}
      {/* <DesktopQuery>
        <div className="mt-4">
          <SectionScrollBar
            upperFlexGrow={0}
            lowerFlexGrow={0}
            lowerClassNames="h-16"
            arrowImage={<ArrowImageDownDouble />}
          />
        </div>
      </DesktopQuery> */}
    </div>
  );
}

IntroductionSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IntroductionSection;
