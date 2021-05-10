import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import DesignAdvertisementHeader from '../../design-advertisement-header/DesignAdvertisementHeader';
import ScrollJumper from '../../../scroll-jumper/ScrollJumper';
import AnimationAreaContext from '../../../../context/AnimationAreaContext';
import useScrollWidth from '../../../../hooks/dimensions/useScrollWidth';
import useCreateSpringFromDescription from '../../../../hooks/scroll/useCreateSpringFromDescription';
import useCreateTransformFromDescription from '../../../../hooks/scroll/useCreateTransformFromDescription';
import { ANIMATION_BREAKPOINTS_MOBILE } from '../../../../config';

const transforms = {
  designAdvertisementHeader: {
    opacity: {
      inputPercentages: ANIMATION_BREAKPOINTS_MOBILE.designAdvertisementHeader.opacity,
      outputRange: [0, 1],
    },
    x: {
      percentageBreakpoint: ANIMATION_BREAKPOINTS_MOBILE.designAdvertisementHeader.x,
      // start value calculated by component
      endValue: 0,
      stiffness: 260,
      damping: 20,
    },
  },
  scrollJumper: {
    opacity: {
      percentageBreakpoint: ANIMATION_BREAKPOINTS_MOBILE.scrollJumper.opacity,
      startValue: 0,
      endValue: 1,
      stiffness: 260,
      damping: 20,
    },
  },
};

function AnimatedDesignAdvertisementHeaderMobile({ className, targetCustomers }) {
  // get required values from context
  const { animationAreaStartY, animationAreaStep } = useContext(AnimationAreaContext);

  // unclear how many children, refs and width setting is controlled by children and extracted here
  const containerRef = useRef();
  const [widths, setWidths] = useState({
    container: 0,
    frontText: 0,
    growingDivider: 0,
    content: [],
    dividers: [],
  });

  // derive properties from extracted widths to use in animation & scroll jumper
  transforms.designAdvertisementHeader.x.startValue =
    widths.container - widths.frontText - widths.growingDivider - widths.container / 20;
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

  // create springs & transforms based on transform description
  const designAdvertisementHeaderStyles = {
    opacity: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      transforms.designAdvertisementHeader.opacity
    ),
    x: useCreateSpringFromDescription(
      animationAreaStartY,
      animationAreaStep,
      transforms.designAdvertisementHeader.x
    ),
  };
  const scrollJumperStyles = {
    opacity: useCreateSpringFromDescription(
      animationAreaStartY,
      animationAreaStep,
      transforms.scrollJumper.opacity
    ),
  };

  return (
    <div className={`w-full ${className}`}>
      <motion.div
        className="relative z-20 container mx-auto"
        style={designAdvertisementHeaderStyles}
      >
        <DesignAdvertisementHeader
          ref={containerRef}
          className="smooth-scroll"
          targetCustomers={targetCustomers}
          setElementWidths={setWidths}
        />
      </motion.div>
      <motion.div
        className={`container mx-auto ${showScrollJumper ? '' : 'hidden'}`}
        style={scrollJumperStyles}
      >
        <ScrollJumper
          containerRef={containerRef}
          setScrollLeft={setScrollLeft}
          widthBefore={widthBefore}
          contentWidths={widths.content}
          dividerWidths={widths.dividers}
          containerClassName="w-full flex justify-between pl-3 pr-3 mt-2"
          leftButtonClassName="relative z-40"
          rightButtonClassName="relative z-40"
        />
      </motion.div>
    </div>
  );
}

AnimatedDesignAdvertisementHeaderMobile.propTypes = {
  className: PropTypes.string,
  targetCustomers: PropTypes.arrayOf(PropTypes.node).isRequired,
};

AnimatedDesignAdvertisementHeaderMobile.defaultProps = {
  className: '',
};

export default AnimatedDesignAdvertisementHeaderMobile;
