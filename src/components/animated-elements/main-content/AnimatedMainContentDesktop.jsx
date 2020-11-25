import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import AnimationAreaContext from '../../../context/AnimationAreaContext';
import DesignAdvertisementHeader from '../../index-page-main-content/design-advertisement-header/DesignAdvertisementHeader';
import useCreateTransformFromDescription from '../../hooks/scroll/useCreateTransformFromDescription';
import usePaddingTop from '../../hooks/styleQueries/usePaddingTop';
import useWindowResizeInfo from '../../hooks/window/useWindowResizeInfo';
import { ANIMATION_BREAKPOINTS_DESKTOP } from '../../../config';

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

  return (
    <motion.div
      className="mx-16 flex flex-col w-full items-center mt-4"
      style={mainContentCardStyle}
    >
      <DesignAdvertisementHeader className="mb-6" targetCustomers={targetCustomers} />
      {children}
    </motion.div>
  );
}

AnimatedMainContentDesktop.propTypes = {
  children: PropTypes.node.isRequired,
  targetCustomers: PropTypes.arrayOf(PropTypes.string),
};

AnimatedMainContentDesktop.defaultProps = {
  targetCustomers: [],
};

export default AnimatedMainContentDesktop;
