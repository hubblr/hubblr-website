import React from "react";
import PropTypes from "prop-types";

const FullSizeSection = React.forwardRef(({children}, ref) => {
  return (
    <section
      ref={ref}
      className={"h-screen w-full px-16"}
    >
      {children}
    </section>
  )
})

FullSizeSection.displayName = 'FullSizeSection';

FullSizeSection.propTypes = {
  children: PropTypes.node,
};

export default FullSizeSection;