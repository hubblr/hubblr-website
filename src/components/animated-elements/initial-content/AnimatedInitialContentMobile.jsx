import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import SectionHeading from '../../indexPageMainContent/SectionHeading/SectionHeading';
import useClientHeight from '../../hooks/dimensions/useClientHeight';
import useCreateTransformFromDescription from '../../hooks/scroll/useCreateTransformFromDescription';
import AnimationAreaContext from '../../../context/AnimationAreaContext';
import useWindowSize from '../../hooks/window/useWindowSize';
import usePaddingTop from '../../hooks/styleQueries/usePaddingTop';

const transforms = {
  initialContent: {
    y: {
      inputPercentages: [0, 50],
      // output range is calculated by component
    },
  },
  fadeInImage: {
    scale: {
      inputPercentages: [0, 50],
      outputRange: [2.5, 1],
    },
  },
  sectionHeading: {
    y: {
      inputPercentages: [0, 50],
      // output range is calculated by component
    },
    scale: {
      inputPercentages: [0, 50],
      outputRange: [1.5, 1],
    },
  },
};

function AnimatedInitialContentMobile({ className, fadeInImage, contentTitle }) {
  // get required values from context
  const { animationAreaStartY, animationAreaStep, contentContainerRef } = useContext(
    AnimationAreaContext
  );

  // TODO: create functions
  // finish transform descriptions reliant on other elements
  // y offset of entire initial content
  const [, windowHeight] = useWindowSize();
  const paddingTop = usePaddingTop(contentContainerRef);
  const usedScreenHeight = windowHeight - paddingTop;
  transforms.initialContent.y.outputRange = [`${usedScreenHeight / 7}px`, '0px'];
  // margin top of section heading TODO: not the same as other functions
  const imageWrapperRef = useRef();
  const imageWrapperHeight = useClientHeight(imageWrapperRef);
  const sectionHeadingMarginTop = imageWrapperHeight / 2;
  // y offset of section heading
  const fadeInScales = transforms.fadeInImage.scale.outputRange;
  const originalHeight = imageWrapperHeight * fadeInScales[1];
  const scaledHeight = imageWrapperHeight * fadeInScales[0];
  const yOffsetScale = scaledHeight - originalHeight;
  transforms.sectionHeading.y.outputRange = [`${yOffsetScale + sectionHeadingMarginTop}px`, '0px'];

  // create transforms based on transform description
  const initialContentStyles = {
    y: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      transforms.initialContent.y
    ),
  };
  const fadeInImageStyles = {
    scale: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      transforms.fadeInImage.scale
    ),
  };
  const sectionHeadingStyles = {
    y: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      transforms.sectionHeading.y
    ),
    scale: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      transforms.sectionHeading.scale
    ),
  };

  // append styles where necessary
  sectionHeadingStyles.marginTop = `-${sectionHeadingMarginTop}px`;

  return (
    <motion.div className={`relative flex flex-col ${className}`} style={initialContentStyles}>
      <motion.div
        ref={imageWrapperRef}
        className="w-full flex justify-center origin-center-top"
        style={fadeInImageStyles}
      >
        {fadeInImage}
      </motion.div>
      <motion.div className="relative z-10 origin-center-top" style={sectionHeadingStyles}>
        <SectionHeading heading={contentTitle} />
      </motion.div>
    </motion.div>
  );
}

AnimatedInitialContentMobile.propTypes = {
  className: PropTypes.string,
  fadeInImage: PropTypes.element.isRequired,
  contentTitle: PropTypes.string.isRequired,
};

AnimatedInitialContentMobile.defaultProps = {
  className: '',
};

export default AnimatedInitialContentMobile;
