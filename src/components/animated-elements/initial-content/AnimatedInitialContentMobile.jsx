import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import SectionHeading from '../../index-page-main-content/section-heading/SectionHeading';
import useClientHeight from '../../hooks/dimensions/useClientHeight';
import useCreateTransformFromDescription from '../../hooks/scroll/useCreateTransformFromDescription';
import AnimationAreaContext from '../../../context/AnimationAreaContext';
import useWindowResizeInfo from '../../hooks/window/useWindowResizeInfo';
import usePaddingTop from '../../hooks/styleQueries/usePaddingTop';
import { MOBILE_INITIAL_CONTENT } from '../../../config';
import useClientWidth from '../../hooks/dimensions/useClientWidth';

const transforms = {
  fadeInImage: {
    y: {
      inputPercentages: [0, 50],
      // output range is calculated by component
    },
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
      outputRange: [1.2, 1],
    },
  },
};

function useAvailableHeight(containerRef) {
  const { height: windowHeight } = useWindowResizeInfo(); // forces rerender when height changes
  const paddingTop = usePaddingTop(containerRef);
  return windowHeight - paddingTop;
}

function useInitialYOffset(availableHeight, startPercentage) {
  return (availableHeight * startPercentage) / 100;
}

function useLimitedDimensions(widthLimit, heightLimit, calcWidth, calcHeight) {
  // prefer the container to fill out height, so check it first
  const maxWidth = calcWidth(heightLimit);
  // base case
  if (maxWidth === 0) {
    return [0, 0];
  }
  // container can fill heightLimit
  if (maxWidth > widthLimit) {
    return [widthLimit, calcHeight(maxWidth)];
  }
  // container instead fills widthLimit
  return [maxWidth, heightLimit];
}

function useImageScaling(imageWrapperRef, imageContainerWidth, availableHeight) {
  // find initial height and width
  const initialWidth = useClientWidth(imageWrapperRef);
  const initialHeight = useClientHeight(imageWrapperRef);

  // callbacks to calculate new width and heights
  const calcImageHeight = (newWidth) => {
    return (initialHeight / initialWidth) * newWidth;
  };
  const calcImageWidth = (newHeight) => {
    return (initialWidth / initialHeight) * newHeight;
  };

  // find final height and width
  const finalWidthLimit = MOBILE_INITIAL_CONTENT.END.MAX_WIDTH * imageContainerWidth;
  const finalHeightLimit = MOBILE_INITIAL_CONTENT.END.MAX_HEIGHT * availableHeight;
  const [finalWidth] = useLimitedDimensions(
    finalWidthLimit,
    finalHeightLimit,
    calcImageWidth,
    calcImageHeight
  );

  // derive necessary scale to arrive at final dimensions
  const scale = initialWidth ? finalWidth / initialWidth : 1;

  return {
    scale,
  };
}

function AnimatedInitialContentMobile({ className, fadeInImage, contentTitle }) {
  // get required values from context
  const { animationAreaStartY, animationAreaStep, contentContainerRef } = useContext(
    AnimationAreaContext
  );

  // dimensions that limit space for the initial content
  const availableHeight = useAvailableHeight(contentContainerRef);
  const imageContainerRef = useRef();
  const imageContainerWidth = useClientWidth(imageContainerRef);
  const imageContainerHeight = useClientHeight(imageContainerRef);

  // find out the proportions of the image
  const imageWrapperRef = useRef();
  const { scale: imageWrapperFinalScale } = useImageScaling(
    imageWrapperRef,
    imageContainerWidth,
    availableHeight
  );
  const imageWrapperScales = [imageWrapperFinalScale, 1];
  // offset applied to all content
  const contentYOffset = useInitialYOffset(availableHeight, MOBILE_INITIAL_CONTENT.Y);
  // margin to move section title halfway into image
  const sectionHeadingMarginTop = imageContainerHeight / 2;
  // y offset of section title is also affected by the height the image gains through transform
  const originalHeight = imageContainerHeight * imageWrapperScales[1];
  const scaledHeight = imageContainerHeight * imageWrapperScales[0];
  const yOffsetScale = scaledHeight - originalHeight;
  const sectionHeadingYOffset = contentYOffset + yOffsetScale + sectionHeadingMarginTop;

  // finish transform descriptions
  transforms.fadeInImage.y.outputRange = [`${contentYOffset}px`, '0px'];
  transforms.fadeInImage.scale.outputRange = imageWrapperScales;
  transforms.sectionHeading.y.outputRange = [`${sectionHeadingYOffset}px`, '0px'];

  // create transforms based on transform description
  const fadeInImageStyles = {
    scale: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      transforms.fadeInImage.scale
    ),
    y: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      transforms.fadeInImage.y
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
    <div className={`relative flex flex-col ${className}`}>
      <div ref={imageContainerRef} className="w-full flex justify-center origin-center-top">
        <motion.div className="origin-center-top" style={fadeInImageStyles}>
          <div ref={imageWrapperRef}>{fadeInImage}</div>
        </motion.div>
      </div>
      <motion.div className="relative z-10 origin-center-top" style={sectionHeadingStyles}>
        <SectionHeading heading={contentTitle} />
      </motion.div>
    </div>
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
