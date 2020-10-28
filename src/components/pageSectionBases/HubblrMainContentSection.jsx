import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import AnimatedSectionDesktop from './AnimatedSectionDesktop';
import { MobileAndTabletQuery, DesktopQuery } from '../../util/helpers';

const HubblrMainContentSection = forwardRef(
  ({ sectionType, fadeInImage, contentTitle, mainContentDescription, navigation }, ref) => {
    return (
      <>
        <DesktopQuery>
          <AnimatedSectionDesktop
            sectionType={sectionType}
            ref={ref}
            fadeInImage={fadeInImage}
            contentTitle={contentTitle}
            mainContentDescription={mainContentDescription}
            navigation={navigation}
          />
        </DesktopQuery>
        <MobileAndTabletQuery>
          <div ref={ref}>On Mobile? Too bad :(</div>
        </MobileAndTabletQuery>
      </>
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
