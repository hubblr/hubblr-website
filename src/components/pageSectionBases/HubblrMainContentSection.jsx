import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import AnimatedSectionDesktop from './AnimatedSectionDesktop';

const HubblrMainContentSection = forwardRef(
  (
    { sectionType, fadeInImage, contentTitle, mainContentDescription, navigation },
    fullSectionRef
  ) => {
    return (
      <AnimatedSectionDesktop
        sectionType={sectionType}
        ref={fullSectionRef}
        fadeInImage={fadeInImage}
        contentTitle={contentTitle}
        mainContentDescription={mainContentDescription}
        navigation={navigation}
      />
    );
  }
);

HubblrMainContentSection.propTypes = {
  sectionType: PropTypes.oneOf(['middle', 'last']),
  fadeInImage: PropTypes.node.isRequired,
  contentTitle: PropTypes.string.isRequired,
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
};

export default HubblrMainContentSection;
