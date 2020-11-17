import React from 'react';
import VenturesArrowImage from './VenturesArrowImage';
import { DesktopQuery, MobileAndTabletQuery } from '../../util/helpers';

function VenturesArrowImageBackground() {
  return (
    <>
      <MobileAndTabletQuery>
        <VenturesArrowImage className="h-48" />
      </MobileAndTabletQuery>
      <DesktopQuery>
        <VenturesArrowImage className="h-1/2" />
      </DesktopQuery>
    </>
  );
}

export default VenturesArrowImageBackground;
