import React from 'react';
import PropTypes from 'prop-types';
import { MobileAndTabletQuery, DesktopQuery } from '../../util/helpers';
import SectionScrollBarBase from '../section-scroll-bar/SectionScrollBarBase';
import ArrowImageDownDouble from '../image-components/ArrowImageDownDouble';

function IntroductionSection({ children }) {
  return (
    <div className="container mx-auto">
      <MobileAndTabletQuery>
        <div className="h-screen pt-20 pb-5">
          <div className="flex flex-col justify-between h-full">
            {children}
            <div className="w-full flex justify-center">
              <ArrowImageDownDouble />
            </div>
          </div>
        </div>
      </MobileAndTabletQuery>
      <DesktopQuery>
        <div className="flex flex-col min-h-screen">
          <div className="flex flex-col justify-center flex-grow">{children}</div>
          <SectionScrollBarBase upperFlexGrow={0} lowerFlexGrow={0} lowerClassNames="h-16" />
        </div>
      </DesktopQuery>
    </div>
  );
}

IntroductionSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IntroductionSection;
