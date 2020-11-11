import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import SectionHeading from '../../index-page-main-content/section-heading/SectionHeading';
import useClientHeight from '../../hooks/dimensions/useClientHeight';
import useCreateTransformFromDescription from '../../hooks/scroll/useCreateTransformFromDescription';
import AnimationAreaContext from '../../../context/AnimationAreaContext';
import useWindowInfo from '../../hooks/window/useWindowInfo';
import usePaddingTop from '../../hooks/styleQueries/usePaddingTop';
import {
  MOBILE_INITIAL_CONTENT_START,
  MOBILE_INITIAL_IMAGE_END,
  MOBILE_INITIAL_TITLE_END,
  // MOBILE_INITIAL_MIN_SCALE,
} from '../../../config';

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
      // output range is calculated by component
    },
  },
  sectionHeading: {
    y: {
      inputPercentages: [0, 50],
      // output range is calculated by component
    },
    scale: {
      inputPercentages: [0, 50],
      // output range is calculated by component
    },
  },
};

function useAvailableHeight(containerRef) {
  const { height: windowHeight } = useWindowInfo(); // forces rerender when height changes
  const paddingTop = usePaddingTop(containerRef);
  return windowHeight - paddingTop;
}

function useInitialYOffset(availableHeight, startPercentage) {
  return (availableHeight * startPercentage) / 100;
}

function useScaleOutputRange(initialHeight, availableHeight, startPercentage, endPercentage) {
  if (!initialHeight) {
    return [1, 1];
  }
  const start = (availableHeight * startPercentage) / 100;
  const end = (availableHeight * endPercentage) / 100;
  const finalHeight = end - start;
  const finalScale = finalHeight / initialHeight;
  return [finalScale, 1];
}

function AnimatedInitialContentMobile({ className, fadeInImage, contentTitle }) {
  // get required values from context
  const { animationAreaStartY, animationAreaStep, contentContainerRef } = useContext(
    AnimationAreaContext
  );

  // create reused variables
  const availableHeight = useAvailableHeight(contentContainerRef);
  const imageWrapperRef = useRef();
  const imageWrapperHeight = useClientHeight(imageWrapperRef);
  const sectionHeadingRef = useRef();
  const sectionHeadingHeight = useClientHeight(sectionHeadingRef);
  // margin to move section title halfway into image
  const sectionHeadingMarginTop = imageWrapperHeight / 2;
  // offset towards image in initial state
  const contentYOffset = useInitialYOffset(availableHeight, MOBILE_INITIAL_CONTENT_START);

  // finish transform descriptions
  transforms.initialContent.y.outputRange = [`${contentYOffset}px`, '0px'];
  transforms.fadeInImage.scale.outputRange = useScaleOutputRange(
    imageWrapperHeight,
    availableHeight,
    MOBILE_INITIAL_CONTENT_START,
    MOBILE_INITIAL_IMAGE_END
  );
  transforms.sectionHeading.scale.outputRange = useScaleOutputRange(
    sectionHeadingHeight,
    availableHeight,
    MOBILE_INITIAL_IMAGE_END,
    MOBILE_INITIAL_TITLE_END
  );
  // y offset of section title is derived from image scale values
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
  // append any further style parameters
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
      <motion.div
        ref={sectionHeadingRef}
        className="relative z-10 origin-center-top"
        style={sectionHeadingStyles}
      >
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
