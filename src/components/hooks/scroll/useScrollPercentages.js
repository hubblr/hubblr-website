import { useLayoutEffect, useState } from 'react';

function useScrollPercentages(contentRef) {
  const [scrollPercentageStart, setScrollPercentageStart] = useState(0);
  const [scrollPercentageEnd, setScrollPercentageEnd] = useState(1);
  const [scrollStep, setScrollStep] = useState(0.01);

  useLayoutEffect(() => {
    // get window + element bounding rect information
    const contentRect = contentRef.current.getBoundingClientRect();
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const offsetStart = contentRect.top + scrollY;
    const offsetEnd = offsetStart + contentRect.height;

    // calculate y-percentage start and end points
    const { clientHeight } = document.body;
    const contentScrollPercentageStart = offsetStart / clientHeight;
    const contentScrollPercentageEnd = offsetEnd / clientHeight;
    // derive 1/100 scroll step between start and end
    const contentScrollStep = (contentScrollPercentageEnd - contentScrollPercentageStart) / 100;

    // update state
    setScrollPercentageStart(contentScrollPercentageStart);
    setScrollPercentageEnd(contentScrollPercentageEnd);
    setScrollStep(contentScrollStep);
  }, [contentRef]);

  return [scrollPercentageStart, scrollPercentageEnd, scrollStep];
}

export default useScrollPercentages;
