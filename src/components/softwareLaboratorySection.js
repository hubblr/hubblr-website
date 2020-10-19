import React from "react";
import MainSection from "./mainSection";
import LightningImage from "./lightningImage";
import SectionHeading from "./sectionHeading";
import ConceptCard from "./conceptCard";
import HubblrImage from "./hubblrImage";
import GradientBorderButtonShortArrow from "./gradientBorderButtonShortArrow";

const SoftwareLaboratorySection = () => {
  return (
    <MainSection
      height={"200vh"}
      transformElements={[
        {
          element: <LightningImage/>,
          positionClass: "top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",
          transform: {
            cssProp: "opacity",
            range: [0, 1],
            scrollPercentageStart: 10,
            scrollPercentageEnd: 30,
          }
        },
        {
          element: <SectionHeading
            heading={"Software Laboratory"}
          />,
          positionClass: "top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",
          transform: {
            cssProp: "opacity",
            range: [0, 1],
            scrollPercentageStart: 30,
            scrollPercentageEnd: 60,
          }
        },
        {
          element: <HubblrImage
            className={"w-32"}
          />,
          positionClass: "top-3 left-1/2 -translate-x-1/2",
          transform: {
            cssProp: "opacity",
            range: [0, 1],
            scrollPercentageStart: 30,
            scrollPercentageEnd: 60,
          }
        },
        {
          element: <GradientBorderButtonShortArrow
            buttonText={"Kontaktieren"}
            borderWidth={"3px"}
          />,
          positionClass: "top-3 right-3",
          transform: {
            cssProp: "opacity",
            range: [0, 1],
            scrollPercentageStart: 30,
            scrollPercentageEnd: 60,
          }
        },
        {
          element: <ConceptCard
            title={"Software Laboratory"}
            description={"Gemeinsam konzipieren, entwickeln und testen wir Ihr " +
              "digitales Projekt"}
            tabledConcepts={[
              {
                title: "Konzept & Design",
                content: "Projektplanung und Beratung zur Umsetzung, " +
                  "Technologieberatung sowie User-Interface Design der Anwendung."
              },
              {
                title: "Prototyping & User-Testing",
                content: "Nutzer-zentriertes Testing und itterative Gestaltung des" +
                  " Projektes während der Design und Entwicklungs-Phase."
              },
              {
                title: "Softwareentwicklung",
                content: "Mit Ihrem Entwicklungsteam oder vollständig autark " +
                  "entwickelt unser interdisziplinäres Team das Projekt."
              },
              {
                title: "Hosting & Support",
                content: "Verlassen Sie sich auf einen sicheren und zuverlässigen" +
                  " Betrieb Ihres Projektes."
              }
            ]}
          />,
          positionClass: "top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",
          transform: {
            cssProp: "opacity",
            range: [0, 1],
            scrollPercentageStart: 60,
            scrollPercentageEnd: 90,
          }
        }
      ]}
    />
  )
}

export default SoftwareLaboratorySection;