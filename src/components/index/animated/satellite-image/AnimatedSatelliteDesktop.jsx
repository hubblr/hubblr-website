import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import AnimationAreaContext from '../../../../context/AnimationAreaContext';
import useCreateTransformFromDescription from '../../../../hooks/scroll/useCreateTransformFromDescription';
import SatelliteImage from './SatelliteImage';
import { ANIMATION_BREAKPOINTS_DESKTOP } from '../../../../config';

const transformSettingsSatellite = {
  scale: {
    inputPercentages: ANIMATION_BREAKPOINTS_DESKTOP.satelliteImage.scale,
    outputRange: [1.3, 1],
  },
  opacity: {
    inputPercentages: ANIMATION_BREAKPOINTS_DESKTOP.satelliteImage.opacity,
    outputRange: [0, 1],
  },
};

function AnimatedSatelliteDesktop({ className }) {
  const { animationAreaStartY, animationAreaStep } = useContext(AnimationAreaContext);

  const satelliteTransforms = {
    scale: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      transformSettingsSatellite.scale
    ),
    opacity: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      transformSettingsSatellite.opacity
    ),
  };

  return (
    <motion.div className={className} style={satelliteTransforms}>
      <SatelliteImage className="h-auto" style={{ width: '480px' }} />
    </motion.div>
  );
}

AnimatedSatelliteDesktop.propTypes = {
  className: PropTypes.string,
};

AnimatedSatelliteDesktop.defaultProps = {
  className: '',
};

export default AnimatedSatelliteDesktop;
