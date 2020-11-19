import { useCallback, useLayoutEffect, useState } from 'react';

function useIsPageScrolled() {
  const [isPageScrolled, setIsScrolled] = useState(false);
  const checkScroll = useCallback(() => {
    setIsScrolled(window.pageYOffset > 0);
  }, []);
  useLayoutEffect(() => {
    checkScroll();
  }, [checkScroll]);
  useLayoutEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [checkScroll]);
  return isPageScrolled;
}

export default useIsPageScrolled;
