import React from "react";
import PageLinks from "./pageLinks";

function HubblrPageLinks() {
  return (
    <PageLinks
      links={[
        {
          text: "Impressum",
        },
        {
          text: "Datenschutz",
        },
        {
          text: "Office Münster"
        },
        {
          text: "Office Hamburg",
        },
        {
          text: "Github",
        },
        {
          text: "Jobs",
          notificationNumber: 3,
        },
      ]}
    />
  )
}

export default HubblrPageLinks;