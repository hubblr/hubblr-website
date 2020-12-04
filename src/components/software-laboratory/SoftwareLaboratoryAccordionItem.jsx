import React from 'react';
import PropTypes from 'prop-types';
import {
  SiteContent,
  SiteContentAccordionContent,
  SiteContentAccordionHeader,
  SiteContentAccordionItem,
} from '../../accordion';
import shortArrowUpBlack from '../../images/shortArrow/short-arrow-up-black.svg';
import shortArrowDownBlack from '../../images/shortArrow/short-arrow-down-black.svg';

function SoftwareLaboratoryAccordionItem({ header, content, sideContent }) {
  const accordionSectionFlipArrow = (
    <div className="mr-3">
      <SiteContentAccordionContent className="mt-1 w-10 h-auto">
        <img className="w-full h-full" src={shortArrowUpBlack} alt="arrow down" />
      </SiteContentAccordionContent>
      <SiteContentAccordionContent className="mt-1 w-10 h-auto" showWhenOpen={false}>
        <img className="w-full h-full" src={shortArrowDownBlack} alt="arrow up" />
      </SiteContentAccordionContent>
    </div>
  );

  return (
    <SiteContentAccordionItem
      className="grid accordion-item"
      style={{ gridTemplateColumns: 'max-content 1fr' }}
    >
      <SiteContentAccordionHeader className="flex flex-col accordion-heading">
        {accordionSectionFlipArrow}
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
