import React, { useContext, useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { motion, useSpring, useViewportScroll } from 'framer-motion';
import DesignAdvertisementHeader from '../../indexPageMainContent/DesignAdvertisementHeader/DesignAdvertisementHeader';
import ScrollJumper from '../../scrollJumper/ScrollJumper';
import AnimationAreaContext from '../../../context/AnimationAreaContext';
import useScrollPositionFromPercentage from '../../hooks/scroll/useScrollPositionFromPercentage';
import useScrollWidth from '../../hooks/scroll/useScrollWidth';

const scrollBreakpointPercentage = 50;

function AnimatedDesignAdvertisementHeaderMobile({ className, targetCustomers }) {
  // get required values from context
  const { animationAreaStartY, animationAreaStep } = useContext(AnimationAreaContext);

  // extract relevant data from child to pass into scroll jumper
  const containerRef = useRef();
  const setScrollLeft = (scrollLeft) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft;
    }
  };
  const trackedWidths = useRef({
    container: 0,
    frontText: 0,
    growingDivider: 0,
    content: [],
    dividers: [],
  });
  const setWidths = ({
    containerWidth,
    frontTextWidth,
    growingDividerWidth,
    contentWidths,
    dividerWidths,
  }) => {
    if (trackedWidths.current) {
      trackedWidths.current.container = containerWidth;
      trackedWidths.current.frontText = frontTextWidth;
      trackedWidths.current.growingDivider = growingDividerWidth;
      trackedWidths.current.content = contentWidths;
      trackedWidths.current.dividers = dividerWidths;
    }
  };

  // derive properties from extracted widths to use in animation & scroll jumper
  const widths = trackedWidths.current;
  const [xOffsetStart, setXOffsetStart] = useState(0);
  const [widthBefore, setWidthsBefore] = useState(0);
  useLayoutEffect(() => {
    setXOffsetStart(
      widths.container - widths.frontText - widths.growingDivider - widths.container / 20
    );
    setWidthsBefore(widths.frontText + widths.growingDivider);
  }, [widths.container, widths.content, widths.frontText, widths.growingDivider]);

  // check if scroll jumper is even necessary
  const containerScrollWidth = useScrollWidth(containerRef);
  const showScrollJumper =
    trackedWidths.current && trackedWidths.current.container < containerScrollWidth;

  // animate spring when y scroll breakpoint is passed in either direction
  const yBreakpoint = useScrollPositionFromPercentage(
    animationAreaStartY,
    animationAreaStep,
    scrollBreakpointPercentage
  );
  const { scrollY } = useViewportScroll();
  const xOffsetControls = useSpring(xOffsetStart, { stiffness: 260, damping: 20 });
  const scrollJumperOpacityControl = useSpring(0, { stiffness: 260, damping: 20 });
  useLayoutEffect(() => {
    scrollY.onChange((y) => {
      if (y > yBreakpoint) {
        // active state
        xOffsetControls.set(0);
        scrollJumperOpacityControl.set(1);
      } else {
        // "waiting" state
        xOffsetControls.set(xOffsetStart);
        scrollJumperOpacityControl.set(0);
      }
    });
  }, [xOffsetControls, scrollY, xOffsetStart, yBreakpoint, scrollJumperOpacityControl]);

  return (
    <div className={`w-full ${className}`}>
      <motion.div
        className="relative z-20 container mx-auto overflow-x-auto"
        style={{ x: xOffsetControls }}
      >
        <DesignAdvertisementHeader
          ref={containerRef}
          targetCustomers={targetCustomers}
          setElementWidths={setWidths}
        />
      </motion.div>
      <motion.div
        className={`container mx-auto ${showScrollJumper ? '' : 'hidden'}`}
        style={{ opacity: scrollJumperOpacityControl }}
      >
        <ScrollJumper
          containerRef={containerRef}
          setScrollLeft={setScrollLeft}
          widthBefore={widthBefore}
          contentWidths={widths.content}
          dividerWidths={widths.dividers}
          containerClassName="w-full flex justify-between pl-3 pr-3"
          leftButtonClassName="relative z-40"
          rightButtonClassName="relative z-40"
        />
      </motion.div>
    </div>
  );
}

AnimatedDesignAdvertisementHeaderMobile.propTypes = {
  className: PropTypes.string,
  targetCustomers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

AnimatedDesignAdvertisementHeaderMobile.defaultProps = {
  className: '',
};

export default AnimatedDesignAdvertisementHeaderMobile;
