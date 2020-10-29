import React from 'react';
import PropTypes from 'prop-types';
import HeadlinerBoxImageDesktop from '../imageComponents/HeadlinerBoxImageDesktop';

function MainContentCard({ mainContentDescription, className, padding }) {
  const { title: cardTitle, description, tabledConcepts } = mainContentDescription;
  // create grid contents
  const nrColumns = tabledConcepts.length;
  const titleDivs = tabledConcepts.map(({ title: conceptTitle }) => {
    return (
      <div className="row-start-1 font-bold text-lg break-words" key={conceptTitle}>
        {conceptTitle}
      </div>
    );
  });
  const contentDivs = tabledConcepts.map(({ content }) => {
    return (
      <div className="row-start-2 break-words" key={content}>
        {content}
      </div>
    );
  });

  return (
    <div
      className={`w-full h-full flex flex-col justify-between bg-white text-black rounded-lg ${className}`}
    >
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
        className="xl:grid gap-x-10 gap-y-3"
        style={{
          gridTemplateColumns: `repeat(${nrColumns}, minmax(0, 1fr))`,
          gridTemplateRows: 'repeat(2, auto)',
          padding,
          paddingTop: 0,
        }}
      >
        {titleDivs.map((titleDiv, i) => {
          return (
            <>
              {titleDiv}
              {contentDivs[i]}
            </>
          );
        })}
      </div>
    </div>
  );
}

MainContentCard.propTypes = {
  mainContentDescription: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tabledConcepts: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  className: PropTypes.string,
  padding: PropTypes.string,
};

MainContentCard.defaultProps = {
  className: '',
  padding: '2rem',
};

export default MainContentCard;
