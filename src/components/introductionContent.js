import React from "react";
import HubblrImage from "./hubblrImage";
import GradientBorderButtonAppLongArrow from "./gradientBorderButtonAppLongArrow";

function IntroductionContent() {
  return (
    <>
      <HubblrImage
        className={"w-40 mb-12"}
      />
      <h1 className={"mb-10 text-6xl font-black leading-none"}>
        Developing our digital
        world of tomorrow
      </h1>

      <h2 className="mb-12 text-2xl font-light leading-tight">
        Um Nutzer-Zentrierte und innovative Softwareprodukte mit der
        Aufschrift “Made in Germany” endlich auch auf der Welt zu sehen,
        entwickeln wir in 3 Sparten herausstechende Projekte.
      </h2>

      <GradientBorderButtonAppLongArrow
        buttonText={"Jetzt kontaktieren"}
        theme={"dark"}
      />
    </>
  );
}

export default IntroductionContent;
