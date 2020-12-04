import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import SiteContentAccordionContext from './SiteContentAccordionContext';
import SiteContentAccordionItemContext from './SiteContentAccordionItemContext';
import useScrollHeight from '../components/hooks/scroll/useScrollHeight';

function SiteContentAccordionContent({ children, className, showWhenOpen }) {
  const contentRef = useRef();
  const contentScrollHeight = useScrollHeight(contentRef);

  const { openSections } = useContext(SiteContentAccordionContext);
  const { uuid } = useContext(SiteContentAccordionItemContext);
  const style = {
    overflow: 'hidden',
  };
  const sectionIsOpen = openSections.includes(uuid);
  if (sectionIsOpen !== showWhenOpen) {
    style.maxHeight = '0px';
  } else {
    style.maxHeight = `${contentScrollHeight}px`;
  }
  return (
    <div ref={contentRef} className={className} style={style}>
      {children}
    </div>
  );
}

SiteContentAccordionContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  showWhenOpen: PropTypes.bool, // otherwise shows when collapsed
};

SiteContentAccordionContent.defaultProps = {
  className: '',
  showWhenOpen: true,
};

export default SiteContentAccordionContent;
