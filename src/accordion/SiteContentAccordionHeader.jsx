import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SiteContentAccordionContext from './SiteContentAccordionContext';
import SiteContentAccordionItemContext from './SiteContentAccordionItemContext';

function SiteContentAccordionHeader({ children, className }) {
  const { changeSectionStatus } = useContext(SiteContentAccordionContext);
  const { uuid } = useContext(SiteContentAccordionItemContext);

  return (
    <button className={className} type="button" onClick={() => changeSectionStatus(uuid)}>
      {children}
    </button>
  );
}

SiteContentAccordionHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

SiteContentAccordionHeader.defaultProps = {
  className: '',
};

export default SiteContentAccordionHeader;
