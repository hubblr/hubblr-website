import React from 'react';
import PropTypes from 'prop-types';

function SectionScrollBarLine({ gradientColors }) {
  return (
    <div
      style={{
        background:
          typeof gradientColors === 'string'
            ? gradientColors
            : `linear-gradient(to bottom, ${gradientColors.join(',')})`,
      }}
      className="h-full w-1"
    />
  );
}

SectionScrollBarLine.propTypes = {
  gradientColors: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
    .isRequired,
};

export default SectionScrollBarLine;
