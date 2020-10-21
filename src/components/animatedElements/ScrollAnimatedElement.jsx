import React from 'react';
import PropTypes from 'prop-types';
import { arrayOfLength2 } from '../../util/propTypes';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

function templateCssTransform({ x = '-50%', y = '-50%', scale = 1 }) {
  return `translateX(${x}) translateY(${y}) scale(${scale})`;
}

function ScrollAnimatedElement({ wrappedElement, positionClass, transforms }) {
  //create motionValues translated from y-scroll progress
  const { scrollYProgress } = useViewportScroll();
  const animationStyles = {};
  transforms &&
    transforms.forEach(({ cssProp, scrollPercentageBreakpoints, range }) => {
      animationStyles[cssProp] = useTransform(
        scrollYProgress,
        [scrollPercentageBreakpoints.start, scrollPercentageBreakpoints.end],
        range
      );
    });

  return (
    <motion.div
      transformTemplate={templateCssTransform}
      className={`absolute transform ${positionClass}`}
      style={animationStyles}
    >
      {wrappedElement}
    </motion.div>
  );
}

ScrollAnimatedElement.propTypes = {
  wrappedElement: PropTypes.node,
  positionClass: PropTypes.string,
  transforms: PropTypes.arrayOf(
    PropTypes.shape({
      cssProp: PropTypes.string,
      range: arrayOfLength2,
      scrollPercentageBreakpoints: PropTypes.shape({
        start: PropTypes.number,
        end: PropTypes.number,
      }),
    })
  ),
};

export default ScrollAnimatedElement;
