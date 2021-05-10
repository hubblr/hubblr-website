import { useState, useLayoutEffect, useRef } from 'react';
import measureHiddenElement from '../../util/measureHiddenElement';

function useScrollHeightHidden(ref) {
  const [refIsSet, setRefIsSet] = useState(!!ref.current);
  const [scrollHeight, setScrollHeight] = useState(0);
  const timeout = useRef();

  const inferScrollHeight = () => {
    setScrollHeight(measureHiddenElement(ref.current, ['scrollHeight']).scrollHeight);
  };

  const createTimeout = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      if (!ref.current) {
        createTimeout();
      } else {
        setRefIsSet(true);
      }
    }, 1);
  };

  useLayoutEffect(() => {
    if (refIsSet) {
      inferScrollHeight();
    } else {
      createTimeout();
    }
  }, [createTimeout, inferScrollHeight, ref, refIsSet]);

  return scrollHeight;
}

export default useScrollHeightHidden;
