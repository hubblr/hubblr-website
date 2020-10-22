import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const animationVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transitionStart: {
      opacity: 0,
      scale: 0,
    },
  },
  hidden: {
    scale: 0,
    opacity: 0,
    transitionStart: {
      opacity: 1,
      scale: 1,
    },
  },
};

const AnimatedRadioBox = ({ checked, className }) => (
  <div
    className={`flex flex-col items-center justify-center rounded-lg w-6 h-6 border-2 border-gray-400 ${
      checked ? 'border-brand-blue' : ''
    } ${className}`}
  >
    <motion.div
      animate={checked ? 'visible' : 'hidden'}
      variants={animationVariants}
      initial={false}
      className="rounded bg-brand-blue h-3 w-3 flex-shrink-0"
    />
  </div>
);

AnimatedRadioBox.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
};

AnimatedRadioBox.defaultProps = {
  checked: false,
  className: '',
};

export default AnimatedRadioBox;
