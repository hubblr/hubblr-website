import React, {useLayoutEffect, useState} from "react";
import PropTypes from "prop-types";
import FullSizeSection from "./fullSizeSection";
import SectionScrollBar from "./sectionScrollBar";
import {motion, useTransform, useViewportScroll} from "framer-motion";

function templateTransform({x, y, scale}) {
  x = x ? x : '-50%';
  y = y ? y: '-50%';
  scale = scale ? scale : 1;
  return `translateX(${x}) translateY(${y}) scale(${scale})`;
}

const MainSection = (props) => {
  //ref to get client rect of full section
  const fullSectionRef = React.createRef();

  //control animations by scroll y-percentage of the section (NOT the full page!)
  const [sectionScrollPercentageStart, setSectionScrollPercentageStart] =
    useState(0);
  const [sectionScrollStep, setSectionScrollStep] = useState(1);

  //set section y-scroll percentages
  useLayoutEffect(() => {
    console.log('USE LAYOUT EFFECT!')

    //get window information
    const fullSectionRect = fullSectionRef.current.getBoundingClientRect();
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const offsetStart = fullSectionRect.top + scrollY;
    const offsetEnd = offsetStart + fullSectionRect.height;

    //calculate y-percentage start and end points
    const clientHeight = document.body.clientHeight;
    const fullSectionScrollStart = offsetStart / clientHeight;
    const fullSectionScrollEnd = offsetEnd / clientHeight;

    console.log('SCROLL START:', fullSectionScrollStart)

    const fullSectionScrollStep =
      (fullSectionScrollEnd - fullSectionScrollStart)/100;

    //update state
    setSectionScrollPercentageStart(fullSectionScrollStart);
    setSectionScrollStep(fullSectionScrollStep);
  })

  //translate given transform info into motion transforms
  const {scrollYProgress} = useViewportScroll();

  const createMotionTransform = (transformInfo) => {
    //find page scroll percentages for the specific transform
    const {range, scrollPercentageStart, scrollPercentageEnd} =
      transformInfo;
    const transformStart = sectionScrollPercentageStart +
      sectionScrollStep * scrollPercentageStart;
    const transformEnd = sectionScrollPercentageStart +
      sectionScrollStep * scrollPercentageEnd;
    return useTransform(scrollYProgress,
      [transformStart, transformEnd], range);
  }

  props.transformElements.forEach(elementInfo => {
    //create and append motion transforms
    elementInfo.styleProp = {};
    if (!elementInfo.transforms || !Array.isArray(elementInfo.transforms)) {
      return;
    }
    elementInfo.transforms.forEach(transformInfo => {
      elementInfo.styleProp[transformInfo.cssProp] =
        createMotionTransform(transformInfo);
    })
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
                styleProp
              } = elementInfo;

              return (
                <motion.div
                  key={i}
                  transformTemplate={templateTransform}
                  className={`absolute transform ${positionClass}`}
                  style={styleProp}
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
  height: PropTypes.string,
  transformElements: PropTypes.array,
}

export default MainSection;