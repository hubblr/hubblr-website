import React from 'react';
import PropTypes from 'prop-types';
import { LocalizedLink as Link } from 'gatsby-theme-i18n';
import { FormattedMessage } from 'react-intl';
import HubblrMainContentSection from '../page-section-bases/sections/HubblrMainContentSection';
import LightningImageBackground from '../../image-components/LightningImageBackground';
import GradientButtonArrow from '../../buttons/gradient-border-buttons/GradientButtonArrow';
import { MobileAndTabletQuery, DesktopQuery } from '../../../util/helpers';
import SoftwareLaboratorySectionContent from './SoftwareLaboratorySectionContent';
import SectionScrollBar from '../section-scroll-bar/SectionScrollBar';
import ArrowImageDownDouble from '../../image-components/ArrowImageDownDouble';

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
      targetCustomers={[
        <FormattedMessage id="index.software-laboratory.designed-for.0" />,
        <FormattedMessage id="index.software-laboratory.designed-for.1" />,
        <FormattedMessage id="index.software-laboratory.designed-for.2" />,
      ]}
      animationAreaHeight={animationAreaHeight}
    >
      <MobileAndTabletQuery>
        <SoftwareLaboratorySectionContent>
          <Link to="/contact">
            <GradientButtonArrow className="light w-full" innerOverlayDivClassName="justify-center">
              <FormattedMessage id="generic.contact" />
            </GradientButtonArrow>
          </Link>
        </SoftwareLaboratorySectionContent>
      </MobileAndTabletQuery>
      <DesktopQuery>
        <SoftwareLaboratorySectionContent />
        <Link to="/contact">
          <GradientButtonArrow className="light">
            <FormattedMessage id="generic.contact" />
          </GradientButtonArrow>
        </Link>
      </DesktopQuery>
    </HubblrMainContentSection>
  );
});

SoftwareLaboratorySection.propTypes = {
  animationAreaHeight: PropTypes.number.isRequired, // in px
};

export default SoftwareLaboratorySection;
