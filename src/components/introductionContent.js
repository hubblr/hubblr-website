import React from "react";
import hubblrIcon from "../images/hubblr-icon.png";
import LongArrowGradientButton from "./longArrowGradientBorderButton";

function IntroductionContent() {
  return (
    <div>
      <img
        src={hubblrIcon}
        alt={'hubblr icon'}
        className={"w-32 mb-12"}
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

      <div
        className={"mb-40"}
      >
        <LongArrowGradientButton
          buttonText={"Jetzt kontaktieren"}
          borderWidth={"3px"}
        />
      </div>
    </div>
  );
}

export default IntroductionContent;
