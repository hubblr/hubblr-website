import React, { useState, useLayoutEffect, useRef } from 'react';
import { useLocation } from '@reach/router';
import { useViewportScroll } from 'framer-motion';
import Layout from '../components/page-layouts/Layout';
import IntroductionSection from '../components/page-sections/IntroductionSection';
import SoftwareLaboratorySection from '../components/page-sections/SoftwareLaboratorySection';
import ConsultingSection from '../components/page-sections/ConsultingSection';
import VenturesSection from '../components/page-sections/VenturesSection';
import NavBarTop from '../components/nav-bar/NavBarTop';
import HubblrPageLinks from '../components/links/HubblrPageLinks';
import useYPositions from '../components/hooks/scroll/useYPositions';
import useWindowInfo from '../components/hooks/window/useWindowInfo';
import IndexPageContext from '../context/IndexPageContext';
import useClientWidth from '../components/hooks/dimensions/useClientWidth';
import IntroductionSectionContent from '../components/page-sections/IntroductionSectionContent';
import useOffsetHeight from '../components/hooks/dimensions/useOffsetHeight';

function getSectionAnimationEnd(sectionRef) {
  const height = sectionRef.current.clientHeight;
  const pageY = sectionRef.current.offsetTop;
  return pageY + height - window.innerHeight;
}

function IndexPage() {
  const location = useLocation();

  const { height: windowHeight, startY: windowStartY } = useWindowInfo();
  const { scrollY } = useViewportScroll();

  // decide when to show navbar
  const [showNavBar, setShowNavbar] = useState(false);
  const introContentRef = useRef();
  const [, introContentScrollEndY] = useYPositions(introContentRef, true);
  useLayoutEffect(() => {
    // must fire before scrollY updates
    setShowNavbar(windowStartY > introContentScrollEndY);
    // this handles continuous updates
    const unscubscribeScroll = scrollY.onChange((y) => {
      setShowNavbar(y > introContentScrollEndY);
    });
    return () => {
      unscubscribeScroll();
    };
  }, [introContentScrollEndY, scrollY, windowStartY]);
  // get width of navbar parent to size fixed positioned navbar
  const sectionContainerRef = useRef();
  // eslint-disable-next-line no-unused-vars
  const sectionContainerWidth = useClientWidth(sectionContainerRef);
  // get size of navbar
  const navBarRef = useRef();
  const navBarHeight = useOffsetHeight(navBarRef);

  // software lab section
  const softwareLabSectionRef = useRef();
  const [, softwareLabSectionEndY] = useYPositions(softwareLabSectionRef);
  // consulting section
  const consultingSectionRef = useRef();
  const [, consultingSectionEndY] = useYPositions(consultingSectionRef);
  // ventures section
  const venturesSectionRef = useRef();
  const [, venturesSectionEndY] = useYPositions(venturesSectionRef);

  // build info for each section
  const softwareLabInfo = {
    ref: softwareLabSectionRef,
    endY: Math.floor(softwareLabSectionEndY - windowHeight - 1),
    hash: '#softwareLaboratory',
  };
  const consultingInfo = {
    ref: consultingSectionRef,
    endY: Math.floor(consultingSectionEndY - windowHeight - 1),
    hash: '#consulting',
  };
  const venturesInfo = {
    ref: venturesSectionRef,
    endY: Math.floor(venturesSectionEndY - windowHeight - 1),
    hash: '#ventures',
  };
  const order = [softwareLabInfo, consultingInfo, venturesInfo];
  const orderLen = order.length;

  // jump to location set in hash
  useLayoutEffect(() => {
    // need to be sure that everything is fully build
    setTimeout(() => {
      for (let i = 0; i < orderLen; i += 1) {
        const { ref, hash: sectionHash } = order[i];
        if (location.hash === sectionHash) {
          const animationEnd = getSectionAnimationEnd(ref);
          window.scrollTo(0, animationEnd);
        }
      }
    }, 1);
  }, []);

  // update location on scroll
  const revOrder = order.reverse();
  useLayoutEffect(() => {
    const unsubscribeY = scrollY.onChange((curY) => {
      let nextHash = '';
      for (let i = 0; i < orderLen; i += 1) {
        const { endY, hash: sectionHash } = revOrder[i];
        if (endY > 0 && curY >= endY) {
          nextHash = sectionHash;
          break;
        }
      }
      if (nextHash !== location.hash) {
        location.hash = nextHash;
        if (nextHash) {
          // navigate('/');
        } else {
          // navigate('/');
        }
      }
    });
    return () => {
      unsubscribeY();
    };
  }, [location, orderLen, revOrder, scrollY]);

  return (
    <IndexPageContext.Provider
      value={{
        navBarHeight, // refers to the tailwind class
      }}
    >
      <Layout>
        <div ref={sectionContainerRef}>
          <IntroductionSection>
            <div ref={introContentRef}>
              <IntroductionSectionContent />
            </div>
          </IntroductionSection>
          <SoftwareLaboratorySection ref={softwareLabSectionRef} />
          <ConsultingSection ref={consultingSectionRef} />
          <VenturesSection ref={venturesSectionRef} />
        </div>
        <div className="container mx-auto">
          <HubblrPageLinks />
        </div>
      </Layout>
      <NavBarTop
        ref={navBarRef}
        className={`fixed w-full top-0 h-20 z-40 ${
          showNavBar ? 'opacity-100' : 'invisible opacity-0'
        }`}
        contentWidth={sectionContainerWidth}
      />
    </IndexPageContext.Provider>
  );
}

export default IndexPage;
