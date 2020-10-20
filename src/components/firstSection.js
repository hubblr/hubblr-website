import React from "react";
import PropTypes from "prop-types"

import SectionScrollBar from "./sectionScrollBar";

function FirstSection({children}) {
  return (
    <div
      className={"w-full h-3/4 px-16"}
    >
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
    </div>
  );
}

FirstSection.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FirstSection;