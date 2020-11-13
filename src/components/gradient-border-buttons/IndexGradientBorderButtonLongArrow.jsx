import React from 'react';
import PropTypes from 'prop-types';
import HubblrGradientBorderButtonBase from './HubblrGradientBorderButtonBase';
import LongArrowImage from '../image-components/LongArrowImage';

function IndexGradientBorderButtonLongArrow({
  children,
  addedFlexClasses,
  theme,
  onClick,
  widthClass,
}) {
  return (
    <HubblrGradientBorderButtonBase
      image={<LongArrowImage theme={theme} className="ml-3" />}
      addedFlexClasses={`${addedFlexClasses}`}
      theme={theme}
      onClick={onClick}
      widthClass={widthClass}
    >
      {children}
    </HubblrGradientBorderButtonBase>
  );
}

IndexGradientBorderButtonLongArrow.defaultProps = {
  addedFlexClasses: '',
  onClick: null,
  widthClass: '',
};

IndexGradientBorderButtonLongArrow.propTypes = {
  children: PropTypes.string.isRequired,
  addedFlexClasses: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  onClick: PropTypes.func,
  widthClass: PropTypes.string,
};

export default IndexGradientBorderButtonLongArrow;
