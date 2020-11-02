import React from 'react';
import ConsultingIllustrationImage from './ConsultingIllustrationImage';
import { MobileAndTabletQuery, DesktopQuery } from '../../util/helpers';

function ConsultingIllustrationImageBackground() {
  return (
    <>
      <MobileAndTabletQuery>
        <ConsultingIllustrationImage className="w-1/2" />
      </MobileAndTabletQuery>
      <DesktopQuery>
        <ConsultingIllustrationImage className="h-1/2" />
      </DesktopQuery>
    </>
  );
}

export default ConsultingIllustrationImageBackground;
