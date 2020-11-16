import React, { useMemo, useContext, useRef, useEffect, useState } from 'react';
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
  // prefer height
  const maxWidth = calcWidth(heightLimit);
  if (maxWidth === 0) {
    return [0, 0];
  }
  if (maxWidth > widthLimit) {
    return [widthLimit, calcHeight(maxWidth)];
  }
  return [maxWidth, heightLimit];
}

function useImageScaling(imageWrapperRef, imageContainerWidth, availableHeight) {
  const [canCreateCallback, setCanCreateCallback] = useState(false);
  // do NOT remove imageWrapperRef.current from deps!
  useEffect(() => {
    if (imageWrapperRef.current) {
      setCanCreateCallback(true);
    }
  }, [imageWrapperRef, imageWrapperRef.current]);

  /* canCreateCallback flips a single time when imageWrapperRef.current is initially set. Thus, both
  useMemo calls execute exactly once when no styles are set on the imageWrapper. The dimensions of
  images should never change, so this is indeed the intended behavior. */
  const calcImageHeight = useMemo(() => {
    if (!canCreateCallback) {
      return () => {
        return 0;
      };
    }
    const height = imageWrapperRef.current.clientHeight;
    const width = imageWrapperRef.current.clientWidth;
    return (newWidth) => {
      return (height / width) * newWidth;
    };
  }, [canCreateCallback, imageWrapperRef]);
  const calcImageWidth = useMemo(() => {
    if (!canCreateCallback) {
      return () => {
        return 0;
      };
    }
    const height = imageWrapperRef.current.clientHeight;
    const width = imageWrapperRef.current.clientWidth;
    return (newHeight) => {
      return (width / height) * newHeight;
    };
  }, [canCreateCallback, imageWrapperRef]);

  // find initial height and width
  const initalWidthLimit = MOBILE_INITIAL_CONTENT.START.MAX_WIDTH * imageContainerWidth;
  const initialHeightLimit = MOBILE_INITIAL_CONTENT.START.MAX_HEIGHT * availableHeight;
  const [initialWidth, initialHeight] = useLimitedDimensions(
    initalWidthLimit,
    initialHeightLimit,
    calcImageWidth,
    calcImageHeight
  );

  // find final height and width
  const finalWidthLimit = MOBILE_INITIAL_CONTENT.END.MAX_WIDTH * imageContainerWidth;
  const finalHeightLimit = MOBILE_INITIAL_CONTENT.END.MAX_HEIGHT * availableHeight;
  const [finalWidth] = useLimitedDimensions(
    finalWidthLimit,
    finalHeightLimit,
    calcImageWidth,
    calcImageHeight
  );

  // create style object to set on image wrapper
  const imageWrapperStyle =
    initialWidth === 0 && initialHeight === 0
      ? {}
      : {
          width: `${initialWidth}px`,
        };

  // derive necessary scale to arrive at final dimensions
  const scale = initialWidth ? finalWidth / initialWidth : 1;

  return {
    imageWrapperStyle,
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
  const { imageWrapperStyle, scale } = useImageScaling(
    imageWrapperRef,
    imageContainerWidth,
    availableHeight
  );
  // offset towards image in initial state
  const contentYOffset = useInitialYOffset(availableHeight, MOBILE_INITIAL_CONTENT.Y);
  // margin to move section title halfway into image
  const sectionHeadingMarginTop = imageContainerHeight / 2;

  // finish transform descriptions
  transforms.initialContent.y.outputRange = [`${contentYOffset}px`, '0px'];
  transforms.fadeInImage.scale.outputRange = [scale, 1];
  // y offset of section title is derived from image scale values
  const fadeInScales = transforms.fadeInImage.scale.outputRange;
  const originalHeight = imageContainerHeight * fadeInScales[1];
  const scaledHeight = imageContainerHeight * fadeInScales[0];
  const yOffsetScale = scaledHeight - originalHeight;
  transforms.sectionHeading.y.outputRange = [`${yOffsetScale + sectionHeadingMarginTop}px`, '0px'];

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
      transforms.initialContent.y
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
          <div ref={imageWrapperRef} style={imageWrapperStyle}>
            {fadeInImage}
          </div>
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
