import React from 'react';
import IntroductionSectionContent from './IntroductionSectionContent';
import { MobileAndTabletQuery, DesktopQuery } from '../../util/helpers';
import SectionScrollBar from '../sectionScrollBar/SectionScrollBar';
import ArrowImageDownDouble from '../imageComponents/ArrowImageDownDouble';

const IntroductionSection = React.forwardRef((props, contentRef) => {
  return (
    <>
      <MobileAndTabletQuery>
        <div className="flex flex-col justify-between w-full h-screen px-10 pt-20">
          <div ref={contentRef}>
            <IntroductionSectionContent />
          </div>
          <div className="w-full flex justify-center">
            <ArrowImageDownDouble />
          </div>
        </div>
      </MobileAndTabletQuery>
      <DesktopQuery>
        <div className="flex flex-col min-h-screen w-full px-12 pt-20">
          <div className="flex flex-col justify-center flex-grow">
            <div>
              <IntroductionSectionContent />
            </div>
          </div>

          <SectionScrollBar upperFlexGrow={0} lowerFlexGrow={0} lowerClassNames="h-16" />
        </div>
      </DesktopQuery>
    </>
  );
});

IntroductionSection.displayName = 'IntroductionSection';

export default IntroductionSection;
