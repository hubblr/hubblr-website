import { useState, useRef, useLayoutEffect } from 'react';

function usePaddingTop(givenRef) {
  const ref = givenRef || useRef();
  const [paddingTop, setPaddingTop] = useState(0);
  useLayoutEffect(() => {
    if (ref.current) {
      setPaddingTop(
        parseFloat(window.getComputedStyle(ref.current, null).getPropertyValue('padding-top'))
      );
    }
  }, [ref, ref.current, ref.current?.clientHeight]);
  return [paddingTop, ref];
}

export default usePaddingTop;
