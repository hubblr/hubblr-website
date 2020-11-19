import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import AnimationAreaContext from '../../../context/AnimationAreaContext';
import useCreateTransformFromDescription from '../../hooks/scroll/useCreateTransformFromDescription';
import useWindowResizeInfo from '../../hooks/window/useWindowResizeInfo';
import usePaddingTop from '../../hooks/styleQueries/usePaddingTop';
import { ANIMATION_BREAKPOINTS_MOBILE } from '../../../config';

const transforms = {
  opacity: {
    inputPercentages: ANIMATION_BREAKPOINTS_MOBILE.mainContent.opacity,
    outputRange: [0, 1],
  },
  y: {
    inputPercentages: ANIMATION_BREAKPOINTS_MOBILE.mainContent.y,
    // output range is calculated by component
  },
  scale: {
    inputPercentages: ANIMATION_BREAKPOINTS_MOBILE.mainContent.scale,
    outputRange: [1.1, 1],
  },
};

function AnimatedMainContentMobile({ children }) {
  // get required values from context
  const { animationAreaStartY, animationAreaStep, contentContainerRef } = useContext(
    AnimationAreaContext
  );

  // finish transform descriptions reliant on other elements
  const { height: windowHeight } = useWindowResizeInfo();
  const paddingTop = usePaddingTop(contentContainerRef);
  const usedScreenHeight = windowHeight - paddingTop;
  transforms.y.outputRange = [`${usedScreenHeight / 2}px`, '0px'];

  // create transforms based on transform description
  const mainContentCardStyles = {
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
    <motion.div className="relative" style={mainContentCardStyles}>
      {children}
    </motion.div>
  );
}

AnimatedMainContentMobile.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AnimatedMainContentMobile;
