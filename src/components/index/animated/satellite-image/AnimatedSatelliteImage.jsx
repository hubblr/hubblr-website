import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import SatelliteImage from './SatelliteImage';
import { ANIMATION_TIMINGS } from '../../../../config';

function AnimatedSatelliteImage({ className }) {
  const wrapperControls = useAnimation();

  const {
    IMAGE: {
      WRAPPER: { DELAY: wrapperDelay, DURATION: wrapperDuration },
    },
  } = ANIMATION_TIMINGS;

  const triggerWrapperAnimation = async () => {
    await wrapperControls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: wrapperDuration, delay: wrapperDelay },
    });
  };

  useEffect(() => {
    triggerWrapperAnimation();
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center justify-center"
      animate={wrapperControls}
      initial={{ scale: 3, opacity: 0 }}
    >
      <SatelliteImage className={`w-56 h-auto ${className}`} />
    </motion.div>
  );
}

AnimatedSatelliteImage.propTypes = {
  className: PropTypes.string,
};

AnimatedSatelliteImage.defaultProps = {
  className: 'h-full w-full',
};

export default AnimatedSatelliteImage;
