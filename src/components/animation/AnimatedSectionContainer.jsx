import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import { ANIMATION_TIMINGS } from '../../config';

const AnimatedSectionContainer = ({ children }) => {
  const controls = useAnimation();
  const {
    CONTENT: { DELAY, DURATION },
  } = ANIMATION_TIMINGS;

  const triggerAnimation = async () => {
    await controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: DURATION, delay: DELAY },
    });
  };

  useEffect(() => {
    triggerAnimation();
  }, []);

  return (
    <motion.div animate={controls} initial={{ y: 800, opacity: 0 }}>
      {children}
    </motion.div>
  );
};

AnimatedSectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AnimatedSectionContainer;
