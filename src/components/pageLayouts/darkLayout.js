import React from "react";
import PropTypes from "prop-types";

function DarkLayout(props) {
  return <div
    className="bg-black text-white font-sans"
  >
    {props.children}
  </div>
}

DarkLayout.propTypes = {
  children: PropTypes.node,
}

export default DarkLayout;