import { useState, useLayoutEffect } from 'react';

function useClientHeight(ref) {
  const [clientHeight, setClientHeight] = useState(0);
  useLayoutEffect(() => {
    if (ref.current) {
      setClientHeight(ref.current?.clientHeight);
    }
  }, [ref, ref.current?.clientHeight]);
  return clientHeight;
}

export default useClientHeight;
