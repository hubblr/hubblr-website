import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function HubblrIconImage({ className }) {
  const initial = { pathLength: 0, opacity: 0 };
  const animate = { pathLength: 1, opacity: 1 };

  return (
    <svg
      // DEFAULT VALUE: viewBox="0 0 80 42"
      viewBox="-10 -10 100 62"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <title>hubblr-icon</title>

      <g transform="translate(1, 1)" id="icon">
        <g className="z-0">
          {/* Andi: This additional Stroke should be animated with an y-offset, or a shadow, enabling an animation for the new logo as previously realized */}
          {/* CURRENT PROBLEM: Animation Box of SVG is to small for additional Stroke animation */}
          {/* <motion.path
            d="M51,20 C51,31.0456725 42.0456725,40 31,40 C19.9543275,40 11,31.0456725 11,20 C11,8.95432748 19.9543275,0 31,0 C42.0456725,0 51,8.95432748 51,20 Z M68.1762064,9.78595123 C69.9698808,12.7754176 71,16.268172 71,20.0002328 C71,31.0460339 61.9739034,40 50.8396996,40 C48.0590818,40 45.4098688,39.4417738 43,38.4319385 M43.7410288,1.2747483 C45.9490974,0.450677996 48.3411327,0 50.8396996,0 C56.2301091,0 61.126343,2.0988186 64.743258,5.51708084 M0,33 C4.0020037,31.5228917 3.98951911,31.5289588 9.71532059,29.3382648 M52.1194513,13.0550707 C52.1194513,13.0550707 66.3911837,7.74354786 78,3"
            id="Stroke-4"
            stroke="#5d1c90"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 1,
              // boxShadow: '-7px 7px 0 rgba(93, 28, 144, 0.8)',
            }}
            transition={{ delay: 1.8, duration: 0.5 }}
          /> */}

          <motion.path
            d="M51,20 C51,31.0456725 42.0456725,40 31,40 C19.9543275,40 11,31.0456725 11,20 C11,8.95432748 19.9543275,0 31,0 C42.0456725,0 51,8.95432748 51,20 Z"
            id="Stroke-Purple-Shadow-1"
            stroke="#5d1c90"
            strokeWidth="8"
            initial={initial}
            animate={animate}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <motion.path
            d="M68.1762064,9.78595123 C69.9698808,12.7754176 71,16.268172 71,20.0002328 C71,31.0460339 61.9739034,40 50.8396996,40 C48.0590818,40 45.4098688,39.4417738 43,38.4319385 M43.7410288,1.2747483 C45.9490974,0.450677996 48.3411327,0 50.8396996,0 C56.2301091,0 61.126343,2.0988186 64.743258,5.51708084"
            id="Stroke-Purple-Shadow-2"
            stroke="#5d1c90"
            strokeWidth="8"
            strokeLinecap="round"
            initial={initial}
            animate={animate}
            transition={{ delay: 1, duration: 0.8 }}
          />
          <motion.path
            d="M0,33 C4.0020037,31.5228917 3.98951911,31.5289588 9.71532059,29.3382648 M52.1194513,13.0550707 C52.1194513,13.0550707 66.3911837,7.74354786 78,3"
            id="Stroke-Purple-Shadow-3"
            stroke="#5d1c90"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={initial}
            animate={animate}
            transition={{ delay: 1.2, duration: 0.6 }}
          />
        </g>
        <g className="z-10">
          {/* Old Logo with resized strokeWidth from 1 to 3  */}
          {/* WHITE LOGO */}
          <motion.path
            d="M51,20 C51,31.0456725 42.0456725,40 31,40 C19.9543275,40 11,31.0456725 11,20 C11,8.95432748 19.9543275,0 31,0 C42.0456725,0 51,8.95432748 51,20 Z"
            id="Stroke-1"
            stroke="#FFFFFF"
            strokeWidth="3"
            initial={initial}
            animate={animate}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <motion.path
            d="M68.1762064,9.78595123 C69.9698808,12.7754176 71,16.268172 71,20.0002328 C71,31.0460339 61.9739034,40 50.8396996,40 C48.0590818,40 45.4098688,39.4417738 43,38.4319385 M43.7410288,1.2747483 C45.9490974,0.450677996 48.3411327,0 50.8396996,0 C56.2301091,0 61.126343,2.0988186 64.743258,5.51708084"
            id="Stroke-2"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
            initial={initial}
            animate={animate}
            transition={{ delay: 1, duration: 0.8 }}
          />
          <motion.path
            d="M0,33 C4.0020037,31.5228917 3.98951911,31.5289588 9.71532059,29.3382648 M52.1194513,13.0550707 C52.1194513,13.0550707 66.3911837,7.74354786 78,3"
            id="Stroke-3"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={initial}
            animate={animate}
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
