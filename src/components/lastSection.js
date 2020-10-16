import React from "react";
import FullSizeSection from "./fullSizeSection";
import SectionScrollBar from "./sectionScrollBar";

function LastSection() {
  return (
    <FullSizeSection>
      <div
        className={"relative h-full"}
      >

        {/*content goes here*/}

        <div
          className={"absolute h-full"}
        >
          <SectionScrollBar
            upperFlexGrow={1}
            lowerFlexGrow={0}
          />
        </div>

      </div>
    </FullSizeSection>
  )
}

export default LastSection;