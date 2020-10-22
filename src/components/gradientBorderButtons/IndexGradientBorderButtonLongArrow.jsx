import React from 'react';
import PropTypes from 'prop-types';
import HubblrGradientBorderButtonBase from './HubblrGradientBorderButtonBase';
import LongArrowImage from '../imageComponents/LongArrowImage';

function IndexGradientBorderButtonLongArrow({ children, theme, onClick }) {
  return (
    <HubblrGradientBorderButtonBase
      image={<LongArrowImage theme={theme} />}
      addedFlexClasses="gap-3"
      theme={theme}
      onClick={onClick}
    >
      {children}
    </HubblrGradientBorderButtonBase>
  );
}

IndexGradientBorderButtonLongArrow.defaultProps = {
  onClick: null,
};

IndexGradientBorderButtonLongArrow.propTypes = {
  children: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  onClick: PropTypes.func,
};

export default IndexGradientBorderButtonLongArrow;
