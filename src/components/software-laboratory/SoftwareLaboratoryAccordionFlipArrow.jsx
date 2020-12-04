import React from 'react';
import { SiteContentAccordionContent } from '../../accordion';
import shortArrowUpBlack from '../../images/shortArrow/short-arrow-up-black.svg';
import shortArrowDownBlack from '../../images/shortArrow/short-arrow-down-black.svg';

function SoftwareLaboratoryFlipArrow() {
  return (
    <>
      <SiteContentAccordionContent className="mt-1 w-10 h-auto">
        <img className="w-full h-full" src={shortArrowUpBlack} alt="arrow down" />
      </SiteContentAccordionContent>
      <SiteContentAccordionContent className="mt-1 w-10 h-auto" showWhenOpen={false}>
        <img className="w-full h-full" src={shortArrowDownBlack} alt="arrow up" />
      </SiteContentAccordionContent>
    </>
  );
}

export default SoftwareLaboratoryFlipArrow;
