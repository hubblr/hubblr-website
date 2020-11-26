import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { DesktopQuery, MobileAndTabletQuery } from '../../../util/helpers';
import AnimatedSection from './AnimatedSection';
import AnimatedSectionContentDesktop from '../section-content/AnimatedSectionContentDesktop';
import AnimatedSectionContentMobile from '../section-content/AnimatedSectionContentMobile';

const HubblrMainContentSection = forwardRef(
  (
    { children, sectionScrollBar, fadeInImage, contentTitle, targetCustomers, animationAreaHeight },
    fullSectionRef
  ) => {
    return (
      <AnimatedSection
        ref={fullSectionRef}
        sectionScrollBar={sectionScrollBar}
        animationAreaHeight={animationAreaHeight}
      >
        <DesktopQuery>
          <AnimatedSectionContentDesktop
            fadeInImage={fadeInImage}
            contentTitle={contentTitle}
            targetCustomers={targetCustomers}
          >
            {children}
          </AnimatedSectionContentDesktop>
        </DesktopQuery>
        <MobileAndTabletQuery>
          <AnimatedSectionContentMobile
            fadeInImage={fadeInImage}
            contentTitle={contentTitle}
            targetCustomers={targetCustomers}
          >
            {children}
          </AnimatedSectionContentMobile>
        </MobileAndTabletQuery>
      </AnimatedSection>
    );
  }
);

HubblrMainContentSection.propTypes = {
  children: PropTypes.node.isRequired,
  sectionScrollBar: PropTypes.element.isRequired,
  fadeInImage: PropTypes.node.isRequired,
  contentTitle: PropTypes.string.isRequired,
  targetCustomers: PropTypes.arrayOf(PropTypes.node),
  animationAreaHeight: PropTypes.number.isRequired, // in px
};

HubblrMainContentSection.defaultProps = {
  targetCustomers: [],
};

export default HubblrMainContentSection;
