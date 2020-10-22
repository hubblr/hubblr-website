import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function SectionHeading({ heading }) {
  const words = heading.split(' ');

  return (
    <div className="flex flex-col items-center text-7xl font-bold">
      {words.map((word, i) => {
        return (
          <p key={uuidv4()} className={`${i > 0 ? '-mt-8' : ''}`}>
            {word}
          </p>
        );
      })}
    </div>
  );
}

SectionHeading.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default SectionHeading;
