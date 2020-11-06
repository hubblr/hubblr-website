import { useLayoutEffect, useState } from 'react';
import useClientHeight from '../dimensions/useClientHeight';

function useYPositions(ref) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const height = useClientHeight(ref);
  const offset = ref.current?.offsetTop;

  useLayoutEffect(() => {
    if (ref.current) {
      setStart(offset);
      setEnd(start + height);
    }
  }, [height, offset, ref, start]);
  return [start, end];
}

export default useYPositions;
