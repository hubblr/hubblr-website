import React, {useState} from "react";
//page layout
import DarkLayout from "../components/pageLayouts/darkLayout";
//sections to compose page of
import IntroductionSection from "../components/pageSections/introductionSection";
import SoftwareLaboratorySection from "../components/pageSections/softwareLaboratorySection";
import ConsultingSection from "../components/pageSections/consultingSection";
import VenturesSection from "../components/pageSections/venturesSection";
//fixed elements
import NavBarTop from "../components/navBar/NavBarTop";
//scroll behavior
import useScrollPercentages from "../components/hooks/scroll/useScrollPercentages";
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
    <DarkLayout>
      <div>
        <IntroductionSection
          ref={introContentRef}
        />
        {navbar}
      </div>
      <SoftwareLaboratorySection/>
      <ConsultingSection/>
      <VenturesSection/>
    </DarkLayout>
  );
}

export default IndexPage;
