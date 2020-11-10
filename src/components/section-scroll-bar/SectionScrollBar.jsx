import React from 'react';
import PropTypes from 'prop-types';
import SectionScrollBarBase from './SectionScrollBarBase';

function SectionScrollBar({ sectionType }) {
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
    <SectionScrollBarBase
      upperFlexGrow={upperFlexGrow}
      lowerFlexGrow={lowerFlexGrow}
      lowerClassNames={lowerClassNames}
    />
  );
}

SectionScrollBar.propTypes = {
  sectionType: PropTypes.oneOf(['middle', 'last']),
};

SectionScrollBar.defaultProps = {
  sectionType: 'middle',
};

export default SectionScrollBar;
