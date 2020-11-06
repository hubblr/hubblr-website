import React, { forwardRef, useContext, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import IndexPageContext from '../../../context/IndexPageContext';
import AnimationAreaContext from '../../../context/AnimationAreaContext';
import useYPositions from '../../hooks/scroll/useYPositions';
import useWindowSize from '../../hooks/window/useWindowSize';
import { TabletBreakpoint } from '../../../util/helpers';
import useFullScrollSectionHeight from '../../hooks/scroll/useFullScrollSectionHeight';
import SectionScrollBar from '../../sectionScrollBar/SectionScrollBar';
import HubblrPageLinks from '../../links/HubblrPageLinks';
import ArrowImageDownDouble from '../../imageComponents/ArrowImageDownDouble';

/**
 * Note: The content container sets 'overflow: hidden' via tailwind class because scaled
 * elements may go beyond the container's scope (we are mostly concerned about x-overflow
 * of the scaled section title). This could break things in the future/ with a different
 * order of elements. This is hard to fix, however, as adding overflow properties to any
 * parent container breaks 'position: sticky' which the content container heavily relies on.
 * We also cannot just hide overflow-x because that adds a vertical scrollbar ...
 */

const AnimatedSection = forwardRef(({ children, sectionType }, fullSectionRef) => {
  // get navbar size from context to set padding-top over navbar
  const { navBarHeight } = useContext(IndexPageContext);

  // check width of window
  const [windowWidth] = useWindowSize();
  const isLg = windowWidth > TabletBreakpoint;

  // find (step-) sizes for animation area and full area
  const contentContainerRef = useRef();
  const [animationAreaStartY] = useYPositions(fullSectionRef);
  const { animationAreaHeight, animationAreaStep } = useMemo(() => {
    const height = 2000; // in px

    return {
      animationAreaHeight: height,
      animationAreaStep: height / 100,
    };
  }, []);
  const fullSectionHeight = useFullScrollSectionHeight(animationAreaHeight, [contentContainerRef]);

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
        className="relative"
        ref={fullSectionRef}
        style={{
          height: fullSectionHeight,
        }}
      >
        <div
          ref={contentContainerRef}
          className="sticky overflow-hidden top-0 z-10 w-full flex flex-col items-center"
          style={{
            paddingTop: `${navBarHeight}px`,
          }}
        >
          <div
            className="h-px" // to give container an explicit height
            style={{
              minHeight: `calc(100vh - ${navBarHeight}px)`,
            }}
          >
            {children}
            {!isLg && sectionType !== 'last' && <ArrowImageDownDouble />}
          </div>
        </div>
        {isLg && (
          <div className="absolute h-full inset-0">
            <SectionScrollBar sectionType={sectionType} />
          </div>
        )}
      </div>
      {sectionType === 'last' && (
        <div className="mt-4">
          <HubblrPageLinks />
        </div>
      )}
    </AnimationAreaContext.Provider>
  );
});

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  sectionType: PropTypes.oneOf(['middle', 'last']),
};

AnimatedSection.defaultProps = {
  sectionType: 'middle',
};

export default AnimatedSection;
