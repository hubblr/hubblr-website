import useYPositions from '../scroll/useYPositions';
import useWindowResizeInfo from '../window/useWindowResizeInfo';
import { TabletBreakpoint } from '../../../util/helpers';

function useAnimationBreakpoints(sectionRef, animationAreaHeight) {
  const { width: windowWidth, height: windowHeight } = useWindowResizeInfo();
  const [sectionStartY] = useYPositions(sectionRef);
  // base case for mobile
  let animationStartY = sectionStartY;
  let overlapHeight = 0;
  // earlier animation start on desktop
  if (windowWidth > TabletBreakpoint) {
    // start half a screen before section begin if possible without too much animation
    overlapHeight = Math.min(windowHeight / 2, animationAreaHeight / 2);
    animationStartY = sectionStartY - overlapHeight;
  }
  return {
    animationStartY,
    animationEndY: animationStartY + animationAreaHeight,
    overlapHeight,
    addedSectionHeight: animationAreaHeight - overlapHeight,
  };
}

export default useAnimationBreakpoints;
