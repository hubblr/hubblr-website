import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useViewportScroll, useTransform } from 'framer-motion';
import { arrayOfLength2 } from '../../util/propTypes';
import useYPositions from '../hooks/scroll/useYPositions';
import allPropTypes from '../../util/allPropTypes';

const AnimatedSection = forwardRef(({ children, height, animatedElements }, fullSectionRef) => {
  const { scrollY } = useViewportScroll();

  const [animationAreaStartY, sectionEndY] = useYPositions(fullSectionRef);
  const animationAreaEndY = sectionEndY - window.innerHeight;
  const step = (animationAreaEndY - animationAreaStartY) / 100;

  // const t = useTransform(scrollY, inputRange, [0, 1]);
  // const c = useTransform(scrollY, inputRange, ['#ff0000', '#ffffff']);

  animatedElements &&
    animatedElements.forEach(({ ref, animations }) => {
      animations.forEach(({ percentageBreakpoints, affectedProperties }) => {
        const [animationStartPercent, animationEndPercent] = percentageBreakpoints;
        const animationStart = animationAreaStartY + animationStartPercent * step;
        const animationEnd = animationAreaEndY + animationEndPercent * step;
        affectedProperties.forEach(({ prop, range }) => {
          useTransform();
        });
      });
    });

  return (
    <div
      ref={fullSectionRef}
      style={{
        height,
      }}
    >
      {children}
    </div>
  );
});

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string.isRequired,
  animatedElements: PropTypes.arrayOf(
    PropTypes.shape({
      ref: PropTypes.shape({ current: PropTypes.any }).isRequired,
      animations: PropTypes.arrayOf(
        PropTypes.shape({
          percentageBreakpoints: allPropTypes(PropTypes.arrayOf(PropTypes.number), arrayOfLength2)
            .isRequired,
          affectedProperties: PropTypes.arrayOf(
            PropTypes.shape({
              prop: PropTypes.string,
              range: arrayOfLength2,
            })
          ),
        })
      ).isRequired,
    })
  ),
};

AnimatedSection.defaultProps = {
  animatedElements: null,
};

export default AnimatedSection;
