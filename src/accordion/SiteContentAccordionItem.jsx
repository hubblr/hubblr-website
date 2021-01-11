import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import SiteContentAccordionContext from './SiteContentAccordionContext';
import SiteContentAccordionItemContext from './SiteContentAccordionItemContext';

function SiteContentAccordionItem({ children, className, isFirstSection }) {
  const isFirstRender = useRef(true);
  if (isFirstRender.current) {
    console.log('FIRST ITEM RENDER!');
  }
  const { openSections } = useContext(SiteContentAccordionContext);

  const uuidRef = useRef(uuidv4());
  const uuid = uuidRef.current;
  const sectionIsOpen = (isFirstRender.current && isFirstSection) || openSections.includes(uuid);

  const { setFirstSectionUuid } = useContext(SiteContentAccordionContext);
  useEffect(() => {
    if (isFirstSection && uuidRef.current) {
      setFirstSectionUuid(uuidRef.current);
    }
  }, [isFirstSection, setFirstSectionUuid, uuidRef]);
  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return (
    <SiteContentAccordionItemContext.Provider value={{ sectionIsOpen, uuid }}>
      <div className={className}>{children}</div>
    </SiteContentAccordionItemContext.Provider>
  );
}

SiteContentAccordionItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isFirstSection: PropTypes.bool,
};

SiteContentAccordionItem.defaultProps = {
  className: '',
  isFirstSection: false,
};

export default SiteContentAccordionItem;
