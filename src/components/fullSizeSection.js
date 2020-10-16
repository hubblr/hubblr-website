import React from "react";
import PropTypes from "prop-types";

function FullSizeSection({children}) {
  return (
    <section
      className={"h-screen w-full px-16"}
    >
      {children}
    </section>
  )
}

FullSizeSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FullSizeSection;