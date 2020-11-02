import { useState, useLayoutEffect } from 'react';

function useFullScrollSectionHeight(animationAreaHeight, contentContainerRef) {
  const [fullSectionHeight, setFullSectionHeight] = useState(0);
  useLayoutEffect(() => {
    if (contentContainerRef.current) {
      const containerHeight = contentContainerRef.current.clientHeight;
      setFullSectionHeight(Math.round(containerHeight + animationAreaHeight));
    }
  }, [contentContainerRef, contentContainerRef.current, contentContainerRef.current?.clientHeight]);
  return fullSectionHeight;
}

export default useFullScrollSectionHeight;
