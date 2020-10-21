import React from "react";
import PropTypes from "prop-types";
import HubblrMainContentSectionAnimated from "./hubblrMainContentSectionAnimated";
import SectionScrollBar from "../sectionScrollBar/sectionScrollBar";

function HubblrMiddleContentSectionAnimated(props) {
  return (
    <HubblrMainContentSectionAnimated
      scrollBar={<SectionScrollBar
        upperFlexGrow={4}
        lowerFlexGrow={1}
      />}
      fadeInImage={props.fadeInImage}
      contentTitle={props.contentTitle}
      mainContentDescription={props.mainContentDescription}
    />
  )
}

HubblrMiddleContentSectionAnimated.propTypes = {
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

export default HubblrMiddleContentSectionAnimated;