import React from 'react';
import IntroductionSectionContent from './IntroductionSectionContent';
import { MobileAndTabletQuery, DesktopQuery } from '../../util/helpers';
import SectionScrollBarBase from '../sectionScrollBar/SectionScrollBarBase';
import ArrowImageDownDouble from '../imageComponents/ArrowImageDownDouble';

const IntroductionSection = React.forwardRef((props, contentRef) => {
  return (
    <div className="container mx-auto">
      <MobileAndTabletQuery>
        <div className="flex flex-col justify-between h-screen">
          <div ref={contentRef}>
            <IntroductionSectionContent />
          </div>
          <div className="w-full flex justify-center">
            <ArrowImageDownDouble />
          </div>
        </div>
      </MobileAndTabletQuery>
      <DesktopQuery>
        <div className="flex flex-col min-h-screen">
          <div className="flex flex-col justify-center flex-grow">
            <div>
              <IntroductionSectionContent />
            </div>
          </div>

          <SectionScrollBarBase upperFlexGrow={0} lowerFlexGrow={0} lowerClassNames="h-16" />
        </div>
      </DesktopQuery>
    </div>
  );
});

IntroductionSection.displayName = 'IntroductionSection';

export default IntroductionSection;
