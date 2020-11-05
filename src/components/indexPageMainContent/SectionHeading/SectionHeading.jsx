import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

const SectionHeading = forwardRef(({ className, heading }, ref) => {
  const words = heading.split(' ');

  return (
    <div ref={ref} className={`flex flex-col items-center text-4xl font-bold ${className}`}>
      {words.map((word) => {
        return <div key={uuid()}>{word}</div>;
      })}
    </div>
  );
});

SectionHeading.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string.isRequired,
};

SectionHeading.defaultProps = {
  className: '',
};

export default SectionHeading;
