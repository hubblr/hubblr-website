import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function MainContentCardContent({ children, tabledConcepts, padding }) {
  // create grid contents
  const nrColumns = tabledConcepts.length;
  const titleDivs = tabledConcepts.map(({ title: conceptTitle }) => {
    return (
      <div key={uuidv4()} className="row-start-1 font-bold text-lg break-words mb-3 xl:mb-0">
        {conceptTitle}
      </div>
    );
  });
  const contentDivs = tabledConcepts.map(({ content }) => {
    return (
      <div key={uuidv4()} className="row-start-2 break-words mb-5 xl:mb-0">
        {content}
      </div>
    );
  });
  const orderedDivs = [];
  titleDivs.forEach((titleDiv, i) => {
    orderedDivs.push(titleDiv);
    orderedDivs.push(contentDivs[i]);
  });

  return (
    <div style={{ padding }}>
      <div
        className="xl:grid xl:gap-x-10 xl:gap-y-3"
        style={{
          gridTemplateColumns: `repeat(${nrColumns}, minmax(0, 1fr))`,
          gridTemplateRows: 'repeat(2, auto)',
          paddingTop: 0,
        }}
      >
        {orderedDivs.map((div) => div)}
      </div>
      {children}
    </div>
  );
}

MainContentCardContent.propTypes = {
  children: PropTypes.node,
  tabledConcepts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    })
  ).isRequired,
  padding: PropTypes.string,
};

MainContentCardContent.defaultProps = {
  children: null,
  padding: '2rem',
};

export default MainContentCardContent;
