import React from "react";
import PropTypes from "prop-types";
import FullSizeSection from "./fullSizeSection";
import SectionScrollBar from "./sectionScrollBar";

function LastSection({children}) {
  return (
    <FullSizeSection>
      <div
        className={"relative h-full"}
      >

        <div
          className={"flex items-center justify-center h-full"}
        >
          {children}
        </div>

        <div
          className={"absolute h-full inset-0"}
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

LastSection.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LastSection;