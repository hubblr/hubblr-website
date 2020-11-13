import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import AnimationAreaContext from '../../../context/AnimationAreaContext';
import useWindowResizeInfo from '../../hooks/window/useWindowResizeInfo';
import SectionHeading from '../../index-page-main-content/section-heading/SectionHeading';
import useClientHeight from '../../hooks/dimensions/useClientHeight';
import useCreateTransformFromDescription from '../../hooks/scroll/useCreateTransformFromDescription';
import IndexPageContext from '../../../context/IndexPageContext';

const transforms = {
  opacity: {
    inputPercentages: [20, 50],
    outputRange: [0, 1],
  },
  scale: {
    inputPercentages: [20, 90],
    outputRange: [1.5, 1],
  },
  y: {
    inputPercentages: [50, 90],
    // output range is calculated by component
  },
};

function AnimatedSectionHeadingDesktop({ heading }) {
  // get required values from context
  const { navBarHeight } = useContext(IndexPageContext);
  const { animationAreaStartY, animationAreaStep } = useContext(AnimationAreaContext);

  // finish transform descriptions reliant on other elements
  // calculate y offset at start of animation (to center in window)
  const sectionHeadingRef = useRef();
  const sectionHeadingHeight = useClientHeight(sectionHeadingRef);
  const { height: windowHeight } = useWindowResizeInfo();
  const topYHeadingStart = windowHeight / 2 - navBarHeight - sectionHeadingHeight / 2;
  transforms.y.outputRange = [`${topYHeadingStart}px`, '0px'];

  // create transforms
  const sectionHeadingStyle = {
    opacity: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      transforms.opacity
    ),
    scale: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      transforms.scale
    ),
    y: useCreateTransformFromDescription(animationAreaStartY, animationAreaStep, transforms.y),
  };

  return (
    <div className="relative z-10 pb-6">
      <motion.div style={sectionHeadingStyle}>
        <SectionHeading ref={sectionHeadingRef} heading={heading} />
      </motion.div>
    </div>
  );
}

AnimatedSectionHeadingDesktop.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default AnimatedSectionHeadingDesktop;
