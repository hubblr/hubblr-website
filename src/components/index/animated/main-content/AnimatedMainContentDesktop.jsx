import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import AnimationAreaContext from '../../../../context/AnimationAreaContext';
import DesignAdvertisementHeader from '../../design-advertisement-header/DesignAdvertisementHeader';
import useCreateTransformFromDescription from '../../../../hooks/scroll/useCreateTransformFromDescription';
import usePaddingTop from '../../../../hooks/styleQueries/usePaddingTop';
import useWindowResizeInfo from '../../../../hooks/window/useWindowResizeInfo';
import { ANIMATION_BREAKPOINTS_DESKTOP } from '../../../../config';
import ScrollJumper from '../../../scroll-jumper/ScrollJumper';
import useScrollWidth from '../../../../hooks/dimensions/useScrollWidth';

const transforms = {
  opacity: {
    inputPercentages: ANIMATION_BREAKPOINTS_DESKTOP.mainContent.opacity,
    outputRange: [0, 1],
  },
  y: {
    inputPercentages: ANIMATION_BREAKPOINTS_DESKTOP.mainContent.y,
    // output range is calculated by component
  },
  scale: {
    inputPercentages: ANIMATION_BREAKPOINTS_DESKTOP.mainContent.scale,
    outputRange: [1.1, 1],
  },
};

function AnimatedMainContentDesktop({ children, targetCustomers }) {
  // get required values from context
  const { animationAreaStartY, animationAreaStep, contentContainerRef } = useContext(
    AnimationAreaContext
  );

  const { height: windowHeight } = useWindowResizeInfo();
  const paddingTop = usePaddingTop(contentContainerRef);
  const usedScreenHeight = windowHeight - paddingTop;
  transforms.y.outputRange = [`${usedScreenHeight / 2}px`, '0px'];

  // create transforms based on transform description
  const mainContentCardStyle = {
    opacity: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      transforms.opacity
    ),
    y: useCreateTransformFromDescription(animationAreaStartY, animationAreaStep, transforms.y),
    scale: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      transforms.scale
    ),
  };

  const containerRef = useRef();
  const [widths, setWidths] = useState({
    container: 0,
    frontText: 0,
    growingDivider: 0,
    content: [],
    dividers: [],
  });
  const widthBefore = widths.frontText + widths.growingDivider;

  // check if scroll jumper has to be displayed
  const containerScrollWidth = useScrollWidth(containerRef);
  const showScrollJumper = widths.container < containerScrollWidth;
  // allow the scroll jumper to manipulate the container's scrollLeft property
  const setScrollLeft = (scrollLeft) => {
    if (containerRef.current) {
      containerRef.current.scroll(scrollLeft, 0);
    }
  };

  return (
    <motion.div
      className="px-16 flex flex-col w-full items-center mt-4 mb-6"
      style={mainContentCardStyle}
    >
      <DesignAdvertisementHeader
        ref={containerRef}
        className={`${showScrollJumper ? '' : 'mb-6'} smooth-scroll`}
        targetCustomers={targetCustomers}
        setElementWidths={setWidths}
      />
      <ScrollJumper
        containerRef={containerRef}
        setScrollLeft={setScrollLeft}
        widthBefore={widthBefore}
        contentWidths={widths.content}
        dividerWidths={widths.dividers}
        containerClassName={`${
          showScrollJumper ? '' : 'hidden'
        } w-full flex justify-between pl-3 pr-3 mt-2 mb-2`}
        leftButtonClassName="relative z-40"
        rightButtonClassName="relative z-40"
      />
      {children}
    </motion.div>
  );
}

AnimatedMainContentDesktop.propTypes = {
  children: PropTypes.node.isRequired,
  targetCustomers: PropTypes.arrayOf(PropTypes.node),
};

AnimatedMainContentDesktop.defaultProps = {
  targetCustomers: [],
};

export default AnimatedMainContentDesktop;
