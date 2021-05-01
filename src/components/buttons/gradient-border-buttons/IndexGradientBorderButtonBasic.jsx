import React from 'react';
import PropTypes from 'prop-types';
import HubblrGradientBorderButtonBase from './HubblrGradientBorderButtonBase';

function IndexGradientBorderButtonBasic({
  children,
  theme,
  onClick,
  borderButtonClassName,
  innerOverlayDivClassName,
  textDivClassName,
}) {
  return (
    <HubblrGradientBorderButtonBase
      theme={theme}
      onClick={onClick}
      borderButtonClassName={borderButtonClassName}
      innerOverlayDivClassName={innerOverlayDivClassName}
      textDivClassName={textDivClassName}
    >
      {children}
    </HubblrGradientBorderButtonBase>
  );
}

IndexGradientBorderButtonBasic.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  onClick: PropTypes.func,
  borderButtonClassName: PropTypes.string,
  innerOverlayDivClassName: PropTypes.string,
  textDivClassName: PropTypes.string,
};

IndexGradientBorderButtonBasic.defaultProps = {
  onClick: null,
  borderButtonClassName: '',
  innerOverlayDivClassName: '',
  textDivClassName: '',
};

export default IndexGradientBorderButtonBasic;
