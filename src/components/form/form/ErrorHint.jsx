import React from 'react';
import PropTypes from 'prop-types';

function ErrorHint({ className, children, hintPointerSize }) {
  return (
    <div
      className={`absolute z-10 ${className}`}
      style={{ left: '-2%', top: `calc(100% + ${hintPointerSize})` }}
    >
      <div className="relative">
        <p className="rounded-lg bg-white text-xs text-red-600 px-8 py-4">{children}</p>
        <div
          className="absolute w-0 h-0"
          style={{
            borderLeft: `${hintPointerSize} solid transparent`,
            borderRight: `${hintPointerSize} solid transparent`,
            borderBottom: `${hintPointerSize} solid white`,
            bottom: '100%',
            left: '10%',
          }}
        />
      </div>
    </div>
  );
}

ErrorHint.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  hintPointerSize: PropTypes.string.isRequired,
};

ErrorHint.defaultProps = {
  className: '',
};

export default ErrorHint;
