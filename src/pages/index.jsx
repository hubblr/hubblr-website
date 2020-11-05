import React, { useState, useLayoutEffect, useEffect, useRef } from 'react';
import { useLocation } from '@reach/router';
import { useViewportScroll } from 'framer-motion';
import Layout from '../components/pageLayouts/Layout';
import IntroductionSection from '../components/pageSections/IntroductionSection';
import SoftwareLaboratorySection from '../components/pageSections/SoftwareLaboratorySection';
import ConsultingSection from '../components/pageSections/ConsultingSection';
import VenturesSection from '../components/pageSections/VenturesSection';
import NavBarTop from '../components/navBar/NavBarTop';
import useYPositions from '../components/hooks/scroll/useYPositions';
import useWindowSize from '../components/hooks/window/useWindowSize';
import IndexPageContext from '../context/IndexPageContext';
import useClientWidth from '../components/hooks/dimensions/useClientWidth';

function getSectionAnimationEnd(sectionRef) {
  const height = sectionRef.current.clientHeight;
  const pageY = sectionRef.current.offsetTop;
  return pageY + height - window.innerHeight;
}

function IndexPage() {
  const location = useLocation();

  const [, windowHeight] = useWindowSize();
  const { scrollY } = useViewportScroll();

  // decide when to show navbar
  const [showNavBar, setShowNavbar] = useState(false);
  const introContentRef = useRef();
  const [, introContentScrollEnd] = useYPositions(introContentRef);
  useEffect(() => {
    const unscubscribeScroll = scrollY.onChange((y) => {
      setShowNavbar(y > introContentScrollEnd);
    });
    return () => {
      unscubscribeScroll();
    };
  }, [introContentScrollEnd, scrollY]);
  // get width of navbar parent to size fixed positioned navbar
  const sectionContainerRef = useRef();
  // eslint-disable-next-line no-unused-vars
  const sectionContainerWidth = useClientWidth(sectionContainerRef);

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

  const navBarSizeClass = '20'; // refers to the tailwind class
  return (
    <IndexPageContext.Provider
      value={{
        navBarSizeClass, // refers to the tailwind class
      }}
    >
      <Layout>
        <div ref={sectionContainerRef}>
          <IntroductionSection ref={introContentRef} />
          <SoftwareLaboratorySection ref={softwareLabSectionRef} />
          <ConsultingSection ref={consultingSectionRef} />
          <VenturesSection ref={venturesSectionRef} />
        </div>
      </Layout>
      <div className="">
        <div
          className={`fixed w-full navbar-background-blur animate top-0 h-${navBarSizeClass} z-40 ${
            showNavBar ? 'opacity-100' : 'invisible opacity-0'
          }`}
        >
          <NavBarTop contentWidth={sectionContainerWidth} />
        </div>
      </div>
    </IndexPageContext.Provider>
  );
}

export default IndexPage;
