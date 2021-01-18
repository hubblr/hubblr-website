import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import AccordionContext from './context/AccordionContext';
import AccordionSectionContext from './context/AccordionSectionContext';

/** Container for the content of one accordion section. Passes in an AccordionSectionContext the
 * unique ID of this section and information whether the section is currently regarded as 'open'
 * or 'closed'. Components which may consume this context are AccordionSectionHeader and
 * AccordionSectionTextContent components. To be contained somewhere beneath the main Accordion
 * component */
function AccordionSection({ children, className, initiallyOpen }) {
  // generate a unique uuid for this section which is reused on every render
  const uuidRef = useRef(uuidv4());
  const uuid = uuidRef.current;

  // check if section is considered open (passed in item context)
  const firstRenderRef = useRef(true);
  const { openSections, changeSectionStatus } = useContext(AccordionContext);
  // second condition here allows initial render of open section without transition effects
  const isOpen = openSections.includes(uuid) || (firstRenderRef.current && initiallyOpen);

  // after first render: mark section as open if necessary
  useEffect(() => {
    if (initiallyOpen) {
      changeSectionStatus(uuid);
    }
    firstRenderRef.current = false;
  }, []);

  return (
    <AccordionSectionContext.Provider value={{ isOpen, uuid }}>
      <div className={className}>{children}</div>
    </AccordionSectionContext.Provider>
  );
}

AccordionSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  initiallyOpen: PropTypes.bool,
};

AccordionSection.defaultProps = {
  className: '',
  initiallyOpen: false,
};

export default AccordionSection;
