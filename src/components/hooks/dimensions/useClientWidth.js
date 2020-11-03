import { useState, useRef, useLayoutEffect } from 'react';

function useClientWidth(givenRef) {
  const ref = givenRef || useRef();
  const [clientWidth, setClientWidth] = useState(0);
  useLayoutEffect(() => {
    if (ref.current) {
      console.log(ref.current);
      setClientWidth(ref.current.clientWidth);
    }
  }, [ref, ref.current, ref.current?.clientWidth]);
  return [clientWidth, ref];
}

export default useClientWidth;
