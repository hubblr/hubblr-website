import React from "react";
import PropTypes from "prop-types";
import FullSizeSection from "./fullSizeSection";

import SectionScrollBar from "./sectionScrollBar";
//import DoubleDownArrowImages from "./doubleDownArrowImages";

function MainSection({children}) {
  return (
    <FullSizeSection>
      <div
        className={"relative h-full"}
      >

        {children}

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

MainSection.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainSection;