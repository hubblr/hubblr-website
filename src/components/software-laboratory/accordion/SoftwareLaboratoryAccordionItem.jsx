import React from 'react';
import PropTypes from 'prop-types';
import {
  AccordionSideContent,
  AccordionSectionTextContent,
  AccordionSectionHeading,
  AccordionSection,
} from '@hubblr/react-side-content-accordion';
import SoftwareLaboratoryFlipArrow from './SoftwareLaboratoryAccordionFlipArrow';

function SoftwareLaboratoryAccordionItem({ header, content, sideContent, initiallyExpanded }) {
  return (
    <AccordionSection
      initiallyExpanded={initiallyExpanded}
      className="grid accordion-item"
      style={{ gridTemplateColumns: 'max-content 1fr' }}
    >
      <AccordionSectionHeading className="flex flex-col accordion-heading">
        <div className="mr-3">
          <SoftwareLaboratoryFlipArrow />
        </div>
      </AccordionSectionHeading>
      <AccordionSectionHeading className="accordion-heading">{header}</AccordionSectionHeading>

      <AccordionSectionTextContent className="col-start-2 accordion-text-content">
        {content}
      </AccordionSectionTextContent>
      <AccordionSideContent>{sideContent}</AccordionSideContent>
    </AccordionSection>
  );
}

SoftwareLaboratoryAccordionItem.propTypes = {
  header: PropTypes.node.isRequired,
  content: PropTypes.node,
  sideContent: PropTypes.node,
  initiallyExpanded: PropTypes.bool,
};

SoftwareLaboratoryAccordionItem.defaultProps = {
  content: null,
  sideContent: null,
  initiallyExpanded: false,
};

export default SoftwareLaboratoryAccordionItem;
