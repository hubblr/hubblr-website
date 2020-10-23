import React from 'react';
import PropTypes from 'prop-types';
import HubblrMainContentSectionAnimated from './HubblrMainContentSectionAnimated';
import SectionScrollBar from '../sectionScrollBar/SectionScrollBar';

const HubblrMiddleContentSectionAnimated = React.forwardRef(
  ({ fadeInImage, contentTitle, mainContentDescription }, sectionRef) => {
    return (
      <HubblrMainContentSectionAnimated
        ref={sectionRef}
        scrollBar={<SectionScrollBar upperFlexGrow={4} lowerFlexGrow={1} />}
        fadeInImage={fadeInImage}
        contentTitle={contentTitle}
        mainContentDescription={mainContentDescription}
      />
    );
  }
);

HubblrMiddleContentSectionAnimated.defaultProps = {
  fadeInImage: null,
  contentTitle: '',
  mainContentDescription: null,
};

HubblrMiddleContentSectionAnimated.propTypes = {
  fadeInImage: PropTypes.node,
  contentTitle: PropTypes.string,
  mainContentDescription: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    tabledConcepts: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string,
      })
    ),
    navButtonTitle: PropTypes.string,
  }),
};

export default HubblrMiddleContentSectionAnimated;
