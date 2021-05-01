import React from 'react';
import PropTypes from 'prop-types';
import HubblrGradientBorderButtonBase from './HubblrGradientBorderButtonBase';
import LongArrowImage from '../../image-components/LongArrowImage';

function IndexGradientBorderButtonLongArrow({
  children,
  theme,
  onClick,
  borderButtonClassName,
  innerOverlayDivClassName,
  textDivClassName,
}) {
  return (
    <HubblrGradientBorderButtonBase
      image={<LongArrowImage theme={theme} className="ml-3" />}
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

IndexGradientBorderButtonLongArrow.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  onClick: PropTypes.func,
  borderButtonClassName: PropTypes.string,
  innerOverlayDivClassName: PropTypes.string,
  textDivClassName: PropTypes.string,
};

IndexGradientBorderButtonLongArrow.defaultProps = {
  onClick: null,
  borderButtonClassName: '',
  innerOverlayDivClassName: '',
  textDivClassName: '',
};

export default IndexGradientBorderButtonLongArrow;
