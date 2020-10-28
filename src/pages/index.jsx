import React, { useState, useEffect, useRef } from 'react';
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
import measureHiddenElement from '../util/measureHiddenElement';

function IndexPage() {
  const location = useLocation();

  const [, windowHeight] = useWindowSize();
  const { scrollY } = useViewportScroll();

  // find navbar height to pass in provider
  const introContentRef = useRef();
  const navBarRef = useRef();
  const [navBarHeight, setNavBarHeight] = useState();
  if (!navBarHeight && navBarRef.current) {
    setNavBarHeight(measureHiddenElement(navBarRef.current).height);
  }
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
    endY: softwareLabSectionEndY - windowHeight,
    hash: '#softwareLaboratory',
  };
  const consultingInfo = {
    endY: consultingSectionEndY - windowHeight,
    hash: '#consulting',
  };
  const venturesInfo = {
    fullY: venturesSectionEndY,
    endY: venturesSectionEndY - windowHeight,
    hash: '#ventures',
  };
  const order = [softwareLabInfo, consultingInfo, venturesInfo];
  const orderLen = order.length;

  // jump to location set in hash
  const [mustJump, setMustJump] = useState(true);
  const [allRendered, setAllRendered] = useState(false);
  const [renderWaiterStarted, setRenderWaiterStarted] = useState(false);
  function applyScroll() {
    if (!location.hash) {
      setMustJump(false);
    }
    if (!mustJump) {
      return;
    }
    if (!allRendered) {
      if (renderWaiterStarted) {
        return;
      }
      // need to wait for all children to be rendered and fully updated, otherwise positions are off
      setTimeout(() => {
        setAllRendered(true);
      }, 1);
      setRenderWaiterStarted(true);
      return;
    }
    // scrolling based on hash on very first page load
    for (let i = 0; i < orderLen; i += 1) {
      const { endY, hash: sectionHash } = order[i];
      if (location.hash === sectionHash) {
        window.scrollTo(0, endY);
        setMustJump(false);
        break;
      }
    }
  }
  useEffect(() => {
    applyScroll();
  });

  // update location on scroll
  const revOrder = order.reverse();
  useEffect(() => {
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
    <>
      <IndexLayout>
        <IndexPageContext.Provider value={navBarHeight}>
          <div>
            <IntroductionSection ref={introContentRef} />
          </div>
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
        </IndexPageContext.Provider>
      </IndexLayout>
      <NavBarTop className={`${showNavBar ? '' : 'hidden'}`} ref={navBarRef} />
    </>
  );
}

export default IndexPage;
