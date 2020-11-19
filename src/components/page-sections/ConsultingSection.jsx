import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import HubblrMainContentSection from '../page-section-bases/sections/HubblrMainContentSection';
import ConsultingIllustrationImageBackground from '../image-components/ConsultingIllustrationImageBackground';
import IndexGradientBorderButtonLongArrow from '../buttons/gradient-border-buttons/IndexGradientBorderButtonLongArrow';
import { MobileAndTabletQuery, DesktopQuery } from '../../util/helpers';
import ConsultingSectionContent from './ConsultingSectionContent';
import SectionScrollBar from '../section-scroll-bar/SectionScrollBar';
import ArrowImageDownDouble from '../image-components/ArrowImageDownDouble';

const ConsultingSection = React.forwardRef(({ animationAreaHeight }, ref) => {
  return (
    <HubblrMainContentSection
      ref={ref}
      sectionScrollBar={
        <SectionScrollBar
          upperFlexGrow={1}
          lowerClassNames="h-16"
          arrowImage={<ArrowImageDownDouble />}
        />
      }
      fadeInImage={<ConsultingIllustrationImageBackground />}
      contentTitle="Solution Assessment"
      targetCustomers={['Business Angels', 'Mittelständische Unternehmen', 'Startups']}
      animationAreaHeight={animationAreaHeight}
    >
      <MobileAndTabletQuery>
        <ConsultingSectionContent>
          <Link to="/contact">
            <IndexGradientBorderButtonLongArrow
              theme="light"
              widthClass="w-full"
              addedFlexClasses="justify-center"
            >
              Jetzt kontaktieren
            </IndexGradientBorderButtonLongArrow>
          </Link>
        </ConsultingSectionContent>
      </MobileAndTabletQuery>
      <DesktopQuery>
        <ConsultingSectionContent />
        <Link to="/contact">
          <IndexGradientBorderButtonLongArrow theme="light">
            Jetzt kontaktieren
          </IndexGradientBorderButtonLongArrow>
        </Link>
      </DesktopQuery>
    </HubblrMainContentSection>
  );
});

ConsultingSection.propTypes = {
  animationAreaHeight: PropTypes.number.isRequired, // in px
};

export default ConsultingSection;
