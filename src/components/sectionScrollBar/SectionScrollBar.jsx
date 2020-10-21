import React from 'react';
import PropTypes from 'prop-types';

import SectionScrollBarLine from './SectionScrollBarLine.jsx';
import ArrowImageDownDouble from '../imageComponents/ArrowImageDownDouble.jsx';

function SectionScrollBar({ upperFlexGrow, lowerFlexGrow }) {
  const arrowImages = lowerFlexGrow ? (
    <ArrowImageDownDouble widthClass="w-full" />
  ) : (
    <ArrowImageDownDouble widthClass="w-full" rotationDegree={180} />
  );

  return (
    <div className="h-full flex flex-col items-center w-16 gap-6">
      <div
        style={{
          flexGrow: upperFlexGrow,
        }}
      >
        <SectionScrollBarLine />
      </div>

      {arrowImages}

      <div
        style={{
          flexGrow: lowerFlexGrow,
        }}
      >
        <SectionScrollBarLine />
      </div>
    </div>
  );
}

SectionScrollBar.propTypes = {
  upperFlexGrow: PropTypes.number.isRequired,
  lowerFlexGrow: PropTypes.number.isRequired,
};

export default SectionScrollBar;
