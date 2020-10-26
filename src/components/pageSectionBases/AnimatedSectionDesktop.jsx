import React, { forwardRef, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import useCreateTransformsFromDescriptions from '../hooks/scroll/useCreateTransformsFromDescription';
import SectionHeading from '../pageMainContent/SectionHeading';
import MainContentCard from '../pageMainContent/MainContentCard';
import IndexGradientBorderButtonLongArrow from '../gradientBorderButtons/IndexGradientBorderButtonLongArrow';
import SectionScrollBar from '../sectionScrollBar/SectionScrollBar';

function createScrollBar(sectionType) {
  let upperFlexGrow;
  let lowerFlexGrow;
  switch (sectionType) {
    case 'last':
      upperFlexGrow = 1;
      lowerFlexGrow = 0;
      break;
    case 'middle':
    default:
      upperFlexGrow = 4;
      lowerFlexGrow = 1;
      break;
  }
  return <SectionScrollBar upperFlexGrow={upperFlexGrow} lowerFlexGrow={lowerFlexGrow} />;
}

const AnimatedSectionDesktop = forwardRef(
  (
    { sectionType, fadeInImage, contentTitle, mainContentDescription, navigation },
    fullSectionRef
  ) => {
    // create the fitting scrollbar
    const scrollBar = createScrollBar(sectionType);

    // prepare transform description
    const [topOffsetSectionHeading, setTopOffsetSectionHeading] = useState(0);
    const mainContentRef = useRef();
    const sectionHeadingRef = useRef();
    useEffect(() => {
      const mainContentHeight = mainContentRef.current?.getBoundingClientRect().height;
      const sectionHeadingHeight = sectionHeadingRef.current?.getBoundingClientRect().height;
      if (mainContentHeight && sectionHeadingHeight) {
        setTopOffsetSectionHeading(mainContentHeight / 2 - sectionHeadingHeight / 2);
      }
    }, []);

    const animationDescriptions = {
      sectionHeading: {
        opacity: {
          inputPercentages: [0, 100],
          outputRange: [0, 1],
        },
        scale: {
          inputPercentages: [0, 100],
          outputRange: [1.5, 1],
        },
        top: {
          inputPercentages: [0, 100],
          outputRange: [`${topOffsetSectionHeading || '0'} px`, '0px'],
        },
      },
    };

    // create transforms based on description
    const transforms = useCreateTransformsFromDescriptions(fullSectionRef, animationDescriptions);

    return (
      <div
        ref={fullSectionRef}
        style={{
          height: '250vh',
        }}
      >
        <div className="sticky top-0 h-screen w-full flex justify-center items-center">
          <div ref={mainContentRef} className="w-2/3 flex flex-col items-center">
            <motion.div className="relative z-10" style={transforms.sectionHeading}>
              <SectionHeading ref={sectionHeadingRef} heading={contentTitle} />
            </motion.div>
            <MainContentCard conceptCardDescription={mainContentDescription} />
            <IndexGradientBorderButtonLongArrow theme="light">
              {navigation}
            </IndexGradientBorderButtonLongArrow>
          </div>
          <div className="absolute h-full inset-0">{scrollBar}</div>
          <motion.div className="absolute -z-10 transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            {fadeInImage}
          </motion.div>
        </div>
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
