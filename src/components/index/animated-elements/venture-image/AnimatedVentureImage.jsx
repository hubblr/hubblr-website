import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import { ANIMATION_TIMINGS } from '../../../../config';
import VenturesArrowImage from '../../../image-components/VenturesArrowImage';
import VenturesArrowImageSource from '../../../../images/ventures/venturesArrow.png';

function AnimatedVenturesImage({ className }) {
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
      className="flex justify-center items-center"
      animate={wrapperControls}
      initial={{ scale: 3, opacity: 0 }}
    >
      <VenturesArrowImage className={className} src={VenturesArrowImageSource} alt="ventures" />
    </motion.div>
  );
}

AnimatedVenturesImage.propTypes = {
  className: PropTypes.string,
};

AnimatedVenturesImage.defaultProps = {
  className: 'h-full w-full',
};
export default AnimatedVenturesImage;
