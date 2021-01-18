import { useCallback } from 'react';
import { v4 as uuid } from 'uuid';

/**
 * Hook to trigger JS functions to set off CSS based height transitions for a section text collapse.
 *
 * @param elRef - React ref to the DOM element containing the section text
 * @param opRef - React ref to track currently active operation on the section text
 * @param heightSetter {function} - function to commit height to state
 * @returns {function} - callback to collapse the section text
 */
function useCollapse(elRef, opRef, heightSetter) {
  return useCallback(() => {
    const el = elRef.current;
    if (!el || el.clientHeight === 0) {
      return;
    }
    requestAnimationFrame(() => {
      // assign unique id to this operation
      const opId = uuid();
      // eslint-disable-next-line no-param-reassign
      opRef.current = opId;
      // assign an explicit height to section to make transition possible
      heightSetter(`${el.scrollHeight}px`);
      requestAnimationFrame(() => {
        // prevent race condition: only proceed if no other operation was called after initial setup
        if (opRef.current === opId) {
          // trigger transition
          heightSetter('0px');
        }
      });
    });
  }, [elRef, heightSetter, opRef]);
}

export default useCollapse;
