import React, { forwardRef, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import SectionHeading from '../pageMainContent/SectionHeading';
// import DesignAdvertisementHeader from '../pageMainContent/DesignAdvertisementHeader';
import MainContentCard from '../pageMainContent/MainContentCard';
import IndexGradientBorderButtonLongArrow from '../gradientBorderButtons/IndexGradientBorderButtonLongArrow';
import HubblrPageLinks from '../links/HubblrPageLinks';
import ArrowImageDownDouble from '../imageComponents/ArrowImageDownDouble';
import mobileScrollAnimations from '../../animation/scrollAnimationDescriptionMobile';
import useFullScrollSectionHeight from '../hooks/scroll/useFullScrollSectionHeight';
import IndexPageContext from '../../context/IndexPageContext';
import useClientHeight from '../hooks/dimensions/useClientHeight';
import useCreateTransformsFromDescription from '../hooks/scroll/useCreateTransformsFromDescription';
// import usePaddingTop from '../hooks/dimensions/usePaddingTop';

const AnimatedSectionMobile = forwardRef(
  (
    // eslint-disable-next-line no-unused-vars
    { sectionType, fadeInImage, contentTitle, targetCustomers, mainContentDescription, navigation },
    { fullSectionRef = useRef(), contentContainerRef = useRef }
  ) => {
    const { navBarSizeClass } = useContext(IndexPageContext);
    // const [paddingTop] = usePaddingTop(contentContainerRef);
    const { animationAreaHeight } = mobileScrollAnimations;
    const fullSectionHeight = useFullScrollSectionHeight(animationAreaHeight, contentContainerRef);

    // finish transform descriptions
    const [imageWrapperHeight, imageWrapperRef] = useClientHeight();
    mobileScrollAnimations.transforms.sectionHeading.marginTop.outputRange = [
      '0',
      `-${imageWrapperHeight / 2}px`,
    ];

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
        <div
          ref={contentContainerRef}
          className={`sticky top-0 w-full flex flex-col items-center pt-${navBarSizeClass}`}
        >
          <motion.div className="w-1/2" style={transforms.initialContent}>
            <div ref={imageWrapperRef} className="w-full flex justify-center">
              {fadeInImage}
            </div>
            <motion.div style={transforms.sectionHeading}>
              <SectionHeading heading={contentTitle} />
            </motion.div>
          </motion.div>
          {/* <DesignAdvertisementHeader targetCustomers={targetCustomers} /> */}
          <MainContentCard mainContentDescription={mainContentDescription}>
            <IndexGradientBorderButtonLongArrow
              theme="light"
              addedFlexClasses="justify-center"
              widthClass="w-full"
            >
              {navigation}
            </IndexGradientBorderButtonLongArrow>
          </MainContentCard>
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
