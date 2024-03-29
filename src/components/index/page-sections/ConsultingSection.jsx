import React from 'react';
import PropTypes from 'prop-types';
import { LocalizedLink as Link } from 'gatsby-theme-i18n';
import { FormattedMessage } from 'react-intl';
import HubblrMainContentSection from '../page-section-bases/sections/HubblrMainContentSection';
import ConsultingIllustrationImageBackground from '../../image-components/ConsultingIllustrationImageBackground';
import GradientButton from '../../buttons/gradient-border-buttons/GradientButton';
import { MobileAndTabletQuery, DesktopQuery } from '../../../util/helpers';
import ConsultingSectionContent from './ConsultingSectionContent';
import SectionScrollBar from '../section-scroll-bar/SectionScrollBar';
import ArrowImageDownDouble from '../../image-components/ArrowImageDownDouble';

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
      targetCustomers={[
        <FormattedMessage id="index.consulting.designed-for.0" />,
        <FormattedMessage id="index.consulting.designed-for.1" />,
        <FormattedMessage id="index.consulting.designed-for.2" />,
      ]}
      animationAreaHeight={animationAreaHeight}
    >
      <MobileAndTabletQuery>
        <ConsultingSectionContent>
          <Link to="/contact">
            <GradientButton className="button-theme-light">
              <FormattedMessage id="generic.contact" />
            </GradientButton>
          </Link>
        </ConsultingSectionContent>
      </MobileAndTabletQuery>
      <DesktopQuery>
        <ConsultingSectionContent />
        <Link to="/contact">
          <GradientButton className="button-theme-light">
            <FormattedMessage id="generic.contact" />
          </GradientButton>
        </Link>
      </DesktopQuery>
    </HubblrMainContentSection>
  );
});

ConsultingSection.propTypes = {
  animationAreaHeight: PropTypes.number.isRequired, // in px
};

export default ConsultingSection;
