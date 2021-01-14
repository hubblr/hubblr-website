import React from 'react';
import PropTypes from 'prop-types';

function SideContentItemContainer({ children, className }) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, i) => {
        return i === 0 ? React.cloneElement(child, { isFirstSection: true }) : child;
      })}
    </div>
  );
}

SideContentItemContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

SideContentItemContainer.defaultProps = {
  className: '',
};

export default SideContentItemContainer;
