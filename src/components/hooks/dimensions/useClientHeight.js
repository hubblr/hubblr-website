import { useState, useRef, useLayoutEffect } from 'react';

function useClientHeight(givenRef) {
  const ref = givenRef || useRef();
  const [clientHeight, setClientHeight] = useState(0);
  useLayoutEffect(() => {
    if (ref.current) {
      setClientHeight(ref.current.clientHeight);
    }
  }, [ref.current, ref.current?.clientHeight]);
  return [clientHeight, ref];
}

export default useClientHeight;
