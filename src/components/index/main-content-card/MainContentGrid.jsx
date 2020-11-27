import React from 'react';
import PropTypes from 'prop-types';

function MainContentGrid({ children, className, maxNumberCols }) {
  const nrColumns =
    maxNumberCols && children.length > maxNumberCols ? maxNumberCols : children.length;
  return (
    <div
      className={`xl:grid xl:gap-x-10 xl:gap-y-2 ${className}`}
      style={{
        gridTemplateColumns: `repeat(${nrColumns}, minmax(0, 1fr))`,
      }}
    >
      {children}
    </div>
  );
}

MainContentGrid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  maxNumberCols: PropTypes.number,
};

MainContentGrid.defaultProps = {
  className: '',
  maxNumberCols: undefined,
};

export default MainContentGrid;
