import React from 'react';
import PropTypes from 'prop-types';

import SectionScrollBarLine from './SectionScrollBarLine';
import ArrowImageDownDouble from '../image-components/ArrowImageDownDouble';

function SectionScrollBarBase({ upperFlexGrow, lowerFlexGrow, upperClassNames, lowerClassNames }) {
  const upperBarShown = upperFlexGrow || upperClassNames;
  const lowerBarShown = lowerFlexGrow || lowerClassNames;

  return (
    <div className="h-full flex flex-col items-center w-10">
      <SectionScrollBarLine
        gradientColors={['white', 'yellow', 'orange', 'red', 'magenta', 'white']}
        className={`${upperClassNames}${upperBarShown ? ' mb-3' : ''}`}
        flexGrow={upperFlexGrow}
      />

      <div>
        {lowerBarShown ? (
          <ArrowImageDownDouble widthClass="w-full" />
        ) : (
          <ArrowImageDownDouble widthClass="w-full" rotationDegree={180} />
        )}
      </div>

      <SectionScrollBarLine
        gradientColors="white"
        className={`${lowerClassNames}${lowerBarShown ? ' mt-3' : ''}`}
        flexGrow={lowerFlexGrow}
      />
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
