import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import AccordionContext from './context/AccordionContext';

let persistentSideContentMap = {};

/** Outermost container of the accordion. Manages the state of sections which is shared through the
 * AccordionContext. Can contain (at any depth) AccordionSection and AccordionSideContentContainer
 * components. */
function Accordion({ children, className, allowMultipleOpen, allowAllCollapsed }) {
  // control state of content: which sections are open & what site content is displayed
  const [openSections, setOpenSections] = useState([]);
  const [sideContentMap, setSideContentMap] = useState(persistentSideContentMap);
  // update side content map for next render iteration
  persistentSideContentMap = { ...sideContentMap };

  // callbacks to open/close sections
  const addOpenSection = useCallback(
    (uuid, clear = false) => {
      const newOpenSections = clear ? [] : openSections.slice();
      newOpenSections.push(uuid);
      setOpenSections(newOpenSections);
    },
    [openSections]
  );

  const removeOpenSection = useCallback(
    (remUuid) => {
      setOpenSections(openSections.filter((uuid) => uuid !== remUuid));
    },
    [openSections]
  );

  const changeSectionStatus = useCallback(
    (uuid) => {
      if (openSections.includes(uuid)) {
        if (allowAllCollapsed || openSections.length > 1) {
          removeOpenSection(uuid);
        }
      } else {
        addOpenSection(uuid, !allowMultipleOpen);
      }
    },
    [addOpenSection, allowAllCollapsed, allowMultipleOpen, openSections, removeOpenSection]
  );

  // callback to let AccordionSideContent fill children into AccordionSideContent container
  const addSideContentForSection = useCallback(
    (sideContent, uuid) => {
      // prevent dependency cycle
      if (sideContentMap[uuid] === sideContent) {
        return;
      }
      persistentSideContentMap[uuid] = sideContent;
      setSideContentMap(persistentSideContentMap);
    },
    [sideContentMap]
  );

  return (
    <AccordionContext.Provider
      value={{
        openSections,
        changeSectionStatus,
        sideContentMap,
        addSideContentForSection,
      }}
    >
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  allowMultipleOpen: PropTypes.bool,
  allowAllCollapsed: PropTypes.bool,
};

Accordion.defaultProps = {
  className: '',
  allowMultipleOpen: false,
  allowAllCollapsed: false,
};

export default Accordion;
