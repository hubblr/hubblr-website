import { useState, useLayoutEffect } from 'react';

function useOffsetWidth(ref) {
  const [offsetWidth, setOffsetWidth] = useState(0);
  useLayoutEffect(() => {
    if (ref.current) {
      setOffsetWidth(ref.current.offsetWidth);
    }
  }, [ref, ref.current?.offsetWidth]);
  return offsetWidth;
}

export default useOffsetWidth;
