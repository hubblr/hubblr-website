import React from "react";
import PropTypes from "prop-types";

import SectionScrollBarLine from "./sectionScrollBarLine";
import DoubleDownArrowImages from "./doubleDownArrowImages";
import DoubleUpArrowImages from "./doubleUpArrowImages";

function SectionScrollBar(props) {
  const arrowImages = props.lowerFlexGrow
    ? <DoubleDownArrowImages/>
    : <DoubleUpArrowImages/>;

  return (
    <div
      className={"h-full flex flex-col items-center w-16 gap-6"}
    >
      <div
        style={{
          flexGrow: props.upperFlexGrow,
        }}
      >
        <SectionScrollBarLine/>
      </div>

      {arrowImages}

      <div
        style={{
          flexGrow: props.lowerFlexGrow,
        }}
      >
        <SectionScrollBarLine/>
      </div>

    </div>
  )

}

SectionScrollBar.propTypes = {
  upperFlexGrow: PropTypes.number.isRequired,
  lowerFlexGrow: PropTypes.number.isRequired,
}

export default SectionScrollBar;