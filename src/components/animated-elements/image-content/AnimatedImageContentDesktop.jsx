import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import useCreateTransformFromDescription from '../../hooks/scroll/useCreateTransformFromDescription';
import AnimationAreaContext from '../../../context/AnimationAreaContext';

const transforms = {
  opacity: {
    inputPercentages: [0, 50],
    outputRange: [0, 1],
  },
};

function AnimatedImageContentDesktop({ fadeInImage }) {
  // get required values from context
  const { animationAreaStartY, animationAreaStep } = useContext(AnimationAreaContext);

  // create transforms based on transform description
  const fadeInImageStyle = {
    opacity: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      transforms.opacity
    ),
  };

  return (
    <motion.div
      className="overflow-hidden absolute -z-10 w-full h-screen transform inset-0 flex justify-center items-center"
      style={fadeInImageStyle}
    >
      {fadeInImage}
    </motion.div>
  );
}

AnimatedImageContentDesktop.propTypes = {
  fadeInImage: PropTypes.node.isRequired,
};

export default AnimatedImageContentDesktop;
