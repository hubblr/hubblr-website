import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import HubblrMainContentSection from '../page-section-bases/sections/HubblrMainContentSection';
import VenturesArrowImageBackground from '../image-components/VenturesArrowImageBackground';
import IndexGradientBorderButtonLongArrow from '../gradient-border-buttons/IndexGradientBorderButtonLongArrow';
import { MobileAndTabletQuery, DesktopQuery } from '../../util/helpers';
import VenturesSectionContent from './VenturesSectionContent';

const VenturesSection = React.forwardRef(({ animationAreaHeight }, ref) => {
  return (
    <HubblrMainContentSection
      ref={ref}
      sectionType="last"
      fadeInImage={<VenturesArrowImageBackground />}
      contentTitle="Digital Ventures"
      targetCustomers={['Pre-Seed Startups']}
      animationAreaHeight={animationAreaHeight}
    >
      <MobileAndTabletQuery>
        <VenturesSectionContent>
          <Link to="/contact">
            <IndexGradientBorderButtonLongArrow
              theme="light"
              widthClass="w-full"
              addedFlexClasses="justify-center"
            >
              Jetzt kontaktieren
            </IndexGradientBorderButtonLongArrow>
          </Link>
        </VenturesSectionContent>
      </MobileAndTabletQuery>
      <DesktopQuery>
        <VenturesSectionContent />
        <Link to="/contact">
          <IndexGradientBorderButtonLongArrow theme="light">
            Jetzt kontaktieren
          </IndexGradientBorderButtonLongArrow>
        </Link>
      </DesktopQuery>
    </HubblrMainContentSection>
  );
});

VenturesSection.propTypes = {
  animationAreaHeight: PropTypes.number.isRequired, // in px
};

export default VenturesSection;
