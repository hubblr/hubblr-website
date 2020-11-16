import React from 'react';
import { Link } from 'gatsby';
import HubblrImage from '../image-components/HubblrImage';

function NavigationButtonHubblrIcon() {
  return (
    <Link to="/">
      <HubblrImage className="w-20" />
    </Link>
  );
}

export default NavigationButtonHubblrIcon;
