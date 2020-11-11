import { useLayoutEffect, useState } from 'react';

function useWindowInfo() {
  const [windowInfo, setWindowInfo] = useState({ width: 0, height: 0, startY: 0 });
  useLayoutEffect(() => {
    function updateSize() {
      setWindowInfo({
        width: window.innerWidth,
        height: window.innerHeight,
        startY: window.pageYOffset,
      });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return windowInfo;
}

export default useWindowInfo;
