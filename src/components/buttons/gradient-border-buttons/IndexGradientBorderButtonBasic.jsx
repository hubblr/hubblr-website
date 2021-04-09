import React from 'react';
import PropTypes from 'prop-types';
import HubblrGradientBorderButtonBase from './HubblrGradientBorderButtonBase';

function IndexGradientBorderButtonLongArrow({
  children,
  addedFlexClasses,
  theme,
  onClick,
  widthClass,
}) {
  return (
    <HubblrGradientBorderButtonBase
      addedFlexClasses={`${addedFlexClasses}`}
      theme={theme}
      onClick={onClick}
      widthClass={widthClass}
    >
      {children}
    </HubblrGradientBorderButtonBase>
  );
}

IndexGradientBorderButtonLongArrow.propTypes = {
  children: PropTypes.node.isRequired,
  addedFlexClasses: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  onClick: PropTypes.func,
  widthClass: PropTypes.string,
};

IndexGradientBorderButtonLongArrow.defaultProps = {
  addedFlexClasses: '',
  onClick: null,
  widthClass: '',
};

export default IndexGradientBorderButtonLongArrow;
