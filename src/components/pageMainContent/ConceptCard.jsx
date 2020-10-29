import React from 'react';
import PropTypes from 'prop-types';
import HeadlinerBoxImageDesktop from '../imageComponents/HeadlinerBoxImageDesktop';

function ConceptCard({ title: cardTitle, description, tabledConcepts, padding }) {
  // create grid contents
  const nrColumns = tabledConcepts.length;
  const titleDivs = tabledConcepts.map(({ title: conceptTitle }) => {
    return (
      <div className="font-bold text-lg break-words" key={conceptTitle}>
        {conceptTitle}
      </div>
    );
  });
  const contentDivs = tabledConcepts.map(({ content }) => {
    return (
      <div className="break-words" key={content}>
        {content}
      </div>
    );
  });

  return (
    <div className="w-full h-full flex flex-col justify-between bg-white text-black rounded-lg">
      <div
        className="grid"
        style={{
          gridTemplateRows: `max-content ${padding}`,
          gridTemplateColumns: `50% ${padding}`,
        }}
      >
        <div className="row-start-1 col-start-1">
          <div
            style={{
              paddingLeft: padding,
              paddingTop: padding,
            }}
          >
            <h3 className="text-xl text-purple-700 font-bold mb-3">{cardTitle.toUpperCase()}</h3>
            <h2 className="text-3xl font-bold leading-7">{description}</h2>
          </div>
        </div>
        <div className="row-start-1 col-start-1 row-end-3 col-end-3">
          <HeadlinerBoxImageDesktop className="h-full w-full" />
        </div>
      </div>

      <div
        className="grid gap-x-10 gap-y-3"
        style={{
          gridTemplateColumns: `repeat(${nrColumns}, minmax(0, 1fr))`,
          gridTemplateRows: 'repeat(2, auto)',
          padding,
          paddingTop: 0,
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
  padding: PropTypes.string,
};

ConceptCard.defaultProps = {
  padding: '2rem',
};

export default ConceptCard;
