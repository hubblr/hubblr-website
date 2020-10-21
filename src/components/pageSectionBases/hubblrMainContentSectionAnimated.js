import React from "react";
import PropTypes from "prop-types";
import MainSectionAnimated from "./mainSectionAnimated";
import SectionHeading from "../pageMainContent/sectionHeading";
import MainContentCard from "../pageMainContent/mainContentCard";

function HubblrMainContentSectionAnimated(props) {
  return (
    <MainSectionAnimated
      height="250vh"
      scrollBar={props.scrollBar}
      transformElements={[
        {
          wrappedElement: props.fadeInImage,
          positionClass: "top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",
          transforms: [
            {
              cssProp: "opacity",
              range: [0, 1],
              scrollPercentageStart: 20,
              scrollPercentageEnd: 40,
            }
          ]
        },
        {
          wrappedElement: <SectionHeading
            heading={props.contentTitle}
          />,
          positionClass: "top-1/2 left-1/2",
          transforms: [
            {
              cssProp: "opacity",
              range: [0, 1],
              scrollPercentageStart: 40,
              scrollPercentageEnd: 70,
            },
            {
              cssProp: "top",
              range: ['50%', '20%'],
              scrollPercentageStart: 40,
              scrollPercentageEnd: 70,
            },
            {
              cssProp: "scale",
              range: [1, 0.5],
              scrollPercentageStart: 40,
              scrollPercentageEnd: 70,
            },
          ]
        },
        {
          wrappedElement: <MainContentCard
            conceptCardDescription={{
              title: props.mainContentDescription.title,
              description: props.mainContentDescription.description,
              tabledConcepts: props.mainContentDescription.tabledConcepts,
            }}
            navigationButtonInfo={{
              text: props.mainContentDescription.navButtonTitle,
            }}
          />,
          positionClass: "top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",
          transforms: [
            {
              cssProp: "opacity",
              range: [0, 1],
              scrollPercentageStart: 60,
              scrollPercentageEnd: 70,
            }
          ]
        }
      ]}
    />
  )
}

HubblrMainContentSectionAnimated.propTypes = {
  scrollBar: PropTypes.node,
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

export default HubblrMainContentSectionAnimated;
