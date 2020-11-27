import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function HubblrIconImage({ className }) {
  return (
    <svg
      viewBox="0 0 80 42"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <title>hubblr-icon</title>

      <g transform="translate(1, 1)" id="icon">
        <g>
          <motion.path
            d="M51,20 C51,31.0456725 42.0456725,40 31,40 C19.9543275,40 11,31.0456725 11,20 C11,8.95432748 19.9543275,0 31,0 C42.0456725,0 51,8.95432748 51,20 Z"
            id="Stroke-1"
            stroke="#FFFFFF"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <motion.path
            d="M68.1762064,9.78595123 C69.9698808,12.7754176 71,16.268172 71,20.0002328 C71,31.0460339 61.9739034,40 50.8396996,40 C48.0590818,40 45.4098688,39.4417738 43,38.4319385 M43.7410288,1.2747483 C45.9490974,0.450677996 48.3411327,0 50.8396996,0 C56.2301091,0 61.126343,2.0988186 64.743258,5.51708084"
            id="Stroke-2"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
          <motion.path
            d="M0,33 C4.0020037,31.5228917 3.98951911,31.5289588 9.71532059,29.3382648 M52.1194513,13.0550707 C52.1194513,13.0550707 66.3911837,7.74354786 78,3"
            id="Stroke-3"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          />
        </g>
      </g>
    </svg>
  );
}

HubblrIconImage.propTypes = {
  className: PropTypes.string,
};

HubblrIconImage.defaultProps = {
  className: 'h-full w-full',
};

export default HubblrIconImage;