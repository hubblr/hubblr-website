import { useRef } from 'react';
import { useTransform, useViewportScroll } from 'framer-motion';
import useYPositions from './useYPositions';

function useCreateTransformsFromDescription(animationAreaHeight, transformDescription, givenRef) {
  const fullSectionRef = givenRef || useRef();
  // preparation
  const { scrollY } = useViewportScroll();
  const [animationAreaStartY] = useYPositions(fullSectionRef);
  const animationAreaStep = animationAreaHeight / 100;

  // create the transforms
  const transforms = {};
  Object.entries(transformDescription).forEach(([key, propDescriptions]) => {
    const propTransforms = {};
    Object.entries(propDescriptions).forEach(([prop, { inputPercentages, outputRange }]) => {
      const inputBreakpoints = inputPercentages.map((percentage) => {
        return animationAreaStartY + animationAreaStep * percentage;
      });
      propTransforms[prop] = useTransform(scrollY, inputBreakpoints, outputRange);
    });
    transforms[key] = propTransforms;
  });
  return transforms;
}

export default useCreateTransformsFromDescription;
