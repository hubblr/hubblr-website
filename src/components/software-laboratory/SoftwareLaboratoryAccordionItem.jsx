import React from 'react';
import PropTypes from 'prop-types';
import {
  SiteContent,
  SiteContentAccordionContent,
  SiteContentAccordionHeader,
  SiteContentAccordionItem,
} from '../../accordion';
import SoftwareLaboratoryFlipArrow from './SoftwareLaboratoryAccordionFlipArrow';

function SoftwareLaboratoryAccordionItem({ header, content, sideContent, ...rest }) {
  return (
    <SiteContentAccordionItem
      {...rest}
      className="grid accordion-item"
      style={{ gridTemplateColumns: 'max-content 1fr' }}
    >
      <SiteContentAccordionHeader className="flex flex-col accordion-heading">
        <div className="mr-3">
          <SoftwareLaboratoryFlipArrow />
        </div>
      </SiteContentAccordionHeader>
      <SiteContentAccordionHeader className="accordion-heading">
        {header}
      </SiteContentAccordionHeader>

      <SiteContentAccordionContent className="col-start-2 accordion-content">
        {content}
      </SiteContentAccordionContent>
      <SiteContent>{sideContent}</SiteContent>
    </SiteContentAccordionItem>
  );
}

SoftwareLaboratoryAccordionItem.propTypes = {
  header: PropTypes.node.isRequired,
  content: PropTypes.node,
  sideContent: PropTypes.node,
};

SoftwareLaboratoryAccordionItem.defaultProps = {
  content: null,
  sideContent: null,
};

export default SoftwareLaboratoryAccordionItem;
