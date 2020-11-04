import { useState, useLayoutEffect } from 'react';

function useClientRect(ref) {
  const [dimensions, setDimensions] = useState({});
  useLayoutEffect(() => {
    if (ref.current) {
      setDimensions(ref.current.getBoundingClientRect());
    }
  }, [ref]);

  return dimensions;
}

export default useClientRect;
