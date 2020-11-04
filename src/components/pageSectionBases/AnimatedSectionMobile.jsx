import React, { forwardRef, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import SectionHeading from '../pageMainContent/SectionHeading';
import DesignAdvertisementHeader from '../pageMainContent/DesignAdvertisementHeader';
import MainContentCard from '../pageMainContent/MainContentCard';
import IndexGradientBorderButtonLongArrow from '../gradientBorderButtons/IndexGradientBorderButtonLongArrow';
import HubblrPageLinks from '../links/HubblrPageLinks';
import ArrowImageDownDouble from '../imageComponents/ArrowImageDownDouble';
import mobileScrollAnimations from '../../animation/scrollAnimationDescriptionMobile';
import useFullScrollSectionHeight from '../hooks/scroll/useFullScrollSectionHeight';
import IndexPageContext from '../../context/IndexPageContext';
import useClientHeight from '../hooks/dimensions/useClientHeight';
import useCreateTransformFromDescription from '../hooks/scroll/useCreateTransformFromDescription';
import usePaddingTop from '../hooks/styleQueries/usePaddingTop';
import useWindowSize from '../hooks/window/useWindowSize';
import useYPositions from '../hooks/scroll/useYPositions';

const AnimatedSectionMobile = forwardRef(
  (
    { sectionType, fadeInImage, contentTitle, targetCustomers, mainContentDescription, navigation },
    { fullSectionRef, contentContainerRef }
  ) => {
    console.log('force rerender');

    const { navBarSizeClass } = useContext(IndexPageContext);
    const [, windowHeight] = useWindowSize();
    const paddingTop = usePaddingTop(contentContainerRef);
    const { animationAreaHeight } = mobileScrollAnimations;
    const bufferRef = useRef();
    const fullSectionHeight = useFullScrollSectionHeight(animationAreaHeight, [
      contentContainerRef,
      bufferRef,
    ]);

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
        inputPercentages:
          mobileScrollAnimations.transforms.sectionHeading.marginTop.inputPercentages,
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
    const [animationAreaStartY] = useYPositions(fullSectionRef);
    const animationAreaStep = animationAreaHeight / 100;
    const bufferTransforms = {
      paddingBottom: useCreateTransformFromDescription(
        animationAreaStartY,
        animationAreaStep,
        mobileScrollAnimations.transforms.buffer.paddingBottom
      ),
    };
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

    return (
      <div
        className="relative"
        ref={fullSectionRef}
        style={{
          height: fullSectionHeight,
        }}
      >
        <motion.div ref={bufferRef} style={bufferTransforms} />
        <div
          ref={contentContainerRef}
          className={`overflow-hidden sticky top-0 w-full flex flex-col items-center pt-${navBarSizeClass}`}
        >
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
          {sectionType === 'last' ? (
            <HubblrPageLinks className="justify-center" />
          ) : (
            <ArrowImageDownDouble />
          )}
        </div>
      </div>
    );
  }
);

AnimatedSectionMobile.propTypes = {
  sectionType: PropTypes.oneOf(['middle', 'last']),
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

AnimatedSectionMobile.defaultProps = {
  sectionType: 'middle',
  targetCustomers: [],
};

export default AnimatedSectionMobile;
