import React, { forwardRef, useRef } from 'react';
import PropTypes from 'prop-types';
import SectionHeading from '../pageMainContent/SectionHeading';
import DesignAdvertisementHeader from '../pageMainContent/DesignAdvertisementHeader';
import MainContentCard from '../pageMainContent/MainContentCard';
import IndexGradientBorderButtonLongArrow from '../gradientBorderButtons/IndexGradientBorderButtonLongArrow';
import HubblrPageLinks from '../links/HubblrPageLinks';
import ArrowImageDownDouble from '../imageComponents/ArrowImageDownDouble';
import mobileScrollAnimations from '../../animation/scrollAnimationDescriptionMobile';
import useFullScrollSectionHeight from '../hooks/scroll/useFullScrollSectionHeight';

const AnimatedSectionMobile = forwardRef(
  (
    // eslint-disable-next-line no-unused-vars
    { sectionType, fadeInImage, contentTitle, targetCustomers, mainContentDescription, navigation },
    { fullSectionRef = useRef(), contentContainerRef = useRef }
  ) => {
    const { animationAreaHeight } = mobileScrollAnimations;
    const fullSectionHeight = useFullScrollSectionHeight(animationAreaHeight, contentContainerRef);

    return (
      <div
        className="relative"
        ref={fullSectionRef}
        style={{
          height: fullSectionHeight,
        }}
      >
        <div ref={contentContainerRef} className="sticky top-0 w-full flex flex-col items-center">
          <div className="relative w-1/2 pt-10">
            <SectionHeading heading={contentTitle} />
            <div className="absolute -z-10 inset-0 flex justify-center items-start">
              {fadeInImage}
            </div>
          </div>
          <DesignAdvertisementHeader targetCustomers={targetCustomers} />
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
