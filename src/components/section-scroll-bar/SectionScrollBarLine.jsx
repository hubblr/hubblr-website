import React from 'react';
import PropTypes from 'prop-types';

function SectionScrollBarLine({ gradientColors, className, flexGrow }) {
  return (
    <div
      className={`w-1 ${className}`}
      style={{
        flexGrow,
        background:
          typeof gradientColors === 'string'
            ? gradientColors
            : `linear-gradient(to bottom, ${gradientColors.join(',')})`,
      }}
    />
  );
}

SectionScrollBarLine.propTypes = {
  gradientColors: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
    .isRequired,
  className: PropTypes.string,
  flexGrow: PropTypes.number,
};

SectionScrollBarLine.defaultProps = {
  className: '',
  flexGrow: 0,
};

export default SectionScrollBarLine;
