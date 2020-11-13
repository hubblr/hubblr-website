import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import useCreateTransformFromDescription from '../../hooks/scroll/useCreateTransformFromDescription';
import AnimationAreaContext from '../../../context/AnimationAreaContext';

const transformSettingsOrbit = {
  rotate: {
    inputPercentages: [0, 100],
    outputRange: ['0deg', '45deg'],
  },
  opacity: {
    inputPercentages: [80, 99],
    outputRange: [1, 0],
  },
};

function AnimatedOrbit() {
  const { animationAreaStartY, animationAreaStep } = useContext(AnimationAreaContext);

  const orbitTransforms = {
    rotate: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      transformSettingsOrbit.rotate
    ),
    opacity: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      transformSettingsOrbit.opacity
    ),
  };

  return (
    <svg
      width="1372px"
      height="1372px"
      viewBox="0 0 1372 1372"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>satellite-orbit</title>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeDasharray="32,14"
      >
        <g
          id="components-copy"
          transform="translate(-1870.000000, -242.000000)"
          stroke="#A3A0A0"
          strokeWidth="6"
        >
          <motion.path
            d="M2556,1611 C2933.21048,1611 3239,1305.21048 3239,928 C3239,550.789516 2933.21048,245 2556,245 C2178.78952,245 1873,550.789516 1873,928 C1873,1305.21048 2178.78952,1611 2556,1611 Z"
            id="satellite-orbit"
            style={orbitTransforms}
          />
        </g>
      </g>
    </svg>
  );
}

export default AnimatedOrbit;
