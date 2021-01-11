import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useScrollHeight from '../../../hooks/dimensions/useScrollHeight';
import SiteContentAccordionContent from '../../../accordion/SiteContentAccordionContent';

function SoftwareLaboratoryAccordionTextContent({ children, className }) {
  const contentRef = useRef();
  const contentScrollHeight = useScrollHeight(contentRef);

  const inactiveStyles = {
    overflow: 'hidden',
    maxHeight: '0px',
  };
  const activeStyles = {
    overflow: 'hidden',
    maxHeight: `${contentScrollHeight}px`,
  };
  return (
    <SiteContentAccordionContent
      ref={contentRef}
      className={className}
      activeStyles={activeStyles}
      inactiveStyles={inactiveStyles}
    >
      {children}
    </SiteContentAccordionContent>
  );
}

SoftwareLaboratoryAccordionTextContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

SoftwareLaboratoryAccordionTextContent.defaultProps = {
  className: '',
};

export default SoftwareLaboratoryAccordionTextContent;
