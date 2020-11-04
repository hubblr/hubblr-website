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
import useCreateTransformsFromDescription from '../hooks/scroll/useCreateTransformsFromDescription';
import usePaddingTop from '../hooks/styleQueries/usePaddingTop';
import useWindowSize from '../hooks/window/useWindowSize';

const AnimatedSectionMobile = forwardRef(
  (
    { sectionType, fadeInImage, contentTitle, targetCustomers, mainContentDescription, navigation },
    { fullSectionRef, contentContainerRef }
  ) => {
    const { navBarSizeClass } = useContext(IndexPageContext);
    const [, windowHeight] = useWindowSize();
    const [paddingTop] = usePaddingTop(contentContainerRef);
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
    const [imageWrapperHeight, imageWrapperRef] = useClientHeight();
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
    // TODO: fix hack
    mobileScrollAnimations.transforms.mainContentCard.y.outputRange = [
      `${usedScreenHeight / 2}px`,
      '0px',
    ];

    // create transforms
    const transforms = useCreateTransformsFromDescription(
      animationAreaHeight,
      mobileScrollAnimations.transforms,
      fullSectionRef
    );

    return (
      <div
        className="relative"
        ref={fullSectionRef}
        style={{
          height: fullSectionHeight,
        }}
      >
        <motion.div ref={bufferRef} style={transforms.buffer} />
        <div
          ref={contentContainerRef}
          className={`overflow-hidden sticky top-0 w-full flex flex-col items-center pt-${navBarSizeClass}`}
        >
          <motion.div className="relative w-1/2 flex flex-col" style={transforms.initialContent}>
            <motion.div
              ref={imageWrapperRef}
              className="w-full flex justify-center origin-center-top"
              style={transforms.fadeInImage}
            >
              {fadeInImage}
            </motion.div>
            <motion.div className="relative origin-center-top" style={transforms.sectionHeading}>
              <SectionHeading heading={contentTitle} />
            </motion.div>
          </motion.div>
          <motion.div style={transforms.designAdvertisementHeader}>
            <DesignAdvertisementHeader targetCustomers={targetCustomers} />
          </motion.div>
          <motion.div className="relative" style={transforms.mainContentCard}>
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
