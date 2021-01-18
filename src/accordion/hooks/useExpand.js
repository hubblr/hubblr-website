import { useCallback } from 'react';
import { v4 as uuid } from 'uuid';

/**
 * Hook to trigger JS functions to set off CSS based height transitions for a section text
 * expansion.
 *
 * @param elRef - React ref to the DOM element containing the section text
 * @param opRef - React ref to track currently active operation on the section text
 * @param heightSetter {function} - function to commit height to state
 * @returns {function} - callback to expand the section text
 */
function useExpand(elRef, opRef, heightSetter) {
  return useCallback(() => {
    const el = elRef.current;
    if (!el || el.clientHeight !== 0) {
      return;
    }
    // assign unique id to this operation
    const opId = uuid();
    // eslint-disable-next-line no-param-reassign
    opRef.current = opId;
    // trigger transition
    heightSetter(`${el.scrollHeight}px`);
    // after transition: remove fixed height to allow section to scale by its content. This WILL be
    // triggered on the end of ANY transition, necessitating the opId check below
    el.addEventListener('transitionend', function listen(e) {
      el.removeEventListener('transitionend', listen);
      // prevent race condition: only proceed if no other operation was called after initial setup
      if (e.type === 'transitionend' && opRef.current === opId) {
        heightSetter(null);
      }
    });
  }, [elRef, heightSetter, opRef]);
}

export default useExpand;
