import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
// import AnimatedSectionMobile from './AnimatedSectionMobile';
import { DesktopQuery, MobileAndTabletQuery } from '../../util/helpers';
import AnimatedSection from './AnimatedSection';
import AnimatedSectionContentDesktop from './AnimatedSectionContentDesktop';
import AnimatedSectionContentMobile from './AnimatedSectionContentMobile';

const HubblrMainContentSection = forwardRef(
  (
    { sectionType, fadeInImage, contentTitle, targetCustomers, mainContentDescription, navigation },
    fullSectionRef
  ) => {
    return (
      <div className="px-2 md:px-12">
        <AnimatedSection ref={fullSectionRef} sectionType={sectionType}>
          <DesktopQuery>
            <AnimatedSectionContentDesktop
              fadeInImage={fadeInImage}
              contentTitle={contentTitle}
              targetCustomers={targetCustomers}
              mainContentDescription={mainContentDescription}
              navigation={navigation}
            />
          </DesktopQuery>
          <MobileAndTabletQuery>
            <AnimatedSectionContentMobile
              fadeInImage={fadeInImage}
              contentTitle={contentTitle}
              targetCustomers={targetCustomers}
              mainContentDescription={mainContentDescription}
              navigation={navigation}
            />
          </MobileAndTabletQuery>
        </AnimatedSection>
      </div>
    );
  }
);

HubblrMainContentSection.propTypes = {
  sectionType: PropTypes.oneOf(['middle', 'last']),
  fadeInImage: PropTypes.node.isRequired,
  contentTitle: PropTypes.string.isRequired,
  targetCustomers: PropTypes.arrayOf(PropTypes.string),
  mainContentDescription: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    tabledConcepts: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string,
      })
    ),
  }).isRequired,
  navigation: PropTypes.string.isRequired,
};

HubblrMainContentSection.defaultProps = {
  sectionType: 'middle',
  targetCustomers: [],
};

export default HubblrMainContentSection;
