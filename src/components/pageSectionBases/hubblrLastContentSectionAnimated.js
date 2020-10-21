import React from "react";
import PropTypes from "prop-types";
import HubblrMainContentSectionAnimated from "./hubblrMainContentSectionAnimated";
import SectionScrollBar from "../sectionScrollBar/sectionScrollBar";

function HubblrLastContentSectionAnimated(props) {
  return (
    <HubblrMainContentSectionAnimated
      scrollBar={<SectionScrollBar
        upperFlexGrow={1}
        lowerFlexGrow={0}
      />}
      fadeInImage={props.fadeInImage}
      contentTitle={props.contentTitle}
      mainContentDescription={props.mainContentDescription}
    />
  )
}

HubblrLastContentSectionAnimated.propTypes = {
  fadeInImage: PropTypes.node,
  contentTitle: PropTypes.string,
  mainContentDescription: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    tabledConcepts: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    })),
    navButtonTitle: PropTypes.string,
  }),
}

export default HubblrLastContentSectionAnimated;
