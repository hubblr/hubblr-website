import { useLayoutEffect } from 'react';
import { useSpring, useViewportScroll } from 'framer-motion';
import useScrollPositionFromPercentage from './useScrollPositionFromPercentage';

function useCreateSpringFromDescription(
  animationAreaStartY,
  animationAreaStep,
  { percentageBreakpoint, startValue, endValue, stiffness, damping }
) {
  const yBreakpoint = useScrollPositionFromPercentage(
    animationAreaStartY,
    animationAreaStep,
    percentageBreakpoint
  );
  const { scrollY } = useViewportScroll();
  const spring = useSpring(startValue, { stiffness, damping });
  useLayoutEffect(() => {
    scrollY.onChange((y) => {
      if (y > yBreakpoint) {
        // active state
        spring.set(endValue);
      } else {
        // inactive ("waiting") state
        spring.set(startValue);
      }
    });
  }, [endValue, scrollY, spring, startValue, yBreakpoint]);
  return spring;
}

export default useCreateSpringFromDescription;
