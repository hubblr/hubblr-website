import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import ScrollAnimatedElement from '../animatedElements/ScrollAnimatedElement.jsx';
import FullSizeSection from './FullSizeSection.jsx';
import useScrollPercentages from '../hooks/scroll/useScrollPercentages';
import { arrayOfLength2 } from '../../util/propTypes';
import { v4 as uuidv4 } from 'uuid';

function MainSectionAnimated({ height, scrollBar, transformElements }) {
  //ref to get client rect of full section
  const fullSectionRef = useRef();

  //hook for section y-scroll breakpoints (skip percentage end)
  const [sectionScrollPercentageStart, , sectionScrollStep] = useScrollPercentages(fullSectionRef);

  //helper function to infer page scroll breakpoints for the current animation
  const calcAnimationScrollBreakpoints = (transformInfo) => {
    //start and end here refer to the animation's breakpoints
    const { scrollPercentageStart, scrollPercentageEnd } = transformInfo;
    const transformStart = sectionScrollPercentageStart + sectionScrollStep * scrollPercentageStart;
    const transformEnd = sectionScrollPercentageStart + sectionScrollStep * scrollPercentageEnd;
    return {
      start: transformStart,
      end: transformEnd,
    };
  };

  //bind motionValues to associated style properties
  transformElements.forEach((elementInfo) => {
    //create and append motion transforms
    elementInfo.styleProp = {};
    if (!elementInfo.transforms || !Array.isArray(elementInfo.transforms)) {
      return;
    }
    elementInfo.transforms.forEach((transformInfo) => {
      //use helper function to create motionValues
      transformInfo.scrollPercentageBreakpoints = calcAnimationScrollBreakpoints(transformInfo);
    });
  });

  return (
    <div
      ref={fullSectionRef}
      style={{
        height: height,
      }}
    >
      <div className="sticky top-0">
        <FullSizeSection>
          <div className="relative h-full">
            {transformElements.map(({ wrappedElement, positionClass, transforms }) => {
              return (
                <ScrollAnimatedElement
                  //difficult to create unique string from object properties, so use this
                  key={uuidv4()}
                  wrappedElement={wrappedElement}
                  positionClass={positionClass}
                  transforms={transforms}
                />
              );
            })}
            <div className={'absolute h-full inset-0'}>{scrollBar}</div>
          </div>
        </FullSizeSection>
      </div>
    </div>
  );
}

MainSectionAnimated.propTypes = {
  height: PropTypes.string,
  scrollBar: PropTypes.node,
  transformElements: PropTypes.arrayOf(
    PropTypes.shape({
      wrappedElement: PropTypes.node,
      positionClass: PropTypes.string,
      transforms: PropTypes.arrayOf(
        PropTypes.shape({
          cssProp: PropTypes.string,
          range: arrayOfLength2,
          scrollPercentageStart: PropTypes.number,
          scrollPercentageEnd: PropTypes.number,
        })
      ),
    })
  ),
};

export default MainSectionAnimated;
