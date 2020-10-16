import React from "react";
import FullSizeSection from "./fullSizeSection";

import SectionScrollBar from "./sectionScrollBar";
//import DoubleDownArrowImages from "./doubleDownArrowImages";

function MainSection() {
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
            upperFlexGrow={4}
            lowerFlexGrow={1}
          />
        </div>
      </div>

    </FullSizeSection>
  )
}

export default MainSection;