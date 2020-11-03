import React, { useState, useLayoutEffect, useEffect, useRef } from 'react';
import { useLocation, navigate } from '@reach/router';
import { useViewportScroll } from 'framer-motion';
import IndexLayout from '../components/pageLayouts/IndexLayout';
import IntroductionSection from '../components/pageSections/IntroductionSection';
import SoftwareLaboratorySection from '../components/pageSections/SoftwareLaboratorySection';
import ConsultingSection from '../components/pageSections/ConsultingSection';
import VenturesSection from '../components/pageSections/VenturesSection';
import NavBarTop from '../components/navBar/NavBarTop';
import useYPositions from '../components/hooks/scroll/useYPositions';
import useWindowSize from '../components/hooks/window/useWindowSize';
import IndexPageContext from '../context/IndexPageContext';

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
  const introContentRef = useRef();
  const [showNavBar, setShowNavbar] = useState(false);
  const [, introContentScrollEnd] = useYPositions(introContentRef);
  useEffect(() => {
    const unscubscribeScroll = scrollY.onChange((y) => {
      setShowNavbar(y > introContentScrollEnd);
    });
    return () => {
      unscubscribeScroll();
    };
  });

  // software lab section
  const softwareLabSectionRef = useRef();
  const [, softwareLabSectionEndY] = useYPositions(softwareLabSectionRef);
  const softwareLabContentContainerRef = useRef();
  // consulting section
  const consultingSectionRef = useRef();
  const [, consultingSectionEndY] = useYPositions(consultingSectionRef);
  const consultingContentContainerRef = useRef();
  // ventures section
  const venturesSectionRef = useRef();
  const [, venturesSectionEndY] = useYPositions(venturesSectionRef);
  const venturesContentContainerRef = useRef();
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
          navigate(nextHash);
        } else {
          navigate('/');
        }
      }
    });
    return () => {
      unsubscribeY();
    };
  });

  return (
    <IndexPageContext.Provider
      value={{
        navBarSizeClass: '20', // refers to the tailwind class
      }}
    >
      <IndexLayout>
        <IntroductionSection ref={introContentRef} />
        <SoftwareLaboratorySection
          ref={{
            fullSectionRef: softwareLabSectionRef,
            contentContainerRef: softwareLabContentContainerRef,
          }}
        />
        <ConsultingSection
          ref={{
            fullSectionRef: consultingSectionRef,
            contentContainerRef: consultingContentContainerRef,
          }}
        />
        <VenturesSection
          ref={{
            fullSectionRef: venturesSectionRef,
            contentContainerRef: venturesContentContainerRef,
          }}
        />
      </IndexLayout>
      <NavBarTop className={`${showNavBar ? '' : 'hidden'}`} />
    </IndexPageContext.Provider>
  );
}

export default IndexPage;
