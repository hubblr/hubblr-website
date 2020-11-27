import React from 'react';
import PropTypes from 'prop-types';

function LightningImageSvg({ className, style }) {
  return (
    <svg
      viewBox="0 0 221 356"
      preserveAspectRatio="none"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      style={style}
    >
      <defs>
        <linearGradient
          x1="1.56032636%"
          y1="49.7500002%"
          x2="98.302318%"
          y2="49.7500002%"
          id="linearGradient-1"
        >
          <stop stopColor="#BDFFF4" offset="0%" />
          <stop stopColor="#44CED8" offset="27.8381774%" />
          <stop stopColor="#0DA2FF" offset="72.5961538%" />
          <stop stopColor="#8D00FF" offset="100%" />
        </linearGradient>
      </defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="software-laboratory-1"
          transform="translate(-611.000000, -262.000000)"
          stroke="url(#linearGradient-1)"
          strokeWidth="9"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M813.054139,252.322397 L748.445957,422.86127 L822.048093,405.327489 L745.53936,592.155462 L659.695291,604.703233 L717.714255,491.7039 L615.145701,504.927489 L813.054139,252.322397 Z"
            id="Rectangle-Copy-4"
            transform="translate(719.617250, 435.845156) scale(-1, -1) translate(-719.617250, -435.845156) "
          />
        </g>
      </g>
    </svg>
  );
}

LightningImageSvg.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};

LightningImageSvg.defaultProps = {
  className: 'h-full w-full',
  style: null,
};

export default LightningImageSvg;
