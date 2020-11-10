import React from 'react';
import HubblrImage from '../image-components/HubblrImage';

function NavigationButtonHubblrIcon() {
  return (
    <button
      type="button"
      className="cursor-pointer h-full"
      onClick={() => {
        window.scroll(0, 0);
      }}
    >
      <HubblrImage className="h-full" />
    </button>
  );
}

export default NavigationButtonHubblrIcon;
