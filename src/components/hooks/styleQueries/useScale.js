import { useState, useRef, useLayoutEffect } from 'react';

function useScale(givenRef) {
  const ref = givenRef || useRef();
  const [scale, setScale] = useState(1);
  useLayoutEffect(() => {
    if (ref.current) {
      const { transform } = ref.current.style;
      const match = transform.match(/scale\(([0-9]+(?:\.[0-9]+)*)\)/);
      if (match) {
        setScale(parseFloat(match[1]));
      } else {
        setScale(1);
      }
    }
  }, [ref, ref.current, ref.current?.style.transform]);
  return scale;
}

export default useScale;
