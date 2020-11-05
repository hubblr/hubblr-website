import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import AnimationAreaContext from '../../../context/AnimationAreaContext';
import DesignAdvertisementHeader from '../../indexPageMainContent/DesignAdvertisementHeader/DesignAdvertisementHeader';
import useCreateTransformFromDescription from '../../hooks/scroll/useCreateTransformFromDescription';

const transforms = {
  opacity: {
    inputPercentages: [50, 95],
    outputRange: [0, 1],
  },
};

function AnimatedMainContentDesktop({ children, targetCustomers }) {
  // get required values from context
  const { animationAreaStartY, animationAreaStep } = useContext(AnimationAreaContext);

  // create transforms based on transform description
  const mainContentCardStyle = {
    opacity: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      transforms.opacity
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
