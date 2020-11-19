import { useState, useLayoutEffect } from 'react';

function useFullScrollSectionHeight(animationAreaHeight, contentRefs) {
  const [fullSectionHeight, setFullSectionHeight] = useState(0);
  useLayoutEffect(() => {
    const len = contentRefs.length;
    let allSet = true;
    for (let i = 0; i < len; i += 1) {
      if (!contentRefs[i].current) {
        allSet = false;
        break;
      }
    }
    if (allSet) {
      const contentHeight = contentRefs.reduce((curHeight, ref) => {
        return curHeight + Math.ceil(ref.current.clientHeight);
      }, 0);
      setFullSectionHeight(Math.ceil(contentHeight + animationAreaHeight));
    }
  }, [animationAreaHeight, contentRefs]);
  return fullSectionHeight;
}

export default useFullScrollSectionHeight;
