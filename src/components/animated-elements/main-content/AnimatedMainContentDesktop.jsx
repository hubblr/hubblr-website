import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import AnimationAreaContext from '../../../context/AnimationAreaContext';
import DesignAdvertisementHeader from '../../index-page-main-content/design-advertisement-header/DesignAdvertisementHeader';
import useCreateTransformFromDescription from '../../hooks/scroll/useCreateTransformFromDescription';
import usePaddingTop from '../../hooks/styleQueries/usePaddingTop';
import useWindowInfo from '../../hooks/window/useWindowInfo';

const transforms = {
  opacity: {
    inputPercentages: [51, 75],
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

function AnimatedMainContentDesktop({ children, targetCustomers }) {
  // get required values from context
  const { animationAreaStartY, animationAreaStep, contentContainerRef } = useContext(
    AnimationAreaContext
  );

  const { height: windowHeight } = useWindowInfo();
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
    <motion.div className="flex flex-col items-center mt-4" style={mainContentCardStyle}>
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
