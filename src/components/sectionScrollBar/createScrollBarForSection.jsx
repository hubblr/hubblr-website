import React from 'react';
import SectionScrollBar from './SectionScrollBar';

function createScrollBarForSection(sectionType) {
  let upperFlexGrow;
  let lowerFlexGrow;
  let lowerClassNames;
  switch (sectionType) {
    case 'last':
      upperFlexGrow = 1;
      lowerFlexGrow = 0;
      lowerClassNames = '';
      break;
    case 'middle':
    default:
      upperFlexGrow = 1;
      lowerFlexGrow = 0;
      lowerClassNames = 'h-16';
      break;
  }
  return (
    <SectionScrollBar
      upperFlexGrow={upperFlexGrow}
      lowerFlexGrow={lowerFlexGrow}
      lowerClassNames={lowerClassNames}
    />
  );
}

export default createScrollBarForSection;
