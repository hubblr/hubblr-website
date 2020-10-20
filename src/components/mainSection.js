import React from "react";
import PropTypes from "prop-types";
import ScrollAnimatedElement from "./scrollAnimatedElement";
import FullSizeSection from "./fullSizeSection";
import SectionScrollBar from "./sectionScrollBar";
import useScrollPercentages from "./useScrollPercentages";

function MainSection(props) {
  //ref to get client rect of full section
  const fullSectionRef = React.createRef();

  //hook for section y-scroll breakpoints (skip percentage end)
  const [sectionScrollPercentageStart, ,sectionScrollStep] =
    useScrollPercentages(fullSectionRef);

  //helper function to infer page scroll breakpoints for the current animation
  const calcAnimationScrollBreakpoints = (transformInfo) => {
    //start and end here refer to the animation's breakpoints
    const {scrollPercentageStart, scrollPercentageEnd} =
      transformInfo;
    const transformStart = sectionScrollPercentageStart +
      sectionScrollStep * scrollPercentageStart;
    const transformEnd = sectionScrollPercentageStart +
      sectionScrollStep * scrollPercentageEnd;
    return {
      start: transformStart,
      end: transformEnd,
    }
  }

  //bind motionValues to associated style properties
  props.transformElements.forEach(elementInfo => {
    //create and append motion transforms
    elementInfo.styleProp = {};
    if (!elementInfo.transforms || !Array.isArray(elementInfo.transforms)) {
      return;
    }
    elementInfo.transforms.forEach(transformInfo => {
      //use helper function to create motionValues
      transformInfo.scrollPercentageBreakpoints =
        calcAnimationScrollBreakpoints(transformInfo);
    });
  });

  return (
    <div
      ref={fullSectionRef}
      style={{
        height: props.height,
      }}
    >
      <div
        className={`sticky top-0`}
      >
        <FullSizeSection>
          <div
            className={"relative h-full"}
          >
            {props.transformElements.map((elementInfo, i) => {
              return (
                <ScrollAnimatedElement
                  key={i}
                  wrappedElement={elementInfo.wrappedElement}
                  positionClass={elementInfo.positionClass}
                  transforms={elementInfo.transforms}
                />
              )
            })}

            <div
              className={"absolute h-full inset-0"}
            >
              <SectionScrollBar
                upperFlexGrow={4}
                lowerFlexGrow={1}
              />
            </div>
          </div>
        </FullSizeSection>
      </div>
    </div>
  )
}

MainSection.propTypes = {
  height: PropTypes.string,
  transformElements: PropTypes.array,
}

export default MainSection;