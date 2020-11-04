import React, { forwardRef, useLayoutEffect, useRef, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import SectionHeading from '../pageMainContent/SectionHeading';
import DesignAdvertisementHeader from '../pageMainContent/DesignAdvertisementHeader';
import MainContentCard from '../pageMainContent/MainContentCard';
import IndexGradientBorderButtonLongArrow from '../gradientBorderButtons/IndexGradientBorderButtonLongArrow';
import createScrollBarForSection from '../sectionScrollBar/createScrollBarForSection';
import useCreateTransformFromDescription from '../hooks/scroll/useCreateTransformFromDescription';
import IndexPageContext from '../../context/IndexPageContext';
import useWindowSize from '../hooks/window/useWindowSize';
import useFullScrollSectionHeight from '../hooks/scroll/useFullScrollSectionHeight';
import usePaddingTop from '../hooks/styleQueries/usePaddingTop';
import { desktopScrollAnimations } from '../../animation/scrollAnimationDescriptionDesktop';
import HubblrPageLinks from '../links/HubblrPageLinks';
import useYPositions from '../hooks/scroll/useYPositions';

const AnimatedSectionDesktop = forwardRef(
  (
    { sectionType, fadeInImage, contentTitle, targetCustomers, mainContentDescription, navigation },
    { fullSectionRef, contentContainerRef }
  ) => {
    const { navBarSizeClass } = useContext(IndexPageContext);
    const paddingTop = usePaddingTop(contentContainerRef);
    // get required dimension info
    const [, windowHeight] = useWindowSize();
    const { animationAreaHeight } = desktopScrollAnimations;
    const [animationAreaStartY] = useYPositions(fullSectionRef);
    const animationAreaStep = animationAreaHeight / 100;

    // derive the full section height
    const fullSectionHeight = useFullScrollSectionHeight(animationAreaHeight, [
      contentContainerRef,
    ]);

    // finish scroll animation info: calculate top offsets of sectionHeading at start of animation
    const [topOffsetSectionHeading, setTopOffsetSectionHeading] = useState(0);
    const sectionHeadingRef = useRef();
    useLayoutEffect(() => {
      if (sectionHeadingRef.current) {
        const { height: sectionHeadingHeight } = sectionHeadingRef.current.getBoundingClientRect();
        const sectionHeadingOffset = windowHeight / 2 - paddingTop - sectionHeadingHeight / 2;
        setTopOffsetSectionHeading(sectionHeadingOffset);
      }
    }, [windowHeight, paddingTop]);
    desktopScrollAnimations.transforms.sectionHeading.y.outputRange = [
      `${topOffsetSectionHeading || '0'} px`,
      '0px',
    ];

    // create transforms
    const fadeInImageTransforms = {
      opacity: useCreateTransformFromDescription(
        animationAreaStartY,
        animationAreaStep,
        desktopScrollAnimations.transforms.fadeInImage.opacity
      ),
    };
    const sectionHeadingTransforms = {
      opacity: useCreateTransformFromDescription(
        animationAreaStartY,
        animationAreaStep,
        desktopScrollAnimations.transforms.sectionHeading.opacity
      ),
      scale: useCreateTransformFromDescription(
        animationAreaStartY,
        animationAreaStep,
        desktopScrollAnimations.transforms.sectionHeading.scale
      ),
      y: useCreateTransformFromDescription(
        animationAreaStartY,
        animationAreaStep,
        desktopScrollAnimations.transforms.sectionHeading.y
      ),
    };
    const mainContentCardTransforms = {
      opacity: useCreateTransformFromDescription(
        animationAreaStartY,
        animationAreaStep,
        desktopScrollAnimations.transforms.mainContentCard.opacity
      ),
    };

    return (
      <>
        <div className="relative" ref={fullSectionRef} style={{ height: fullSectionHeight }}>
          <div
            ref={contentContainerRef}
            className={`overflow-hidden relative z-40 sticky top-0  w-full flex flex-col items-center pt-${navBarSizeClass}`}
          >
            <div className="w-10/12 max-w-6xl">
              <motion.div className="relative z-10" style={sectionHeadingTransforms}>
                <SectionHeading ref={sectionHeadingRef} heading={contentTitle} />
              </motion.div>
              <motion.div
                className="flex flex-col items-center mt-4"
                style={mainContentCardTransforms}
              >
                <DesignAdvertisementHeader className="mb-6" targetCustomers={targetCustomers} />
                <MainContentCard mainContentDescription={mainContentDescription} className="mb-4" />
                <div className="mb-4">
                  <IndexGradientBorderButtonLongArrow theme="light">
                    {navigation}
                  </IndexGradientBorderButtonLongArrow>
                </div>
              </motion.div>
            </div>
            <motion.div
              className="absolute -z-10 w-full h-screen transform inset-0 flex justify-center items-center"
              style={fadeInImageTransforms}
            >
              {fadeInImage}
            </motion.div>
          </div>
          <div className="absolute h-full inset-0">{createScrollBarForSection(sectionType)}</div>
        </div>
        {sectionType === 'last' && <HubblrPageLinks />}
      </>
    );
  }
);

AnimatedSectionDesktop.propTypes = {
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

AnimatedSectionDesktop.defaultProps = {
  sectionType: 'middle',
  targetCustomers: [],
};

export default AnimatedSectionDesktop;
