import { useState, useRef, useLayoutEffect } from 'react';

function useClientRect(givenRef) {
  const ref = givenRef || useRef();
  const [dimensions, setDimensions] = useState({});
  useLayoutEffect(() => {
    if (ref.current) {
      setDimensions(ref.current.getBoundingClientRect());
    }
  }, [ref.current]);

  return [ref, dimensions];
}

export default useClientRect;
