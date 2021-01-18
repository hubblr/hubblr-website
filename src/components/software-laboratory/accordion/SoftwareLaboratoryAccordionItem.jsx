import React from 'react';
import PropTypes from 'prop-types';
import {
  AccordionSideContent,
  AccordionSectionTextContent,
  AccordionSectionHeader,
  AccordionSection,
} from '../../../accordion';
import SoftwareLaboratoryFlipArrow from './SoftwareLaboratoryAccordionFlipArrow';

function SoftwareLaboratoryAccordionItem({ header, content, sideContent, initiallyOpen }) {
  return (
    <AccordionSection
      initiallyOpen={initiallyOpen}
      className="grid accordion-item"
      style={{ gridTemplateColumns: 'max-content 1fr' }}
    >
      <AccordionSectionHeader className="flex flex-col accordion-heading">
        <div className="mr-3">
          <SoftwareLaboratoryFlipArrow />
        </div>
      </AccordionSectionHeader>
      <AccordionSectionHeader className="accordion-heading">{header}</AccordionSectionHeader>

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
  initiallyOpen: PropTypes.bool,
};

SoftwareLaboratoryAccordionItem.defaultProps = {
  content: null,
  sideContent: null,
  initiallyOpen: false,
};

export default SoftwareLaboratoryAccordionItem;
