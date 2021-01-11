import { useMemo } from 'react';

function useScrollPositionFromPercentage(animationAreaStartY, animationAreaStep, percentage) {
  const usedStartY = Number.isNaN(animationAreaStartY) ? 0 : animationAreaStartY;
  return useMemo(() => {
    return usedStartY + percentage * animationAreaStep;
  }, [animationAreaStep, percentage, usedStartY]);
}

export default useScrollPositionFromPercentage;
