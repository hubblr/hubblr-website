import React from 'react';
import PropTypes from 'prop-types';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { arrayOfLength2 } from '../../util/propTypes';

function templateCssTransform({ x = '-50%', y = '-50%', scale = 1 }) {
  return `translateX(${x}) translateY(${y}) scale(${scale})`;
}

function ScrollAnimatedElement({ wrappedElement, wrapperStyleClasses, transforms }) {
  // create motionValues translated from y-scroll progress
  const { scrollYProgress } = useViewportScroll();
  const animationStyles = {};
  if (transforms) {
    transforms.forEach(({ cssProp, scrollPercentageBreakpoints, range }) => {
      animationStyles[cssProp] = useTransform(
        scrollYProgress,
        [scrollPercentageBreakpoints.start, scrollPercentageBreakpoints.end],
        range
      );
    });
  }

  return (
    <motion.div
      transformTemplate={templateCssTransform}
      className={`absolute transform ${wrapperStyleClasses}`}
      style={animationStyles}
    >
      {wrappedElement}
    </motion.div>
  );
}

ScrollAnimatedElement.defaultProps = {
  wrapperStyleClasses: '',
};

ScrollAnimatedElement.propTypes = {
  wrappedElement: PropTypes.node.isRequired,
  wrapperStyleClasses: PropTypes.string,
  transforms: PropTypes.arrayOf(
    PropTypes.shape({
      cssProp: PropTypes.string,
      range: arrayOfLength2,
      scrollPercentageBreakpoints: PropTypes.shape({
        start: PropTypes.number,
        end: PropTypes.number,
      }),
    })
  ).isRequired,
};

export default ScrollAnimatedElement;
