import { useLayoutEffect, useState } from 'react';

function useWindowPageYOffset() {
  const [windowPageYOffset, setWindowPageYOffset] = useState(0);
  useLayoutEffect(() => {
    const { pageYOffset } = window;
    setWindowPageYOffset(pageYOffset);
  });
  return windowPageYOffset;
}

export default useWindowPageYOffset;
