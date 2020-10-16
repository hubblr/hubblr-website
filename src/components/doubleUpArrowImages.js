import React from "react";
import ShortArrowDownImage from "./shortArrowDownImage";

function DoubleUpArrowImages() {
  return (
    <div
      className={"w-full"}
    >
      <ShortArrowDownImage
        flip={true}
      />
      <ShortArrowDownImage
        flip={true}
      />
    </div>
  )
}

export default DoubleUpArrowImages;