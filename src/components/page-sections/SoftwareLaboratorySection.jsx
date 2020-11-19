import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import HubblrMainContentSection from '../page-section-bases/sections/HubblrMainContentSection';
import LightningImageBackground from '../image-components/LightningImageBackground';
import IndexGradientBorderButtonLongArrow from '../buttons/gradient-border-buttons/IndexGradientBorderButtonLongArrow';
import { MobileAndTabletQuery, DesktopQuery } from '../../util/helpers';
import SoftwareLaboratorySectionContent from './SoftwareLaboratorySectionContent';
import SectionScrollBar from '../section-scroll-bar/SectionScrollBar';
import ArrowImageDownDouble from '../image-components/ArrowImageDownDouble';

const SoftwareLaboratorySection = React.forwardRef(({ animationAreaHeight }, ref) => {
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
      fadeInImage={<LightningImageBackground />}
      contentTitle="Software Laboratory"
      targetCustomers={['Mittelständische Unternehmen', 'Großunternehmen', 'Post-Seed Startups']}
      animationAreaHeight={animationAreaHeight}
    >
      <MobileAndTabletQuery>
        <SoftwareLaboratorySectionContent>
          <Link to="/contact">
            <IndexGradientBorderButtonLongArrow
              theme="light"
              widthClass="w-full"
              addedFlexClasses="justify-center"
            >
              Jetzt kontaktieren
            </IndexGradientBorderButtonLongArrow>
          </Link>
        </SoftwareLaboratorySectionContent>
      </MobileAndTabletQuery>
      <DesktopQuery>
        <SoftwareLaboratorySectionContent />
        <Link to="/contact">
          <IndexGradientBorderButtonLongArrow theme="light">
            Jetzt kontaktieren
          </IndexGradientBorderButtonLongArrow>
        </Link>
      </DesktopQuery>
    </HubblrMainContentSection>
  );
});

SoftwareLaboratorySection.propTypes = {
  animationAreaHeight: PropTypes.number.isRequired, // in px
};

export default SoftwareLaboratorySection;
