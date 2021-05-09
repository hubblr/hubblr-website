import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function HubblrIconImage({ className }) {
  const INITIAL = { pathLength: 0, opacity: 0 };
  const ANIMATE = { pathLength: 1, opacity: 1 };

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="146"
        height="94"
        viewBox="0 0 146 94"
        className={className}
      >
        <defs>
          <filter id="9rkufadgya">
            <feColorMatrix
              in="SourceGraphic"
              values="0 0 0 0 0.552941 0 0 0 0 0.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
            />
          </filter>
          <filter
            id="yyua6ofmgb"
            width="145.3%"
            height="194.2%"
            x="-23.1%"
            y="-47.1%"
            filterUnits="objectBoundingBox"
          >
            <feOffset dy="3" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="4" />
            <feColorMatrix
              in="shadowBlurOuter1"
              result="shadowMatrixOuter1"
              values="0 0 0 0 0.397984601 0 0 0 0 0.397984601 0 0 0 0 0.397984601 0 0 0 0.5 0"
            />
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="vgfz7a1f3c">
            <feColorMatrix
              in="SourceGraphic"
              values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
            />
          </filter>
          <filter
            id="w2l9g7jv4d"
            width="145.3%"
            height="194.2%"
            x="-23.1%"
            y="-47.1%"
            filterUnits="objectBoundingBox"
          >
            <feOffset dy="3" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="4" />
            <feColorMatrix
              in="shadowBlurOuter1"
              result="shadowMatrixOuter1"
              values="0 0 0 0 0.397984601 0 0 0 0 0.397984601 0 0 0 0 0.397984601 0 0 0 0.5 0"
            />
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g fill="none" fillRule="evenodd">
          <g>
            <g>
              <g>
                <g
                  filter="url(#9rkufadgya)"
                  opacity=".596"
                  transform="translate(-93 -112) translate(111 131) translate(1)"
                >
                  <g
                    stroke="#1D1D1B"
                    strokeWidth="5.5"
                    filter="url(#yyua6ofmgb)"
                    transform="translate(0 4)"
                  >
                    <g>
                      <motion.path
                        d="M53.496 0c14.633 0 26.496 11.566 26.496 25.834 0 14.267-11.863 25.833-26.496 25.833-4.93 0-9.547-1.313-13.5-3.6-3.954 2.287-8.57 3.6-13.5 3.6C11.863 51.667 0 40.1 0 25.834 0 11.566 11.863 0 26.496 0c4.93 0 9.546 1.313 13.5 3.6 3.953-2.287 8.57-3.6 13.5-3.6z"
                        transform="translate(14.14)"
                        initial={INITIAL}
                        animate={ANIMATE}
                        // transition={{ delay: 7, duration: 0.8 }}
                      />
                      <motion.path
                        d="M52.992 25.834c0 14.267-11.863 25.833-26.496 25.833S0 40.1 0 25.834C0 11.566 11.863 0 26.496 0s26.496 11.566 26.496 25.834z"
                        transform="translate(14.14)"
                        initial={INITIAL}
                        animate={ANIMATE}
                        // transition={{ delay: 9, duration: 0.8 }}
                      />
                    </g>
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M0 42.365c5.338-1.904 5.322-1.896 12.96-4.719M68.25 17.25s20.31-7.43 35.794-13.541"
                      initial={INITIAL}
                      animate={ANIMATE}
                      // transition={{ delay: 11, duration: 0.8 }}
                    />
                  </g>
                </g>
                <g
                  filter="url(#vgfz7a1f3c)"
                  transform="translate(-93 -112) translate(111 131) translate(1)"
                >
                  <g
                    stroke="#1D1D1B"
                    strokeWidth="5.5"
                    filter="url(#w2l9g7jv4d)"
                    transform="translate(3.5)"
                  >
                    <motion.path
                      d="M53.496 0c14.633 0 26.496 11.566 26.496 25.834 0 14.267-11.863 25.833-26.496 25.833-4.93 0-9.547-1.313-13.5-3.6-3.954 2.287-8.57 3.6-13.5 3.6C11.863 51.667 0 40.1 0 25.834 0 11.566 11.863 0 26.496 0c4.93 0 9.546 1.313 13.5 3.6 3.953-2.287 8.57-3.6 13.5-3.6z"
                      transform="translate(14.14)"
                      initial={INITIAL}
                      animate={ANIMATE}
                      // transition={{ delay: 1, duration: 0.8 }}
                    />
                    <motion.path
                      d="M52.992 25.834c0 14.267-11.863 25.833-26.496 25.833S0 40.1 0 25.834C0 11.566 11.863 0 26.496 0s26.496 11.566 26.496 25.834z"
                      transform="translate(14.14)"
                      initial={INITIAL}
                      animate={ANIMATE}
                      // transition={{ delay: 3, duration: 0.8 }}
                    />
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M0 42.365c5.338-1.904 5.322-1.896 12.96-4.719M68.25 17.25s20.31-7.43 35.794-13.541"
                      initial={INITIAL}
                      animate={ANIMATE}
                      // transition={{ delay: 5, duration: 0.8 }}
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>

      {/* ANIMATION BACKUP for remembering animation sequence
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
              initial={initial}
              animate={animate}
              transition={{ delay: 1, duration: 0.8 }}
            />
            <motion.path
              d="M0,33 C4.0020037,31.5228917 3.98951911,31.5289588 9.71532059,29.3382648 M52.1194513,13.0550707 C52.1194513,13.0550707 66.3911837,7.74354786 78,3"
              id="Stroke-Purple-Shadow-3"
              stroke="#5d1c90"
              strokeWidth="8"
              initial={initial}
              animate={animate}
              transition={{ delay: 1.2, duration: 0.6 }}
            />
          </g>
          <g className="z-10">
          // WHITE LOGO
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
      </svg> */}
    </>
  );
}

HubblrIconImage.propTypes = {
  className: PropTypes.string,
};

HubblrIconImage.defaultProps = {
  className: 'h-full w-full',
};

export default HubblrIconImage;
