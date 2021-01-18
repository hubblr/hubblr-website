import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AccordionContext from './context/AccordionContext';
import AccordionSectionContext from './context/AccordionSectionContext';

/** Button to switch open/closed state of an accordion section. To be contained somewhere beneath an
 * AccordionSection component. */
function AccordionSectionHeader({ children, className }) {
  const { changeSectionStatus } = useContext(AccordionContext);
  const { uuid } = useContext(AccordionSectionContext);

  return (
    <button className={className} type="button" onClick={() => changeSectionStatus(uuid)}>
      {children}
    </button>
  );
}

AccordionSectionHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

AccordionSectionHeader.defaultProps = {
  className: '',
};

export default AccordionSectionHeader;
