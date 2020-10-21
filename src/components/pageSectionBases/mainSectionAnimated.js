import React from "react";
import PropTypes from "prop-types";
import ScrollAnimatedElement from "../animatedElements/scrollAnimatedElement";
import FullSizeSection from "./fullSizeSection";
import useScrollPercentages from "../hooks/scroll/useScrollPercentages";

function MainSectionAnimated(props) {
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
              {props.scrollBar}
            </div>
          </div>
        </FullSizeSection>
      </div>
    </div>
  )
}

MainSectionAnimated.propTypes = {
  height: PropTypes.string,
  scrollBar: PropTypes.node,
  transformElements: PropTypes.array,
}

export default MainSectionAnimated;