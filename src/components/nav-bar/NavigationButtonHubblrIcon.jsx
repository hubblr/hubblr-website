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
      <HubblrImage className="w-24" />
    </button>
  );
}

export default NavigationButtonHubblrIcon;
