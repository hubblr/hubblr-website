import React from "react";
import IntroductionSection from "../components/introductionSection";
import MainSection from "../components/mainSection";
import LastSection from "../components/lastSection";

function IndexPage() {
  return (
    <div
      className={"bg-black text-white font-sans"}
    >
      <IntroductionSection/>
      <MainSection/>
      <MainSection/>
      <LastSection/>
    </div>
  );
}

export default IndexPage;
