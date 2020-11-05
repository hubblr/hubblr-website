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

const AnimatedSection = forwardRef(({ children, sectionType }, fullSectionRef) => {
  // get navbar size from context to set padding-top over navbar
  const { navBarSizeClass } = useContext(IndexPageContext);

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
  }, [isLg]);
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
      <div className="container mx-auto">
        <div
          className="relative"
          ref={fullSectionRef}
          style={{
            height: fullSectionHeight,
          }}
        >
          <div
            ref={contentContainerRef}
            className={`sticky top-0 z-10 w-full flex flex-col items-center pt-${navBarSizeClass}`}
          >
            {children}
            {!isLg && sectionType !== 'last' && <ArrowImageDownDouble />}
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
      </div>
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
