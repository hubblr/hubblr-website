import React from 'react';
import PropTypes from 'prop-types';

import SectionScrollBarLine from './SectionScrollBarLine';

function SectionScrollBar({
  arrowImage,
  upperFlexGrow,
  lowerFlexGrow,
  upperClassNames,
  lowerClassNames,
}) {
  const upperBarShown = upperFlexGrow || upperClassNames;
  const lowerBarShown = lowerFlexGrow || lowerClassNames;

  return (
    <div className="h-full flex flex-col items-center w-10">
      <SectionScrollBarLine
        gradientColors={['white', 'yellow', 'orange', 'red', 'magenta', 'white']}
        className={`${upperClassNames}${upperBarShown ? ' mb-3' : ''}`}
        flexGrow={upperFlexGrow}
      />

      {arrowImage}

      <SectionScrollBarLine
        gradientColors="white"
        className={`${lowerClassNames}${lowerBarShown ? ' mt-3' : ''}`}
        flexGrow={lowerFlexGrow}
      />
    </div>
  );
}

SectionScrollBar.propTypes = {
  arrowImage: PropTypes.element.isRequired,
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
