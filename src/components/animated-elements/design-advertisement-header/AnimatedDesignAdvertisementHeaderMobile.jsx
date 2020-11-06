import React, { useContext, useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { motion, useSpring, useViewportScroll } from 'framer-motion';
import DesignAdvertisementHeader from '../../indexPageMainContent/DesignAdvertisementHeader/DesignAdvertisementHeader';
// import ScrollJumper from '../../ScrollJumper';
import AnimationAreaContext from '../../../context/AnimationAreaContext';
import useScrollPositionFromPercentage from '../../hooks/scroll/useScrollPositionFromPercentage';

const scrollBreakpointPercentage = 50;

function AnimatedDesignAdvertisementHeaderMobile({ className, targetCustomers }) {
  // get required values from context
  const { animationAreaStartY, animationAreaStep } = useContext(AnimationAreaContext);

  // extract relevant data from child to pass into scroll jumper
  const containerRef = useRef();
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
  // const [widthBefore, setWidthsBefore] = useState(0);
  useLayoutEffect(() => {
    setXOffsetStart(
      widths.container - widths.frontText - widths.growingDivider - widths.container / 20
    );
    // setWidthsBefore(widths.frontText + widths.growingDivider);
  }, [widths.container, widths.content, widths.frontText, widths.growingDivider]);

  // animate spring when y scroll breakpoint is passed in either direction
  const yBreakpoint = useScrollPositionFromPercentage(
    animationAreaStartY,
    animationAreaStep,
    scrollBreakpointPercentage
  );
  const { scrollY } = useViewportScroll();
  const xOffsetControls = useSpring(xOffsetStart, { stiffness: 260, damping: 20 });
  useLayoutEffect(() => {
    scrollY.onChange((y) => {
      if (y > yBreakpoint) {
        xOffsetControls.set(0);
      } else {
        xOffsetControls.set(xOffsetStart);
      }
    });
  }, [xOffsetControls, scrollY, xOffsetStart, yBreakpoint]);

  return (
    <div className={`w-full overflow-x-hidden ${className}`}>
      <motion.div className="w-full" style={{ x: xOffsetControls }}>
        <DesignAdvertisementHeader
          ref={containerRef}
          targetCustomers={targetCustomers}
          setElementWidths={setWidths}
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
