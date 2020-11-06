import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import AnimationAreaContext from '../../../context/AnimationAreaContext';
import useCreateTransformFromDescription from '../../hooks/scroll/useCreateTransformFromDescription';

const transformSettingsOrbit = {
  rotate: {
    inputPercentages: [0, 100],
    outputRange: ['0deg', '45deg'],
  },
  opacity: {
    inputPercentages: [80, 99],
    outputRange: [1, 0],
  },
};

const transformSettingsSatellite = {
  scale: {
    inputPercentages: [20, 51],
    outputRange: [1.3, 1],
  },
  opacity: {
    inputPercentages: [20, 51],
    outputRange: [0, 1],
  },
};

function AnimatedSatelliteImage({ className }) {
  const { animationAreaStartY, animationAreaStep } = useContext(AnimationAreaContext);

  const orbitTransforms = {
    rotate: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      transformSettingsOrbit.rotate
    ),
    opacity: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      transformSettingsOrbit.opacity
    ),
  };

  const satelliteTransforms = {
    scale: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      transformSettingsSatellite.scale
    ),
    opacity: useCreateTransformFromDescription(
      animationAreaStartY,
      animationAreaStep,
      transformSettingsSatellite.opacity
    ),
  };

  return (
    <div className={`flex flex-col items-center justify-center overflow-hidden ${className}`}>
      <div className="">
        <motion.svg
          width="360px"
          height="276px"
          viewBox="0 0 360 276"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="relative z-10"
          style={satelliteTransforms}
        >
          <title>sattellite</title>
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
            <linearGradient
              x1="49.9313222%"
              y1="1.37900443%"
              x2="49.9313222%"
              y2="98.120996%"
              id="linearGradient-2"
            >
              <stop stopColor="#BDFFF4" offset="0%" />
              <stop stopColor="#44CED8" offset="27.8381774%" />
              <stop stopColor="#0DA2FF" offset="72.5961538%" />
              <stop stopColor="#8D00FF" offset="100%" />
            </linearGradient>
            <linearGradient
              x1="49.9313222%"
              y1="1.37900443%"
              x2="49.9313222%"
              y2="98.120996%"
              id="linearGradient-3"
            >
              <stop stopColor="#BDFFF4" offset="0%" />
              <stop stopColor="#44CED8" offset="27.8381774%" />
              <stop stopColor="#0DA2FF" offset="72.5961538%" />
              <stop stopColor="#8D00FF" offset="100%" />
            </linearGradient>
            <linearGradient
              x1="49.9313222%"
              y1="1.37900443%"
              x2="49.9313222%"
              y2="98.120996%"
              id="linearGradient-4"
            >
              <stop stopColor="#BDFFF4" offset="0%" />
              <stop stopColor="#44CED8" offset="27.8381774%" />
              <stop stopColor="#0DA2FF" offset="72.5961538%" />
              <stop stopColor="#8D00FF" offset="100%" />
            </linearGradient>
          </defs>
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="consulting-1" transform="translate(-486.000000, -245.000000)">
              <g id="Group-2-Copy" transform="translate(491.000000, -99.500000)">
                <g
                  id="Group-4"
                  transform="translate(174.768924, 482.704415) rotate(9.000000) translate(-174.768924, -482.704415) translate(15.268924, 374.704415)"
                >
                  <g id="sattellite" transform="translate(-0.000000, 0.000000)">
                    <g id="wing" transform="translate(0.343056, 63.793207)">
                      <line
                        x1="52.8479375"
                        y1="32.5983187"
                        x2="148.941163"
                        y2="51.6653446"
                        id="Path-6"
                        stroke="url(#linearGradient-1)"
                        strokeWidth="3.36"
                      />
                      <polygon
                        id="Rectangle"
                        stroke="url(#linearGradient-2)"
                        strokeWidth="3.92"
                        fill="#000000"
                        transform="translate(62.911403, 37.690172) rotate(-80.000000) translate(-62.911403, -37.690172) "
                        points="35.6652755 -21.1546421 79.8146358 8.76975558 90.157531 96.5349867 42.0884868 92.6721122"
                      />
                    </g>
                    <g
                      id="wing"
                      transform="translate(251.626197, 126.174484) scale(-1, -1) translate(-251.626197, -126.174484) translate(185.126197, 90.174484)"
                    >
                      <line
                        x1="35.3634628"
                        y1="23.0626509"
                        x2="131.456689"
                        y2="42.1296768"
                        id="Path-6"
                        stroke="url(#linearGradient-1)"
                        strokeWidth="3.36"
                      />
                      <polygon
                        id="Rectangle"
                        stroke="url(#linearGradient-3)"
                        strokeWidth="3.92"
                        fill="#000000"
                        transform="translate(61.770786, 36.106828) rotate(-80.000000) translate(-61.770786, -36.106828) "
                        points="36.1648914 -21.8689903 80.3142517 8.05540744 83.0141977 40.0737398 87.3766809 94.0826472 42.5881027 91.957764"
                      />
                    </g>
                    <polygon
                      id="Rectangle-Copy-2"
                      stroke="url(#linearGradient-4)"
                      strokeWidth="3.92"
                      fill="#000000"
                      transform="translate(159.695643, 108.065603) rotate(10.000000) translate(-159.695643, -108.065603) "
                      points="134.94713 74.4148212 189.6714 3.99751204 188.546799 150.511068 129.719886 212.133695"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </motion.svg>
        <div
          style={{ paddingLeft: '47%', transform: 'translateY(-50%)' }}
          className="absolute left-0 z-0"
        >
          <svg
            width="1372px"
            height="1372px"
            viewBox="0 0 1372 1372"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <title>satellite-orbit</title>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
              strokeDasharray="32,14"
            >
              <g
                id="components-copy"
                transform="translate(-1870.000000, -242.000000)"
                stroke="#A3A0A0"
                strokeWidth="6"
              >
                <motion.path
                  d="M2556,1611 C2933.21048,1611 3239,1305.21048 3239,928 C3239,550.789516 2933.21048,245 2556,245 C2178.78952,245 1873,550.789516 1873,928 C1873,1305.21048 2178.78952,1611 2556,1611 Z"
                  id="satellite-orbit"
                  style={orbitTransforms}
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

AnimatedSatelliteImage.propTypes = {
  className: PropTypes.string,
};

AnimatedSatelliteImage.defaultProps = {
  className: 'h-full w-full',
};

export default AnimatedSatelliteImage;
