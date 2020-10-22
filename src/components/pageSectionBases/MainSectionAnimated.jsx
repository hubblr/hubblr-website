import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import ScrollAnimatedElement from '../animatedElements/ScrollAnimatedElement';
import FullSizeSection from './FullSizeSection';
import useScrollPercentages from '../hooks/scroll/useScrollPercentages';
import { arrayOfLength2 } from '../../util/propTypes';

function MainSectionAnimated({ height, scrollBar, transformElements }) {
  // ref to get client rect of full section
  const fullSectionRef = useRef();

  // hook for section y-scroll breakpoints (skip percentage end)
  const [sectionScrollPercentageStart, , sectionScrollStep] = useScrollPercentages(fullSectionRef);

  // helper function to infer page scroll breakpoints for the current animation
  const calcAnimationScrollBreakpoints = (transformInfo) => {
    // start and end here refer to the animation's breakpoints
    const { scrollPercentageStart, scrollPercentageEnd } = transformInfo;
    const transformStart = sectionScrollPercentageStart + sectionScrollStep * scrollPercentageStart;
    const transformEnd = sectionScrollPercentageStart + sectionScrollStep * scrollPercentageEnd;
    return {
      start: transformStart,
      end: transformEnd,
    };
  };

  // bind motionValues to associated style properties
  const fullTransformInfos = [];
  transformElements.forEach((elementInfo) => {
    const fullElementInfo = {
      wrappedElement: elementInfo.wrappedElement,
      motionWrapperStyling: elementInfo.motionWrapperStyling,
    };
    // create and append motion transforms
    fullElementInfo.transforms = [];
    if (!elementInfo.transforms || !Array.isArray(elementInfo.transforms)) {
      return;
    }
    elementInfo.transforms.forEach((transformInfo) => {
      const relevantTransformInfo = {
        cssProp: transformInfo.cssProp,
        range: transformInfo.range,
      };
      // use helper function to create motionValues
      relevantTransformInfo.scrollPercentageBreakpoints = calcAnimationScrollBreakpoints(
        transformInfo
      );
      fullElementInfo.transforms.push(relevantTransformInfo);
    });
    fullTransformInfos.push(fullElementInfo);
  });

  return (
    <div
      ref={fullSectionRef}
      style={{
        height,
      }}
    >
      <div className="sticky top-0">
        <FullSizeSection>
          <div className="relative h-full">
            {fullTransformInfos.map(({ wrappedElement, motionWrapperStyling, transforms }) => {
              return (
                <ScrollAnimatedElement
                  // difficult to create unique string from object properties, so use this
                  key={uuidv4()}
                  wrappedElement={wrappedElement}
                  wrapperStyleClasses={`${
                    motionWrapperStyling.positionClass ? motionWrapperStyling.positionClass : ''
                  } ${
                    motionWrapperStyling.dimensionClasses
                      ? motionWrapperStyling.dimensionClasses
                      : ''
                  }`}
                  transforms={transforms}
                />
              );
            })}
            <div className="absolute h-full inset-0">{scrollBar}</div>
          </div>
        </FullSizeSection>
      </div>
    </div>
  );
}

MainSectionAnimated.defaultProps = {
  scrollBar: null,
};

MainSectionAnimated.propTypes = {
  height: PropTypes.string.isRequired,
  scrollBar: PropTypes.element,
  transformElements: PropTypes.arrayOf(
    PropTypes.shape({
      wrappedElement: PropTypes.element,
      motionWrapperStyling: PropTypes.shape({
        positionClass: PropTypes.string,
        dimensionClasses: PropTypes.string,
      }),
      transforms: PropTypes.arrayOf(
        PropTypes.shape({
          cssProp: PropTypes.string,
          range: arrayOfLength2,
          scrollPercentageStart: PropTypes.number,
          scrollPercentageEnd: PropTypes.number,
        })
      ),
    })
  ).isRequired,
};

export default MainSectionAnimated;
