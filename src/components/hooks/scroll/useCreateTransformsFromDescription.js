import { useTransform, useViewportScroll } from 'framer-motion';
import useYPositions from './useYPositions';

function useCreateTransformsFromDescriptions(animationAreaRef, animationDescriptions) {
  const { scrollY } = useViewportScroll();
  const [animationAreaStartY, sectionEndY] = useYPositions(animationAreaRef);
  const animationAreaEndY = sectionEndY - window.innerHeight;
  const step = (animationAreaEndY - animationAreaStartY) / 100;

  const allTransforms = {};
  Object.entries(animationDescriptions).forEach(([key, propDescriptions]) => {
    const propTransforms = {};
    Object.entries(propDescriptions).forEach(([prop, { inputPercentages, outputRange }]) => {
      const inputBreakpoints = inputPercentages.map((percentage) => {
        return animationAreaStartY + step * percentage;
      });
      propTransforms[prop] = useTransform(scrollY, inputBreakpoints, outputRange);
    });
    allTransforms[key] = propTransforms;
  });
  return allTransforms;
}

export default useCreateTransformsFromDescriptions;
