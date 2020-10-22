import React from 'react';
import HubblrImage from '../imageComponents/HubblrImage';

function NavigationButtonHubblrIcon() {
  return (
    <button
      type="button"
      className="cursor-pointer"
      onClick={() => {
        window.scroll(0, 0);
      }}
    >
      <HubblrImage className="w-32" />
    </button>
  );
}

export default NavigationButtonHubblrIcon;
