import React, { forwardRef, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import PageContext from '../../../context/PageContext';
import AnimationAreaContext from '../../../context/AnimationAreaContext';
import useYPositions from '../../hooks/scroll/useYPositions';
import useWindowResizeInfo from '../../hooks/window/useWindowResizeInfo';
import { TabletBreakpoint } from '../../../util/helpers';
import useFullScrollSectionHeight from '../../hooks/scroll/useFullScrollSectionHeight';
import SectionScrollBar from '../../section-scroll-bar/SectionScrollBar';

const AnimatedSection = forwardRef(
  ({ children, sectionType, animationAreaHeight }, fullSectionRef) => {
    // get navbar size from context to set padding-top over navbar
    const { navBarHeight } = useContext(PageContext);
    // check width of window for breakpoint
    const { width: windowWidth } = useWindowResizeInfo();
    const isLg = windowWidth > TabletBreakpoint;

    // values to pass in Provider
    // percentage step through animation area
    const animationAreaStep = animationAreaHeight / 100;
    // start of full section & consequently also animation area
    const [animationAreaStartY] = useYPositions(fullSectionRef);
    // height of full section based on content and desired animation area height
    const contentContainerRef = useRef();
    const fullSectionHeight = useFullScrollSectionHeight(animationAreaHeight, [
      contentContainerRef,
    ]);

    return (
      <AnimationAreaContext.Provider
        value={{
          animationAreaStartY,
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
            <div className="absolute container mx-auto h-full inset-0">
              <SectionScrollBar sectionType={sectionType} />
            </div>
          )}
          <div
            ref={contentContainerRef}
            className="min-h-screen sticky top-0 w-full overflow-hidden flex"
            style={{
              paddingTop: `${navBarHeight}px`,
            }}
          >
            {children}
          </div>
        </div>
      </AnimationAreaContext.Provider>
    );
  }
);

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  sectionType: PropTypes.oneOf(['middle', 'last']),
  // if custom animation heights are desired for a specific section
  animationAreaHeight: PropTypes.number.isRequired, // in px
};

AnimatedSection.defaultProps = {
  sectionType: 'middle',
};

export default AnimatedSection;
