import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import AnimatedSectionDesktop from './AnimatedSectionDesktop';
import AnimatedSectionMobile from './AnimatedSectionMobile';
import { MobileAndTabletQuery, DesktopQuery } from '../../util/helpers';

const HubblrMainContentSection = forwardRef(
  (
    { sectionType, fadeInImage, contentTitle, targetCustomers, mainContentDescription, navigation },
    ref
  ) => {
    return (
      <>
        <DesktopQuery>
          <AnimatedSectionDesktop
            sectionType={sectionType}
            ref={ref}
            fadeInImage={fadeInImage}
            contentTitle={contentTitle}
            targetCustomers={targetCustomers}
            mainContentDescription={mainContentDescription}
            navigation={navigation}
          />
        </DesktopQuery>
        <MobileAndTabletQuery>
          <AnimatedSectionMobile
            sectionType={sectionType}
            ref={ref}
            navigation={navigation}
            fadeInImage={fadeInImage}
            mainContentDescription={mainContentDescription}
            contentTitle={contentTitle}
            targetCustomers={targetCustomers}
          />
        </MobileAndTabletQuery>
      </>
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
