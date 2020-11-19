import { useState, useLayoutEffect } from 'react';

function usePaddingTop(ref) {
  const [paddingTop, setPaddingTop] = useState(0);
  useLayoutEffect(() => {
    if (ref.current) {
      setPaddingTop(
        parseFloat(window.getComputedStyle(ref.current, null).getPropertyValue('padding-top'))
      );
    }
  }, [ref, ref.current?.clientHeight]);
  return paddingTop;
}

export default usePaddingTop;
