import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SiteContentAccordionContext from './SiteContentAccordionContext';

function SiteContentAccordion({ children, className, allowMultipleOpen, allowAllCollapsed }) {
  const [openSections, setOpenSections] = useState([]);
  const [firstSectionUuid, setFirstSectionUuid] = useState();
  const [sideContent, setSiteContent] = useState();

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

  useEffect(() => {
    if (!allowAllCollapsed && firstSectionUuid) {
      addOpenSection(firstSectionUuid);
    }
  }, [firstSectionUuid]);

  return (
    <SiteContentAccordionContext.Provider
      value={{
        setFirstSectionUuid,
        // setSiteContentGiven,
        setSiteContent,
        changeSectionStatus,
        openSections,
        sideContent,
      }}
    >
      <div className={className}>{children}</div>
    </SiteContentAccordionContext.Provider>
  );
}

SiteContentAccordion.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  allowMultipleOpen: PropTypes.bool,
  allowAllCollapsed: PropTypes.bool,
};

SiteContentAccordion.defaultProps = {
  className: '',
  allowMultipleOpen: false,
  allowAllCollapsed: false,
};

export default SiteContentAccordion;
