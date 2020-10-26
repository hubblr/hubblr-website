import React, { useState, useEffect, useRef } from 'react';
import { useLocation, navigate } from '@reach/router';
// page layout
import { useViewportScroll } from 'framer-motion';
import IndexLayout from '../components/pageLayouts/IndexLayout';
// sections to compose page of
import IntroductionSection from '../components/pageSections/IntroductionSection';
import SoftwareLaboratorySection from '../components/pageSections/SoftwareLaboratorySection';
import ConsultingSection from '../components/pageSections/ConsultingSection';
import VenturesSection from '../components/pageSections/VenturesSection';
// fixed elements
import NavBarTop from '../components/navBar/NavBarTop';
// scroll behavior
import useScrollPercentages from '../components/hooks/scroll/useScrollPercentages';

/* scrollYProgress appears to be ahead of actual scroll position. As a remedy,
 * delay the navbar trigger by a sensible amount. */
const graceYProgress = 0.01;

function getSectionAnimationEnd(sectionRef) {
  const { height } = sectionRef.current.getBoundingClientRect();
  const pageY = sectionRef.current.offsetTop;
  return pageY + height - window.innerHeight;
}

function scrollToEndOfSection(sectionRef) {
  const animationEnd = getSectionAnimationEnd(sectionRef);
  window.scroll(0, animationEnd);
}

function IndexPage() {
  const { scrollY, scrollYProgress } = useViewportScroll();
  const location = useLocation();
  const introContentRef = useRef();
  const softwareLabSectionRef = useRef();
  const consultingSectionRef = useRef();
  const venturesSectionRef = useRef();
  useEffect(() => {
    const softwareLabInfo = {
      ref: softwareLabSectionRef,
      hash: '#softwareLaboratory',
    };
    const consultingInfo = {
      ref: consultingSectionRef,
      hash: '#consulting',
    };
    const venturesInfo = {
      ref: venturesSectionRef,
      hash: '#ventures',
    };
    const order = [softwareLabInfo, consultingInfo, venturesInfo];
    const revOrder = order.reverse();

    // navigation after scroll breakpoints
    scrollY.onChange((curY) => {
      let nextHash = '';
      revOrder.forEach(({ ref, hash }) => {
        if (nextHash) {
          return;
        }
        if (curY >= getSectionAnimationEnd(ref)) {
          nextHash = hash;
        }
      });
      if (nextHash !== location.hash) {
        location.hash = nextHash;
        if (nextHash) {
          navigate(nextHash);
        } else {
          navigate('/');
        }
      }
    });

    // scrolling based on hash on very first page load
    switch (location.hash) {
      case '#softwareLaboratory':
        scrollToEndOfSection(softwareLabSectionRef);
        break;
      case '#consulting':
        scrollToEndOfSection(consultingSectionRef);
        break;
      case '#ventures':
        scrollToEndOfSection(venturesSectionRef);
        break;
      default:
        break;
    }
  }, []);

  const [showFixedNavbar, setShowFixedNavbar] = useState(false);

  // hook for intro content y-scroll breakpoints (omit percentage start + step)
  const [, introContentScrollPercentageEnd] = useScrollPercentages(introContentRef);

  // only show navbar if user has scrolled past scroll percentage endpoint
  // TODO: maybe this does not have to be watched / might want to debounce
  scrollYProgress.onChange((yProg) => {
    setShowFixedNavbar(yProg > introContentScrollPercentageEnd + graceYProgress);
  });
  const navbar = showFixedNavbar ? <NavBarTop /> : null;

  return (
    <>
      <IndexLayout>
        <div>
          <IntroductionSection ref={introContentRef} />
        </div>
        <SoftwareLaboratorySection ref={softwareLabSectionRef} />
        <ConsultingSection ref={consultingSectionRef} />
        <VenturesSection ref={venturesSectionRef} />
      </IndexLayout>
      {navbar}
    </>
  );
}

export default IndexPage;
