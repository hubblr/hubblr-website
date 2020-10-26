import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

const SectionHeading = forwardRef(({ heading }, ref) => {
  const words = heading.split(' ');

  return (
    <div ref={ref} className="text-center text-4xl font-bold">
      {words.map((word) => {
        return <div key={uuid()}>{word}</div>;
      })}
    </div>
  );
});

SectionHeading.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default SectionHeading;
