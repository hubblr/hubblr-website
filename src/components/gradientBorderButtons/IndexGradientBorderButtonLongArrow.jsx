import React from 'react';
import PropTypes from 'prop-types';
import HubblrGradientBorderButtonBase from "./HubblrGradientBorderButtonBase.jsx";
import LongArrowImage from "../imageComponents/LongArrowImage.jsx";

function IndexGradientBorderButtonLongArrow({ children, theme, onClick }) {
  return (
    <HubblrGradientBorderButtonBase
      image={<LongArrowImage theme={theme}/>}
      addedFlexClasses="gap-3"
      theme={theme}
      onClick={onClick}
    >
      {children}
    </HubblrGradientBorderButtonBase>
  );
}

IndexGradientBorderButtonLongArrow.defaultProps = {
  theme: 'dark',
};

IndexGradientBorderButtonLongArrow.propTypes = {
  children: PropTypes.element.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  onClick: PropTypes.func,
};

export default IndexGradientBorderButtonLongArrow;
