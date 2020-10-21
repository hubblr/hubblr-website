import React from "react";
import PropTypes from "prop-types";
import hubblrIcon from "../../images/hubblr-icon.png";

function HubblrImage(props) {
  return (
    <img
      src={hubblrIcon}
      alt={"hubblr icon"}
      className={props.className}
    />
  )
}

HubblrImage.propTypes = {
  className: PropTypes.string,
}

export default HubblrImage;