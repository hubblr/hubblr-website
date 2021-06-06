import React from 'react';
import PropTypes from 'prop-types';

function AnimatedHubblrIconImage({ className }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="114"
        height="62"
        viewBox="0 0 114 62"
        className={className}
      >
        <defs>
          <filter id="9kl7b76dqa" colorInterpolationFilters="auto">
            <feColorMatrix
              in="SourceGraphic"
              values="0 0 0 0 0.552941 0 0 0 0 0.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
            />
          </filter>
          <filter id="und9a3ndgb" colorInterpolationFilters="auto">
            <feColorMatrix
              in="SourceGraphic"
              values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
            />
          </filter>
        </defs>
        <g fill="none" fillRule="evenodd">
          <g>
            <g>
              <g filter="url(#9kl7b76dqa)" transform="translate(-109 -113) translate(112 116)">
                <g stroke="#1D1D1B" strokeWidth="5.5">
                  <path
                    d="M67.636 0C82.27 0 94.132 11.566 94.132 25.834c0 14.267-11.862 25.833-26.496 25.833-4.93 0-9.547-1.313-13.5-3.6-3.953 2.287-8.569 3.6-13.5 3.6-14.633 0-26.495-11.566-26.495-25.833C14.14 11.566 26.003 0 40.636 0c4.931 0 9.547 1.313 13.5 3.6 3.953-2.287 8.57-3.6 13.5-3.6z"
                    transform="translate(0 4)"
                  />
                  <path
                    d="M67.132 25.834c0 14.267-11.862 25.833-26.496 25.833-14.633 0-26.495-11.566-26.495-25.833C14.14 11.566 26.003 0 40.636 0 55.27 0 67.132 11.566 67.132 25.834z"
                    transform="translate(0 4)"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M0 42.365c5.338-1.904 5.322-1.896 12.96-4.719M68.25 17.25s20.31-7.43 35.794-13.541"
                    transform="translate(0 4)"
                  />
                </g>
              </g>
              <g filter="url(#und9a3ndgb)" transform="translate(-109 -113) translate(112 116)">
                <g stroke="#1D1D1B" strokeWidth="5.5">
                  <path
                    d="M67.636 0C82.27 0 94.132 11.566 94.132 25.834c0 14.267-11.862 25.833-26.496 25.833-4.93 0-9.547-1.313-13.5-3.6-3.953 2.287-8.569 3.6-13.5 3.6-14.633 0-26.495-11.566-26.495-25.833C14.14 11.566 26.003 0 40.636 0c4.931 0 9.547 1.313 13.5 3.6 3.953-2.287 8.57-3.6 13.5-3.6z"
                    transform="translate(3.5)"
                  />
                  <path
                    d="M67.132 25.834c0 14.267-11.862 25.833-26.496 25.833-14.633 0-26.495-11.566-26.495-25.833C14.14 11.566 26.003 0 40.636 0 55.27 0 67.132 11.566 67.132 25.834z"
                    transform="translate(3.5)"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M0 42.365c5.338-1.904 5.322-1.896 12.96-4.719M68.25 17.25s20.31-7.43 35.794-13.541"
                    transform="translate(3.5)"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
}

AnimatedHubblrIconImage.propTypes = {
  className: PropTypes.string,
};

AnimatedHubblrIconImage.defaultProps = {
  className: 'h-full w-full',
};

export default AnimatedHubblrIconImage;
