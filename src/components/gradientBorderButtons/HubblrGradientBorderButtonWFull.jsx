import React from 'react';
import PropTypes from 'prop-types';
import HubblrGradientBorderButtonBase from './HubblrGradientBorderButtonBase';

function HubblrGradientBorderButtonWFull({ children, image, theme, onClick }) {
  // if image if given, have max space between text and image
  const addedFlexClasses = image ? 'justify-between' : 'justify-center';

  return (
    <HubblrGradientBorderButtonBase
      image={image}
      widthClass="w-full"
      addedFlexClasses={addedFlexClasses}
      theme={theme}
      onClick={onClick}
    >
      {children}
    </HubblrGradientBorderButtonBase>
  );
}

HubblrGradientBorderButtonWFull.defaultProps = {
  image: null,
  onClick: null,
};

HubblrGradientBorderButtonWFull.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.element,
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  onClick: PropTypes.func,
};

export default HubblrGradientBorderButtonWFull;
