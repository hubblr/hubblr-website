import { useLayoutEffect, useState } from 'react';

function useWindowResizeInfo() {
  const [windowInfo, setWindowInfo] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    function updateSize() {
      setWindowInfo({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return windowInfo;
}

export default useWindowResizeInfo;
