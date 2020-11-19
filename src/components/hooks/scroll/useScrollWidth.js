import { useState, useLayoutEffect } from 'react';

function useScrollWidth(ref) {
  const [scrollWidth, setscrollWidth] = useState(0);
  useLayoutEffect(() => {
    if (ref.current) {
      setscrollWidth(ref.current?.scrollWidth);
    }
  }, [ref, ref.current?.scrollWidth]);
  return scrollWidth;
}

export default useScrollWidth;
