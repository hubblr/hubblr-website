import React from 'react';
import PropTypes from 'prop-types';

import SectionScrollBarLine from './SectionScrollBarLine';
import ArrowImageDownDouble from '../imageComponents/ArrowImageDownDouble';

function SectionScrollBar({ upperFlexGrow, lowerFlexGrow, upperClassNames, lowerClassNames }) {
  const arrowImages =
    lowerFlexGrow || lowerClassNames ? (
      <ArrowImageDownDouble widthClass="w-full" />
    ) : (
      <ArrowImageDownDouble widthClass="w-full" rotationDegree={180} />
    );

  return (
    <div className="h-full flex flex-col items-center w-16 gap-6">
      <div
        className={upperClassNames}
        style={{
          flexGrow: upperFlexGrow,
        }}
      >
        <SectionScrollBarLine />
      </div>

      {arrowImages}

      <div
        className={lowerClassNames}
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
  upperFlexGrow: PropTypes.number,
  lowerFlexGrow: PropTypes.number,
  upperClassNames: PropTypes.string,
  lowerClassNames: PropTypes.string,
};

SectionScrollBar.defaultProps = {
  upperFlexGrow: 0,
  lowerFlexGrow: 0,
  upperClassNames: '',
  lowerClassNames: '',
};

export default SectionScrollBar;
