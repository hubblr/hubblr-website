import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import AnimationAreaContext from '../../../context/AnimationAreaContext';
import useCreateTransformFromDescription from '../../hooks/scroll/useCreateTransformFromDescription';
import useWindowInfo from '../../hooks/window/useWindowInfo';
import usePaddingTop from '../../hooks/styleQueries/usePaddingTop';

const transforms = {
  opacity: {
    inputPercentages: [51, 95],
    outputRange: [0, 1],
  },
  y: {
    inputPercentages: [51, 95],
    // output range is calculated by component
  },
  scale: {
    inputPercentages: [51, 75],
    outputRange: [1.1, 1],
  },
};

function AnimatedMainContentMobile({ children }) {
  // get required values from context
  const { animationAreaStartY, animationAreaStep, contentContainerRef } = useContext(
    AnimationAreaContext
  );

  // finish transform descriptions reliant on other elements
  const { height: windowHeight } = useWindowInfo();
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
