import React, { useContext } from 'react';
import { AccordionSectionContext } from '../../../accordion';
import shortArrowUpBlack from '../../../images/shortArrow/short-arrow-up-black.svg';

function SoftwareLaboratoryFlipArrow() {
  const { isOpen } = useContext(AccordionSectionContext);
  const transform = isOpen ? {} : { transform: 'rotate(-180deg)' };

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
