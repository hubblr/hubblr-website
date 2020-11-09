import React from 'react';
import PropTypes from 'prop-types';

function HeadlinerBoxSvg({ className, viewBox }) {
  return (
    <svg viewBox={viewBox} preserveAspectRatio="none" version="1.1" className={className}>
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
          id="components"
          transform="translate(-87.000000, -254.000000)"
          stroke="url(#linearGradient-1)"
          strokeWidth="6.5"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M637.760027,257.699621 L802.41024,431.486376 L189.842108,444.275227 L98.4031797,365.765313 L118.378525,276.280083 L637.760027,257.699621 Z"
            id="Headliner-Box"
            transform="translate(448.500000, 351.000000) scale(-1, -1) translate(-448.500000, -351.000000) "
          />
        </g>
      </g>
    </svg>
  );
}

HeadlinerBoxSvg.propTypes = {
  className: PropTypes.string,
  viewBox: PropTypes.string,
};

HeadlinerBoxSvg.defaultProps = {
  className: '',
  viewBox: '0 0 716 194', // this is the value taken from the exported svg file
};

export default HeadlinerBoxSvg;
