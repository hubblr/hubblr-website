import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { DesktopQuery, MobileAndTabletQuery } from '../../../util/helpers';
import AnimatedSection from './AnimatedSection';
import AnimatedSectionContentDesktop from '../section-content/AnimatedSectionContentDesktop';
import AnimatedSectionContentMobile from '../section-content/AnimatedSectionContentMobile';

const HubblrMainContentSection = forwardRef(
  ({ children, sectionType, fadeInImage, contentTitle, targetCustomers }, fullSectionRef) => {
    return (
      <AnimatedSection ref={fullSectionRef} sectionType={sectionType}>
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
  sectionType: PropTypes.oneOf(['middle', 'last']),
  fadeInImage: PropTypes.node.isRequired,
  contentTitle: PropTypes.string.isRequired,
  targetCustomers: PropTypes.arrayOf(PropTypes.string),
};

HubblrMainContentSection.defaultProps = {
  sectionType: 'middle',
  targetCustomers: [],
};

export default HubblrMainContentSection;
