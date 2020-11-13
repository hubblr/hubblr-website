import React from 'react';
import PropTypes from 'prop-types';
import AnimatedSatelliteDesktop from './AnimatedSatelliteDesktop';
import SatelliteImage from './SatelliteImage';
import AnimatedOrbit from './AnimatedOrbit';
import { MobileAndTabletQuery, DesktopQuery } from '../../../util/helpers';

function AnimatedSatelliteImage({ className }) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div>
        <MobileAndTabletQuery>
          <SatelliteImage />
        </MobileAndTabletQuery>
        <DesktopQuery>
          <AnimatedSatelliteDesktop className="relative z-10" />
        </DesktopQuery>

        <DesktopQuery>
          <div
            style={{ paddingLeft: '50%', marginLeft: '-15px', transform: 'translateY(-50%)' }}
            className="absolute left-0 z-0"
          >
            <AnimatedOrbit />
          </div>
        </DesktopQuery>
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
