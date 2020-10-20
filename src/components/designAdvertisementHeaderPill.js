import React from "react";
import PropTypes from "prop-types";

function DesignAdvertisementHeaderPill(props) {
  return (
    <div
      className={"text-black bg-white text-lg p-3 rounded-full"}
    >
      {props.children}
    </div>
  )
}

DesignAdvertisementHeaderPill.propTypes = {
  children: PropTypes.node,
}

export default DesignAdvertisementHeaderPill;