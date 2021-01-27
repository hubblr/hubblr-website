import React, { useContext } from 'react';
import { AccordionSectionContext } from '@hubblr/react-side-content-accordion';
import shortArrowUpBlack from '../../../images/shortArrow/short-arrow-up-black.svg';

function SoftwareLaboratoryFlipArrow() {
  const { isExpanded } = useContext(AccordionSectionContext);
  const transform = isExpanded ? {} : { transform: 'rotate(-180deg)' };

  return (
    <img
      style={transform}
      className="transform-arrow w-23 h-auto mt-1"
      src={shortArrowUpBlack}
      alt="arrow"
    />
  );
}

export default SoftwareLaboratoryFlipArrow;
