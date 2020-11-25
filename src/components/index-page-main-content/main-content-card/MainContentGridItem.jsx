import React from 'react';
import PropTypes from 'prop-types';

// TODO: fix language on div once language support is properly implemented
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
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MainContentGridItem;
