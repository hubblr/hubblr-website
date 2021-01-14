import { useState, useLayoutEffect } from 'react';

function useScrollWidth(ref) {
  const [scrollWidth, setScrollWidth] = useState(0);
  useLayoutEffect(() => {
    if (ref.current) {
      setScrollWidth(ref.current?.scrollWidth);
    }
  }, [ref, ref.current?.scrollWidth]);
  return scrollWidth;
}

export default useScrollWidth;
