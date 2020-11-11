import { useLayoutEffect, useState } from 'react';

function useWindowPageYOffset() {
  const [windowPageYOffset, setWindowPageYOffset] = useState(0);
  const { pageYOffset } = window;
  useLayoutEffect(() => {
    setWindowPageYOffset(pageYOffset);
  }, [pageYOffset]);
  return windowPageYOffset;
}

export default useWindowPageYOffset;
