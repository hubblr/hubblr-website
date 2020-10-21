import React from "react";
import PropTypes from "prop-types";
import PageLinkItem from "./pageLinkItem";

function PageLinks(props) {
  return (
    <div
      className="flex gap-5"
    >
      {
        props.links.map((linkInfo, i) => {
          return (
            <PageLinkItem
              key={i}
              notificationNumber={linkInfo.notificationNumber}
            >
              {linkInfo.text}
            </PageLinkItem>
          )
        })
      }
    </div>
  )
}

PageLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    notificationNumber: PropTypes.number,
  }))
}

export default PageLinks;