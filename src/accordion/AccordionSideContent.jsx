import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import AccordionContext from './context/AccordionContext';
import AccordionSectionContext from './context/AccordionSectionContext';

/** Content belonging to an accordion section to be shown 'at the side' of the accordion, i.e., not
 * within the accordion but at a possibly unrelated place. To be contained within an
 * AccordionSection component. The component is itself rendered within the
 * AccordionSideContentContainer component, which is to be inserted as a child of the Accordion
 * component itself. */
function AccordionSideContent({ children }) {
  const { addSideContentForSection } = useContext(AccordionContext);
  const { uuid } = useContext(AccordionSectionContext);
  // subscribe the side content to the main accordion state
  useEffect(() => {
    addSideContentForSection(children, uuid);
  }, [children]);
  return null;
}

AccordionSideContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AccordionSideContent;
