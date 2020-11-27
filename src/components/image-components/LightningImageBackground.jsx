import React from 'react';
import AnimatedLightningImage from '../index/animated-elements/lightning-image/AnimatedLightningImage';
import { DesktopQuery, MobileAndTabletQuery } from '../../util/helpers';

function LightningImageBackground() {
  return (
    <>
      <MobileAndTabletQuery>
        <AnimatedLightningImage className="w-24 h-auto" />
      </MobileAndTabletQuery>
      <DesktopQuery>
        <AnimatedLightningImage className="h-1/2 w-auto" />
      </DesktopQuery>
    </>
  );
}

export default LightningImageBackground;
