import React, {useState} from "react";
import NavBarTop from "../components/NavBarTop";
import IntroductionSection from "../components/introductionSection";
import SoftwareLaboratorySection from "../components/softwareLaboratorySection";
import VenturesSection from "../components/venturesSection";
import useScrollPercentages from "../components/useScrollPercentages";
import {useViewportScroll} from "framer-motion";

/* scrollYProgress appears to be ahead of actual scroll position. As a remedy,
* delay the navbar trigger by a sensible amount. */
const graceYProgress = 0.02;

function IndexPage() {
  const [showFixedNavbar, setShowFixedNavbar] = useState(false);
  const introContentRef = React.createRef();

  //hook for intro content y-scroll breakpoints (omit percentage start + step)
  const [, introContentScrollPercentageEnd] =
    useScrollPercentages(introContentRef);

  //only show navbar if user has scrolled past scroll percentage endpoint
  const {scrollYProgress} = useViewportScroll();
  //TODO: maybe this does not have to be watched / might want to debounce
  scrollYProgress.onChange(yProg => {
    setShowFixedNavbar(yProg > introContentScrollPercentageEnd +
      graceYProgress);
  })
  const navbar = showFixedNavbar ? <NavBarTop/> : null;

  return (
    <div
      className={"bg-black text-white font-sans"}
    >
      <div>
        <IntroductionSection
          ref={introContentRef}
        />
        {navbar}
      </div>
      <SoftwareLaboratorySection/>
      <VenturesSection/>
    </div>
  );
}

export default IndexPage;
