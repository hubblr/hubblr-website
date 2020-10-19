import React from "react";
import IntroductionSection from "../components/introductionSection";
import SoftwareLaboratorySection from "../components/softwareLaboratorySection";
import VenturesSection from "../components/venturesSection";

function IndexPage() {
  return (
    <div
      className={"bg-black text-white font-sans"}
    >
      <IntroductionSection/>
      <SoftwareLaboratorySection/>
      <VenturesSection/>
    </div>
  );
}

export default IndexPage;
