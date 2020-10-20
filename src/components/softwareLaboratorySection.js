import React from "react";
import MainSection from "./mainSection";
import LightningImage from "./lightningImage";
import SectionHeading from "./sectionHeading";
import MainContentCard from "./mainContentCard";

const SoftwareLaboratorySection = () => {
  return (
    <MainSection
      height={"250vh"}
      transformElements={[
        {
          wrappedElement: <LightningImage/>,
          positionClass: "top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",
          transforms: [
            {
              cssProp: "opacity",
              range: [0, 1],
              scrollPercentageStart: 20,
              scrollPercentageEnd: 40,
            }
          ]
        },
        {
          wrappedElement: <SectionHeading
            heading={"Software Laboratory"}
          />,
          positionClass: "top-1/2 left-1/2",
          transforms: [
            {
              cssProp: "opacity",
              range: [0, 1],
              scrollPercentageStart: 40,
              scrollPercentageEnd: 70,
            },
            {
              cssProp: "top",
              range: ['50%', '20%'],
              scrollPercentageStart: 40,
              scrollPercentageEnd: 70,
            },
            {
              cssProp: "scale",
              range: [1, 0.5],
              scrollPercentageStart: 40,
              scrollPercentageEnd: 70,
            },
          ]
        },
        {
          wrappedElement: <MainContentCard
            conceptCardDescription={{
              title: "Software Laboratory",
              description: "Gemeinsam konzipieren, entwickeln und testen wir Ihr " +
                "digitales Projekt",
              tabledConcepts: [
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
                },
              ],
            }}
            navigationButtonInfo={{
              text: "Zum Laboratory"
            }}
          />,
          positionClass: "top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",
          transforms: [
            {
              cssProp: "opacity",
              range: [0, 1],
              scrollPercentageStart: 60,
              scrollPercentageEnd: 70,
            }
          ]
        }
      ]}
    />
  )
}

export default SoftwareLaboratorySection;