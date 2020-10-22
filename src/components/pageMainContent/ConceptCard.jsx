import React from 'react';
import PropTypes from 'prop-types';

function ConceptCard({ title: cardTitle, description, tabledConcepts }) {
  const nrColumns = tabledConcepts.length;
  const titleDivs = tabledConcepts.map(({ title: conceptTitle }) => {
    return (
      <div className="font-bold text-lg" key={conceptTitle}>
        {conceptTitle}
      </div>
    );
  });
  const contentDivs = tabledConcepts.map(({ content }) => {
    return <div key={content}>{content}</div>;
  });

  return (
    <div className="w-huge h-full flex flex-col bg-white text-black p-8 rounded-lg">
      <div className="w-1/2 flex-grow">
        <h3 className="text-xl text-purple-700 font-bold mb-3">{cardTitle.toUpperCase()}</h3>
        <h2 className="text-3xl font-bold leading-7">{description}</h2>
      </div>

      <div
        className="grid gap-x-10 gap-y-3"
        style={{
          gridTemplateColumns: `repeat(${nrColumns}, minmax(0, 1fr))`,
          gridTemplateRows: 'repeat(2, auto)',
        }}
      >
        {titleDivs}
        {contentDivs}
      </div>
    </div>
  );
}

ConceptCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tabledConcepts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    })
  ).isRequired,
};

export default ConceptCard;
