import { useTransform, useViewportScroll } from 'framer-motion';
import useScrollPositionFromPercentage from './useScrollPositionFromPercentage';

function useCreateTransformFromDescription(
  animationAreaStartY,
  animationAreaStep,
  { inputPercentages, outputRange }
) {
  // infer input range from animation area dimensions
  const inputRangeStart = useScrollPositionFromPercentage(
    animationAreaStartY,
    animationAreaStep,
    inputPercentages[0]
  );
  const inputRangeEnd = useScrollPositionFromPercentage(
    animationAreaStartY,
    animationAreaStep,
    inputPercentages[1]
  );
  const inputRange = [inputRangeStart, inputRangeEnd];

  // create the transform
  const { scrollY } = useViewportScroll();
  return useTransform(scrollY, inputRange, outputRange);
}

export default useCreateTransformFromDescription;
