import React, { useContext, useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import usePaddingTop from '../hooks/styleQueries/usePaddingTop';
import mobileScrollAnimations from '../../animation/scrollAnimationDescriptionMobile';
import useClientHeight from '../hooks/dimensions/useClientHeight';
import useCreateTransformFromDescription from '../hooks/scroll/useCreateTransformFromDescription';
import AnimationAreaContext from '../../context/AnimationAreaContext';
import useWindowSize from '../hooks/window/useWindowSize';
import SectionHeading from '../pageMainContent/SectionHeading';
import DesignAdvertisementHeader from '../pageMainContent/DesignAdvertisementHeader';
import MainContentCard from '../pageMainContent/MainContentCard';
import IndexGradientBorderButtonLongArrow from '../gradientBorderButtons/IndexGradientBorderButtonLongArrow';

function AnimatedSectionContentMobile({
  fadeInImage,
  contentTitle,
  targetCustomers,
  mainContentDescription,
  navigation,
}) {
  const {
    animationAreaStartY,
    animationAreaStep,
    contentContainerRef,
    setBufferStyles,
  } = useContext(AnimationAreaContext);
  const [, windowHeight] = useWindowSize();

  const paddingTop = usePaddingTop(contentContainerRef);

  // finish transform descriptions
  // top of initial content
  const usedScreenHeight = windowHeight - paddingTop;
  mobileScrollAnimations.transforms.initialContent.y.outputRange = [
    `${usedScreenHeight / 7}px`,
    '0px',
  ];
  // margin top of section heading
  const imageWrapperRef = useRef();
  const imageWrapperHeight = useClientHeight(imageWrapperRef);
  mobileScrollAnimations.transforms.sectionHeading.marginTop.outputRange = [
    '0',
    `-${imageWrapperHeight / 2}px`,
  ];
  // to keep size of section correct, buffer negative margin
  mobileScrollAnimations.transforms.buffer = {
    paddingBottom: {
      inputPercentages: mobileScrollAnimations.transforms.sectionHeading.marginTop.inputPercentages,
      outputRange: ['0', `${imageWrapperHeight / 2}px`],
    },
  };
  // top of section heading
  const fadeInScales = mobileScrollAnimations.transforms.fadeInImage.scale.outputRange;
  const originalHeight = imageWrapperHeight * fadeInScales[1];
  const scaledHeight = imageWrapperHeight * fadeInScales[0];
  mobileScrollAnimations.transforms.sectionHeading.y.outputRange = [
    `${scaledHeight - originalHeight}px`,
    '0px',
  ];
  // top of main content card
  // TODO: fix with more precise value
  mobileScrollAnimations.transforms.mainContentCard.y.outputRange = [
    `${usedScreenHeight / 2}px`,
    '0px',
  ];

  // create transforms
  const initialContentTransforms = {
    y: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      mobileScrollAnimations.transforms.initialContent.y
    ),
  };
  const fadeInImageTransforms = {
    scale: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      mobileScrollAnimations.transforms.fadeInImage.scale
    ),
  };
  const sectionHeadingTransforms = {
    marginTop: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      mobileScrollAnimations.transforms.sectionHeading.marginTop
    ),
    y: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      mobileScrollAnimations.transforms.sectionHeading.y
    ),
    scale: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      mobileScrollAnimations.transforms.sectionHeading.scale
    ),
  };
  const mainContentCardTransforms = {
    opacity: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      mobileScrollAnimations.transforms.mainContentCard.opacity
    ),
    y: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      mobileScrollAnimations.transforms.mainContentCard.y
    ),
  };
  const bufferPaddingBottom = useCreateTransformFromDescription(
    animationAreaStartY,
    animationAreaStep,
    mobileScrollAnimations.transforms.buffer.paddingBottom
  );
  useLayoutEffect(() => {
    const bufferTransforms = {
      paddingBottom: bufferPaddingBottom,
    };
    setBufferStyles(bufferTransforms);
  }, [bufferPaddingBottom, setBufferStyles]);

  return (
    <>
      <motion.div className="relative w-1/2 flex flex-col" style={initialContentTransforms}>
        <motion.div
          ref={imageWrapperRef}
          className="w-full flex justify-center origin-center-top"
          style={fadeInImageTransforms}
        >
          {fadeInImage}
        </motion.div>
        <motion.div className="relative origin-center-top" style={sectionHeadingTransforms}>
          <SectionHeading heading={contentTitle} />
        </motion.div>
      </motion.div>
      <motion.div style={{}}>
        <DesignAdvertisementHeader targetCustomers={targetCustomers} />
      </motion.div>
      <motion.div className="relative" style={mainContentCardTransforms}>
        <MainContentCard mainContentDescription={mainContentDescription}>
          <IndexGradientBorderButtonLongArrow
            theme="light"
            addedFlexClasses="justify-center"
            widthClass="w-full"
          >
            {navigation}
          </IndexGradientBorderButtonLongArrow>
        </MainContentCard>
      </motion.div>
    </>
  );
}

AnimatedSectionContentMobile.propTypes = {
  fadeInImage: PropTypes.node.isRequired,
  contentTitle: PropTypes.string.isRequired,
  targetCustomers: PropTypes.arrayOf(PropTypes.string),
  mainContentDescription: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    tabledConcepts: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string,
      })
    ),
  }).isRequired,
  navigation: PropTypes.string.isRequired,
};

AnimatedSectionContentMobile.defaultProps = {
  targetCustomers: [],
};

export default AnimatedSectionContentMobile;
