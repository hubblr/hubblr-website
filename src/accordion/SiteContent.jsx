import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import SiteContentAccordionContext from './SiteContentAccordionContext';
import SiteContentAccordionItemContext from './SiteContentAccordionItemContext';

function SiteContent({ children }) {
  const { openSections, setSiteContent } = useContext(SiteContentAccordionContext);
  const { uuid } = useContext(SiteContentAccordionItemContext);
  useEffect(() => {
    if (openSections.includes(uuid)) {
      setSiteContent(children);
    }
  }, [children, openSections, setSiteContent, uuid]);
  return null;
}

SiteContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SiteContent;
