import React from "react";
import NavigationLinkHubblrIcon from "./navigationLinkHubblrIcon";
import GradientBorderButtonAppShortArrow from "../gradientBorderButtons/gradientBorderButtonAppShortArrow";

function NavBarTop() {
  return (
    <div
      className={"fixed top-0 w-full z-40 p-5"}
    >
      <div
        className={"absolute w-full bg-gray-900 inset-0"}
        style={{
          backdropFilter: "blur(10px)",
          opacity: "0.3"
        }}
      />
      <div
        className={"relative flex justify-center"}
      >
        <NavigationLinkHubblrIcon/>
        <div
          className={"absolute right-0 top-1/2 transform -translate-y-1/2"}
        >
          <GradientBorderButtonAppShortArrow
            buttonText={"Kontaktieren"}
            theme={"dark"}
          />
        </div>
      </div>
    </div>
  )
}

export default NavBarTop;