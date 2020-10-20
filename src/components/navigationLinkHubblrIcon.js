import React from "react";
import HubblrImage from "./hubblrImage";

function NavigationLinkHubblrIcon() {
  return (
    <a
      className={"cursor-pointer"}
      onClick={() => {
        scroll(0, 0);
      }}
    >
      <HubblrImage
        className={"w-32"}
      />
    </a>
  )
}

export default NavigationLinkHubblrIcon;