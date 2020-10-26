import { useLayoutEffect, useState } from 'react';

function useYPositions(ref) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  useLayoutEffect(() => {
    setStart(ref.current.offsetTop);
    const { height } = ref.current.getBoundingClientRect();
    setEnd(start + height);
  });
  return [start, end];
}

export default useYPositions;
