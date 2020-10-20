import React from "react";
import FirstSection from "./firstSection";
import IntroductionContent from "./introductionContent";

const IntroductionSection = React.forwardRef((props, contentRef) => {
  return (
    <FirstSection>
      <div
        ref={contentRef}
        className={"mb-40"}
      >
        <IntroductionContent/>
      </div>
    </FirstSection>
  );
})

IntroductionSection.displayName = "IntroductionSection";

export default IntroductionSection;