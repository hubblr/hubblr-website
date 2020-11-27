import React from 'react';
import PropTypes from 'prop-types';

function MainContentGridItem({ title, text }) {
  return (
    <div>
      <div className="font-bold text-lg break-words mb-3 xl:mb-0">{title}</div>
      <div className="break-words mb-5 xl:mb-0" style={{ hyphens: 'manual' }}>
        {text}
      </div>
    </div>
  );
}

MainContentGridItem.propTypes = {
  title: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
};

export default MainContentGridItem;
