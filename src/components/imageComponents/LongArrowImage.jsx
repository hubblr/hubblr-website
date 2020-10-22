import React from 'react';
import PropTypes from 'prop-types';
import blackArrowSvg from '../../images/longArrow/long-arrow-black.svg';
import whiteArrowSvg from '../../images/longArrow/long-arrow-white.svg';

function LongArrowImage({ theme }) {
  let arrowSvg;
  switch (theme) {
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
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
};

export default LongArrowImage;
