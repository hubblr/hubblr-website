import { useMemo } from 'react';
import { useTransform, useViewportScroll } from 'framer-motion';

function useCreateTransformFromDescription(
  animationAreaStartY,
  animationAreaStep,
  { inputPercentages, outputRange }
) {
  // infer input range from animation area dimensions
  const usedStartY = Number.isNaN(animationAreaStartY) ? 0 : animationAreaStartY;
  const inputRange = useMemo(() => {
    return inputPercentages.map((percentage) => {
      return usedStartY + percentage * animationAreaStep;
    });
  }, [animationAreaStep, inputPercentages, usedStartY]);

  // create the transforms
  const { scrollY } = useViewportScroll();
  return useTransform(scrollY, inputRange, outputRange);
}

export default useCreateTransformFromDescription;
