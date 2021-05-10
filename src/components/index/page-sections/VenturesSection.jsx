import React from 'react';
import PropTypes from 'prop-types';
import { LocalizedLink as Link } from 'gatsby-theme-i18n';
import { FormattedMessage } from 'react-intl';
import HubblrMainContentSection from '../page-section-bases/sections/HubblrMainContentSection';
import VenturesArrowImageBackground from '../../image-components/VenturesArrowImageBackground';
import IndexGradientBorderButtonBasic from '../../buttons/gradient-border-buttons/IndexGradientBorderButtonBasic';
import { MobileAndTabletQuery, DesktopQuery } from '../../../util/helpers';
import VenturesSectionContent from './VenturesSectionContent';
import SectionScrollBar from '../section-scroll-bar/SectionScrollBar';
import ArrowImageDoubleUp from '../../image-components/ArrowImageDoubleUp';

const VenturesSection = React.forwardRef(({ animationAreaHeight }, ref) => {
  return (
    <HubblrMainContentSection
      ref={ref}
      sectionScrollBar={<SectionScrollBar upperFlexGrow={1} arrowImage={<ArrowImageDoubleUp />} />}
      fadeInImage={<VenturesArrowImageBackground />}
      contentTitle="Digital Ventures"
      targetCustomers={[<FormattedMessage id="index.ventures.designed-for.0" />]}
      animationAreaHeight={animationAreaHeight}
    >
      <MobileAndTabletQuery>
        <VenturesSectionContent>
          <Link to="/contact">
            <IndexGradientBorderButtonBasic
              theme="light"
              widthClass="w-full"
              innerOverlayDivClassName="justify-center"
            >
              <FormattedMessage id="generic.contact" />
            </IndexGradientBorderButtonBasic>
          </Link>
        </VenturesSectionContent>
      </MobileAndTabletQuery>
      <DesktopQuery>
        <VenturesSectionContent />
        <Link to="/contact">
          <IndexGradientBorderButtonBasic theme="light">
            <FormattedMessage id="generic.contact" />
          </IndexGradientBorderButtonBasic>
        </Link>
      </DesktopQuery>
    </HubblrMainContentSection>
  );
});

VenturesSection.propTypes = {
  animationAreaHeight: PropTypes.number.isRequired, // in px
};

export default VenturesSection;
