import { useState, useRef, useLayoutEffect } from 'react';

function useBoundingClientRect(givenRef) {
  const ref = givenRef || useRef();
  const [boundingClient, setBoundingClient] = useState();
  useLayoutEffect(() => {
    if (ref.current) {
      setBoundingClient(ref.current.getBoundingClientRect());
    }
  }, [ref, ref.current, ref.current?.getBoundingClientRect()]);
  return boundingClient;
}

export default useBoundingClientRect;
