import React, { forwardRef, useLayoutEffect, useRef, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import SectionHeading from '../pageMainContent/SectionHeading';
import MainContentCard from '../pageMainContent/MainContentCard';
import IndexGradientBorderButtonLongArrow from '../gradientBorderButtons/IndexGradientBorderButtonLongArrow';
import createScrollBarForSection from '../sectionScrollBar/createScrollBarForSection';
import useYPositions from '../hooks/scroll/useYPositions';
import IndexPageContext from '../../context/IndexPageContext';
import useWindowSize from '../hooks/window/useWindowSize';
import { desktopScrollAnimations } from '../../animation/scrollAnimationDescriptions';

const AnimatedSectionDesktop = forwardRef(
  ({ sectionType, fadeInImage, contentTitle, mainContentDescription, navigation }, refs) => {
    // break down provided refs
    let { fullSectionRef, contentContainerRef } = refs;
    fullSectionRef = fullSectionRef || useRef();
    contentContainerRef = contentContainerRef || useRef();
    // get required dimension info
    const [, windowHeight] = useWindowSize();
    const { animationAreaHeight } = desktopScrollAnimations;
    const animationAreaStep = animationAreaHeight / 100;
    const paddingTop = useContext(IndexPageContext);

    // derive the full section height
    const [fullSectionHeight, setFullSectionHeight] = useState(0);
    useLayoutEffect(() => {
      if (contentContainerRef.current) {
        const { height: containerHeight } = contentContainerRef.current.getBoundingClientRect();
        setFullSectionHeight(Math.round(containerHeight + animationAreaHeight));
      }
    });

    // finish scroll animation info: calculate top offsets of sectionHeading at start of animation
    const [topOffsetSectionHeading, setTopOffsetSectionHeading] = useState(0);
    const sectionHeadingRef = useRef();
    useLayoutEffect(() => {
      if (sectionHeadingRef.current) {
        const { height: sectionHeadingHeight } = sectionHeadingRef.current.getBoundingClientRect();
        const sectionHeadingOffset = windowHeight / 2 - paddingTop - sectionHeadingHeight / 2;
        setTopOffsetSectionHeading(sectionHeadingOffset);
      }
    });
    desktopScrollAnimations.sectionHeading.top.outputRange = [
      `${topOffsetSectionHeading || '0'} px`,
      '0px',
    ];

    // create transforms based on description
    const [animationAreaStartY] = useYPositions(fullSectionRef);
    const { scrollY } = useViewportScroll();
    const transforms = {};
    Object.entries(desktopScrollAnimations).forEach(([key, propDescriptions]) => {
      const propTransforms = {};
      Object.entries(propDescriptions).forEach(([prop, { inputPercentages, outputRange }]) => {
        const inputBreakpoints = inputPercentages.map((percentage) => {
          return animationAreaStartY + animationAreaStep * percentage;
        });
        propTransforms[prop] = useTransform(scrollY, inputBreakpoints, outputRange);
      });
      transforms[key] = propTransforms;
    });

    return (
      <div className="relative z-10" ref={fullSectionRef} style={{ height: fullSectionHeight }}>
        <div
          ref={contentContainerRef}
          className="sticky top-0  w-full flex flex-col items-center"
          style={{ paddingTop }}
        >
          <div className="w-10/12 max-w-6xl">
            <motion.div className="relative z-10" style={transforms.sectionHeading}>
              <SectionHeading ref={sectionHeadingRef} heading={contentTitle} />
            </motion.div>
            <motion.div
              className="flex flex-col items-center mt-4"
              style={transforms.mainContentCard}
            >
              <MainContentCard conceptCardDescription={mainContentDescription} />
              <div className="mb-4">
                <IndexGradientBorderButtonLongArrow theme="light">
                  {navigation}
                </IndexGradientBorderButtonLongArrow>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="absolute -z-10 w-full h-screen transform inset-0 flex justify-center items-center"
            style={{
              ...transforms.fadeInImage,
            }}
          >
            {fadeInImage}
          </motion.div>
        </div>
        <div className="absolute h-full inset-0">{createScrollBarForSection(sectionType)}</div>
      </div>
    );
  }
);

AnimatedSectionDesktop.propTypes = {
  sectionType: PropTypes.oneOf(['middle', 'last']),
  fadeInImage: PropTypes.node.isRequired,
  contentTitle: PropTypes.string.isRequired,
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
};

export default AnimatedSectionDesktop;
