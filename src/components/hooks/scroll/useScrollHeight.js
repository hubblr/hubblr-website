import { useState, useLayoutEffect } from 'react';

function useScrollHeight(ref) {
  const [scrollHeight, setScrollHeight] = useState(0);
  const curScrollHeight = ref.current ? ref.current?.scrollHeight : 0;
  useLayoutEffect(() => {
    if (scrollHeight !== curScrollHeight) {
      setScrollHeight(curScrollHeight);
    }
  }, [curScrollHeight, scrollHeight]);
  useLayoutEffect(() => {
    const update = () => {
      if (ref.current) {
        setScrollHeight(ref.current?.scrollHeight);
      }
    };
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [ref]);
  return scrollHeight;
}

export default useScrollHeight;
