import { useState, useLayoutEffect } from 'react';

function useClientWidth(ref) {
  const [clientWidth, setClientWidth] = useState(0);
  useLayoutEffect(() => {
    if (ref.current) {
      setClientWidth(ref.current.clientWidth);
    }
  }, [ref, ref.current?.clientWidth]);
  return clientWidth;
}

export default useClientWidth;
