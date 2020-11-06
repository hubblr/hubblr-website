import React from 'react';
import PropTypes from 'prop-types';

import SectionScrollBarLine from './SectionScrollBarLine';
import ArrowImageDownDouble from '../imageComponents/ArrowImageDownDouble';

function SectionScrollBarBase({ upperFlexGrow, lowerFlexGrow, upperClassNames, lowerClassNames }) {
  const arrowImages =
    lowerFlexGrow || lowerClassNames ? (
      <ArrowImageDownDouble widthClass="w-full" />
    ) : (
      <ArrowImageDownDouble widthClass="w-full" rotationDegree={180} />
    );

  return (
    <div className="h-full flex flex-col items-center w-10 gap-6">
      <div
        className={upperClassNames}
        style={{
          flexGrow: upperFlexGrow,
        }}
      >
        <SectionScrollBarLine
          gradientColors={['white', 'yellow', 'orange', 'red', 'magenta', 'white']}
        />
      </div>

      {arrowImages}

      <div
        className={lowerClassNames}
        style={{
          flexGrow: lowerFlexGrow,
        }}
      >
        <SectionScrollBarLine gradientColors="white" />
      </div>
    </div>
  );
}

SectionScrollBarBase.propTypes = {
  upperFlexGrow: PropTypes.number,
  lowerFlexGrow: PropTypes.number,
  upperClassNames: PropTypes.string,
  lowerClassNames: PropTypes.string,
};

SectionScrollBarBase.defaultProps = {
  upperFlexGrow: 0,
  lowerFlexGrow: 0,
  upperClassNames: '',
  lowerClassNames: '',
};

export default SectionScrollBarBase;
