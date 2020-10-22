import React from 'react';
import PropTypes from 'prop-types';
import HubblrGradientBorderButtonBase from './HubblrGradientBorderButtonBase.jsx';

function HubblrGradientBorderButtonWFull({
  children,
  image,
  theme,
  onClick,
}) {
  //if image if given, have max space between text and image
  let addedFlexClasses = image ? 'justify-between' : 'justify-center';

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

HubblrGradientBorderButtonWFull.propTypes = {
  children: PropTypes.node,
  image: PropTypes.element,
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  onClick: PropTypes.func,
};

export default HubblrGradientBorderButtonWFull;
