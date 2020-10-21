import React from "react";
import PropTypes from "prop-types";

//TODO: change to actual navigation, not just styling
function PageLinkItem(props) {
  const notificationDiv = props.notificationNumber && props.notificationNumber > 0
    ? <div
      className="bg-white text-black rounded-full text-sm"
      style={{
        height: "1.2rem",
        width: "1.2rem",
        textAlign: "center",
        display: "table-cell",
        verticalAlign: "middle"
      }}
    >
      2
    </div>
    : null;

  return (
    <div
      className="flex items-center gap-1"
    >
      <div
        className="underline text-lg"
      >
        {props.children}
      </div>
      {notificationDiv}
    </div>
  )
}

PageLinkItem.propTypes = {
  children: PropTypes.node,
  notificationNumber: PropTypes.number,
}

export default PageLinkItem;