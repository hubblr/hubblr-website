import React, { forwardRef, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import PageContext from '../../../../context/PageContext';
import AnimationAreaContext from '../../../../context/AnimationAreaContext';
import useWindowResizeInfo from '../../../hooks/window/useWindowResizeInfo';
import { TabletBreakpoint } from '../../../../util/helpers';
import useAnimationBreakpoints from '../../../hooks/animation/useAnimationBreakpoints';
import useClientHeight from '../../../hooks/dimensions/useClientHeight';

const AnimatedSection = forwardRef(
  ({ children, sectionScrollBar, animationAreaHeight }, fullSectionRef) => {
    // get navbar size from context to set padding-top over navbar
    const { navBarHeight } = useContext(PageContext);

    // check width of window for breakpoint
    const { width: windowWidth } = useWindowResizeInfo();
    const isLg = windowWidth > TabletBreakpoint;

    // calculate animation breakpoints + width to add to outer section
    const { animationStartY, addedSectionHeight, overlapHeight } = useAnimationBreakpoints(
      fullSectionRef,
      animationAreaHeight
    );
    const animationAreaStep = animationAreaHeight / 100;

    // height of full section based on content and animation area height
    const contentContainerRef = useRef();
    const contentHeight = useClientHeight(contentContainerRef);
    const fullSectionHeight = contentHeight + addedSectionHeight;

    return (
      <AnimationAreaContext.Provider
        value={{
          animationAreaStartY: animationStartY,
          animationAreaHeight,
          animationAreaStep,
          contentContainerRef,
        }}
      >
        <div
          ref={fullSectionRef}
          className="relative"
          style={{
            height: fullSectionHeight,
          }}
        >
          {isLg && (
            <div className="absolute container mx-auto h-full inset-0">{sectionScrollBar}</div>
          )}
          <div
            className="sticky w-full overflow-hidden"
            style={{ top: `-${overlapHeight}px`, paddingTop: `${overlapHeight}px` }}
          >
            <div
              ref={contentContainerRef}
              className="relative min-h-screen w-full flex"
              style={{
                paddingTop: `${navBarHeight}px`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </AnimationAreaContext.Provider>
    );
  }
);

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  sectionScrollBar: PropTypes.element.isRequired,
  // if custom animation heights are desired for a specific section
  animationAreaHeight: PropTypes.number.isRequired, // in px
};

export default AnimatedSection;
