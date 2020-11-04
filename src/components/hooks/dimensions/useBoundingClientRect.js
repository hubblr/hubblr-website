import { useState, useLayoutEffect } from 'react';

function useBoundingClientRect(ref) {
  const [boundingClient, setBoundingClient] = useState();
  useLayoutEffect(() => {
    if (ref.current) {
      setBoundingClient(ref.current.getBoundingClientRect());
    }
  }, [ref, ref.current, ref.current?.getBoundingClientRect()]);
  return boundingClient;
}

export default useBoundingClientRect;
