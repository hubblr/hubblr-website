import { useMemo } from 'react';
import { useTransform, useViewportScroll } from 'framer-motion';

function useCreateTransformFromDescription(
  animationAreaStartY,
  animationAreaStep,
  { inputPercentages, outputRange }
) {
  // preparation
  const inputRange = useMemo(() => {
    return inputPercentages.map((percentage) => {
      return animationAreaStartY + percentage * animationAreaStep;
    });
  }, [animationAreaStartY, animationAreaStep, inputPercentages]);
  const { scrollY } = useViewportScroll();

  // create the transforms
  return useTransform(scrollY, inputRange, outputRange);
}

export default useCreateTransformFromDescription;
