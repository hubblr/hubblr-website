import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import SiteContentAccordionContext from './SiteContentAccordionContext';
import SiteContentAccordionItemContext from './SiteContentAccordionItemContext';

function SiteContentAccordionItem({ children, className, isFirstSection }) {
  const uuidRef = useRef(uuidv4());

  const { setFirstSectionUuid } = useContext(SiteContentAccordionContext);
  useEffect(() => {
    if (isFirstSection && uuidRef.current) {
      setFirstSectionUuid(uuidRef.current);
    }
  }, [isFirstSection, setFirstSectionUuid, uuidRef]);

  return (
    <SiteContentAccordionItemContext.Provider value={{ uuid: uuidRef.current }}>
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
