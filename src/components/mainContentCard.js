import React from "react";
import PropTypes from "prop-types";
import DesignAdvertisementHeader from "./designAdvertisementHeader";
import ConceptCard from "./conceptCard";
import GradientBorderButtonAppLongArrow from "./gradientBorderButtonAppLongArrow";

function MainContentCard({conceptCardDescription, navigationButtonInfo}) {
  return (
    <div
      className={"flex flex-col items-center"}
    >
      <div
        className={"w-full mb-6"}
      >
        <DesignAdvertisementHeader
          targetCustomers={["Mittelständische Unternehmen", "Großunternehmen",
            "Post-Seed Startups"]}
        />
      </div>
      <div
        className={"mb-5"}
      >
        <ConceptCard
          title={conceptCardDescription.title}
          description={conceptCardDescription.description}
          tabledConcepts={conceptCardDescription.tabledConcepts}
        />
      </div>
      <GradientBorderButtonAppLongArrow
        buttonText={navigationButtonInfo.text}
        theme={"light"}
      />
    </div>
  )
}

MainContentCard.propTypes = {
  conceptCardDescription: PropTypes.object,
  navigationButtonInfo: PropTypes.object,
}

export default MainContentCard;