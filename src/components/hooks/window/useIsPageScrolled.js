import { useState, useLayoutEffect } from 'react';

function useIsPageScrolled() {
  const [isScrolled, setIsScrolled] = useState(false);
  useLayoutEffect(() => {
    function checkScroll() {
      setIsScrolled(window.pageYOffset > 0);
    }
    checkScroll();
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);
  return isScrolled;
}

export default useIsPageScrolled;
