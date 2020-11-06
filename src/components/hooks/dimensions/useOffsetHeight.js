import { useState, useLayoutEffect } from 'react';

function useOffsetHeight(ref) {
  const [offsetHeight, setoffsetHeight] = useState(0);
  useLayoutEffect(() => {
    if (ref.current) {
      setoffsetHeight(ref.current?.offsetHeight);
    }
  }, [ref, ref.current?.offsetHeight]);
  return offsetHeight;
}

export default useOffsetHeight;
