import React, {useLayoutEffect, useState} from "react";
import PropTypes from "prop-types";
import FullSizeSection from "./fullSizeSection";
import SectionScrollBar from "./sectionScrollBar";
import {motion, useViewportScroll, useTransform} from "framer-motion";

const MainSection = (props) => {
  //ref to get client rect of full section
  const fullSectionRef = React.createRef();

  //control animations by scroll y-percentage of the section (NOT the full page!)
  const [sectionScrollPercentageStart, setSectionScrollPercentageStart] =
    useState(0);
  const [sectionScrollStep, setSectionScrollStep] = useState(1);

  //set section y-scroll percentages
  useLayoutEffect(() => {
    //get window information
    const fullSectionRect = fullSectionRef.current.getBoundingClientRect();
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const offsetStart = fullSectionRect.top + scrollY;
    const offsetEnd = offsetStart + fullSectionRect.height;

    //calculate y-percentage start and end points
    const clientHeight = document.body.clientHeight;
    const fullSectionScrollStart = offsetStart / clientHeight;
    const fullSectionScrollEnd = offsetEnd / clientHeight;
    const fullSectionScrollStep =
      (fullSectionScrollEnd - fullSectionScrollStart)/100;

    //update state
    setSectionScrollPercentageStart(fullSectionScrollStart);
    setSectionScrollStep(fullSectionScrollStep);
  })

  //translate given transform info into motion transforms
  const {scrollYProgress} = useViewportScroll();
  props.transformElements.forEach(elementInfo => {
    //find page scroll percentages for the specific transform
    const {range, scrollPercentageStart, scrollPercentageEnd} =
      elementInfo.transform;
    const transformStart = sectionScrollPercentageStart +
      sectionScrollStep * scrollPercentageStart;
    const transformEnd = sectionScrollPercentageStart +
      sectionScrollStep * scrollPercentageEnd;
    //create and append motion transform
    elementInfo.motionTransform = useTransform(scrollYProgress,
      [transformStart, transformEnd], range);
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
              const {element,
                positionClass,
                transform: {cssProp},
                motionTransform
              } = elementInfo;
              return (
                <motion.div
                  key={i}
                  className={`absolute transform ${positionClass}`}
                  style={{
                    [cssProp]: motionTransform,
                  }}
                >
                  {element}
                </motion.div>
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
  children: PropTypes.node,
  height: PropTypes.string,
  transformElements: PropTypes.array,
}

export default MainSection;