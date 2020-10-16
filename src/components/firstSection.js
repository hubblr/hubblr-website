import React from "react";
import PropTypes from "prop-types"
import FullSizeSection from "./fullSizeSection";

import SectionScrollBar from "./sectionScrollBar";

function FirstSection({children}) {
  return (
    <FullSizeSection>
      <div
        className={"flex flex-col h-full pt-12"}
      >
        {children}

        <div
          className={"flex-grow"}
        >
          <SectionScrollBar
            upperFlexGrow={0}
            lowerFlexGrow={1}
          />
        </div>
      </div>
    </FullSizeSection>
  );
}

FirstSection.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FirstSection;