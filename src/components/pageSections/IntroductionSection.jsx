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
        <div className="w-full h-3/4 px-12 pt-20">
          <div className="flex flex-col h-full">
            <div ref={contentRef} className="mb-40">
              <IntroductionSectionContent />
            </div>

            <div className="flex-grow">
              <SectionScrollBar upperFlexGrow={0} lowerFlexGrow={1} />
            </div>
          </div>
        </div>
      </DesktopQuery>
    </>
  );
});

IntroductionSection.displayName = 'IntroductionSection';

export default IntroductionSection;
