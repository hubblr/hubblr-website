import React from 'react';
import AnimatedLightningImage from '../animated-elements/lightning-image/AnimatedLightningImage';
import { DesktopQuery, MobileAndTabletQuery } from '../../util/helpers';

function LightningImageBackground() {
  return (
    <>
      <MobileAndTabletQuery>
        <AnimatedLightningImage className="w-1/3" />
      </MobileAndTabletQuery>
      <DesktopQuery>
        <AnimatedLightningImage className="h-1/2" />
      </DesktopQuery>
    </>
  );
}

export default LightningImageBackground;
