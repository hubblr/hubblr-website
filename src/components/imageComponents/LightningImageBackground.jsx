import React from 'react';
import LightningImage from './LightningImage';
import { DesktopQuery, MobileAndTabletQuery } from '../../util/helpers';

function LightningImageBackground() {
  return (
    <>
      <MobileAndTabletQuery>
        <LightningImage className="w-1/4" />
      </MobileAndTabletQuery>
      <DesktopQuery>
        <LightningImage className="h-1/2" />
      </DesktopQuery>
    </>
  );
}

export default LightningImageBackground;
