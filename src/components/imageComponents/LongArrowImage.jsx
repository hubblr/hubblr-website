import React from 'react';
import PropTypes from 'prop-types';
import blackArrowSvg from '../../images/longArrow/long-arrow-black.svg';
import whiteArrowSvg from '../../images/longArrow/long-arrow-white.svg';
import grayArrowSvgRight from '../../images/longArrow/long-arrow-gray.svg';
import grayArrowSvgLeft from '../../images/longArrow/long-arrow-gray-left.svg';

function LongArrowImage({ theme, orientation }) {
  let arrowSvg;
  switch (theme) {
    case 'gray':
      if (orientation === 'right') {
        arrowSvg = grayArrowSvgRight;
      } else {
        arrowSvg = grayArrowSvgLeft;
      }
      break;
    case 'light':
      arrowSvg = blackArrowSvg;
      break;
    case 'dark':
    default:
      arrowSvg = whiteArrowSvg;
      break;
  }

  return <img src={arrowSvg} alt="long arrow" className="w-22" />;
}

LongArrowImage.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light', 'gray']).isRequired,
  orientation: PropTypes.oneOf(['left', 'right']),
};

LongArrowImage.defaultProps = {
  orientation: 'right',
};

export default LongArrowImage;
