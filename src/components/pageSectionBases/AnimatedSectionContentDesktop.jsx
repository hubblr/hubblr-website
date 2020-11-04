import React, { useContext, useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import AnimationAreaContext from '../../context/AnimationAreaContext';
import SectionHeading from '../pageMainContent/SectionHeading';
import DesignAdvertisementHeader from '../pageMainContent/DesignAdvertisementHeader';
import MainContentCard from '../pageMainContent/MainContentCard';
import IndexGradientBorderButtonLongArrow from '../gradientBorderButtons/IndexGradientBorderButtonLongArrow';
import { desktopScrollAnimations } from '../../animation/scrollAnimationDescriptionDesktop';
import useCreateTransformFromDescription from '../hooks/scroll/useCreateTransformFromDescription';
import useWindowSize from '../hooks/window/useWindowSize';
import usePaddingTop from '../hooks/styleQueries/usePaddingTop';

function AnimatedSectionContentDesktop({
  contentTitle,
  targetCustomers,
  mainContentDescription,
  navigation,
  fadeInImage,
}) {
  const { animationAreaStartY, animationAreaStep, contentContainerRef } = useContext(
    AnimationAreaContext
  );
  const [, windowHeight] = useWindowSize();
  const paddingTop = usePaddingTop(contentContainerRef);

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
      <div className="w-10/12 max-w-6xl">
        <motion.div className="relative z-10" style={sectionHeadingTransforms}>
          <SectionHeading ref={sectionHeadingRef} heading={contentTitle} />
        </motion.div>
        <motion.div className="flex flex-col items-center mt-4" style={mainContentCardTransforms}>
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
    </>
  );
}

AnimatedSectionContentDesktop.propTypes = {
  // sectionType: PropTypes.oneOf(['middle', 'last']),
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

AnimatedSectionContentDesktop.defaultProps = {
  // sectionType: 'middle',
  targetCustomers: [],
};

export default AnimatedSectionContentDesktop;
