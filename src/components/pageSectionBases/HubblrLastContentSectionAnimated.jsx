import React from 'react';
import PropTypes from 'prop-types';
import HubblrMainContentSectionAnimated from './HubblrMainContentSectionAnimated';
import SectionScrollBar from '../sectionScrollBar/SectionScrollBar';

function HubblrLastContentSectionAnimated({ fadeInImage, contentTitle, mainContentDescription }) {
  return (
    <HubblrMainContentSectionAnimated
      scrollBar={<SectionScrollBar upperFlexGrow={1} lowerFlexGrow={0} />}
      fadeInImage={fadeInImage}
      contentTitle={contentTitle}
      mainContentDescription={mainContentDescription}
    />
  );
}

HubblrLastContentSectionAnimated.defaultProps = {
  fadeInImage: null,
  contentTitle: '',
  mainContentDescription: null,
};

HubblrLastContentSectionAnimated.propTypes = {
  fadeInImage: PropTypes.element,
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

export default HubblrLastContentSectionAnimated;
