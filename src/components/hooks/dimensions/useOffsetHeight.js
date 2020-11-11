import { useState, useLayoutEffect } from 'react';

function useOffsetHeight(ref) {
  const [offsetHeight, setoffsetHeight] = useState(0);
  const refOffsetHeight = ref.current?.offsetHeight;
  useLayoutEffect(() => {
    if (ref.current) {
      setoffsetHeight(refOffsetHeight);
    }
  }, [ref, refOffsetHeight]);
  return offsetHeight;
}

export default useOffsetHeight;
