import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useLocation, createHistory } from '@reach/router';
import { useViewportScroll } from 'framer-motion';
import Layout from '../components/page-layouts/Layout';
import IntroductionSection from '../components/page-sections/IntroductionSection';
import SoftwareLaboratorySection from '../components/page-sections/SoftwareLaboratorySection';
import ConsultingSection from '../components/page-sections/ConsultingSection';
import VenturesSection from '../components/page-sections/VenturesSection';
import NavBarTop from '../components/nav-bar/NavBarTop';
import HubblrPageLinks from '../components/links/HubblrPageLinks';
import useYPositions from '../components/hooks/scroll/useYPositions';
import useWindowResizeInfo from '../components/hooks/window/useWindowResizeInfo';
import useClientWidth from '../components/hooks/dimensions/useClientWidth';
import IntroductionSectionContent from '../components/page-sections/IntroductionSectionContent';
import useOffsetHeight from '../components/hooks/dimensions/useOffsetHeight';
import useWindowPageYOffset from '../components/hooks/window/useWindowPageYOffset';
import IndexPageContext from '../context/IndexPageContext';
import { ANIMATION_AREA_HEIGHT_DESKTOP, ANIMATION_AREA_HEIGHT_MOBILE } from '../config';
import { TabletBreakpoint } from '../util/helpers';

// disable regular scroll restoration on reload
function useDisableScrollRestoration() {
  if (window.history.scrollRestoration) {
    window.history.scrollRestoration = 'manual';
  }
}

function useUpdateHashOnHistoryChange(hashRef, updateHashRef) {
  const history = createHistory(window);
  useLayoutEffect(() => {
    // eslint-disable-next-line no-shadow
    history.listen(({ location: nextLocation }) => {
      console.log('##################');
      updateHashRef(nextLocation.hash);
      console.log('last knows offset:', window.pageYOffset);
    });
  }, [history, updateHashRef]);
}

function IndexPage() {
  useDisableScrollRestoration();

  const location = useLocation();
  console.log('rerender!');
  console.log(location.hash);
  const hash = useRef(location.hash);
  const [jumpIsEnabled, setJumpIsEnabled] = useState(true);

  const updateHash = (nextHash) => {
    hash.current = nextHash;
    setJumpIsEnabled(true);
  };
  useUpdateHashOnHistoryChange(hash, updateHash);

  const { width: windowWidth } = useWindowResizeInfo();
  const isLg = windowWidth > TabletBreakpoint;
  const animationAreaHeight = isLg ? ANIMATION_AREA_HEIGHT_DESKTOP : ANIMATION_AREA_HEIGHT_MOBILE;

  const windowStartY = useWindowPageYOffset();

  useEffect(() => {
    console.log(windowStartY);
  }, [windowStartY]);

  const { scrollY } = useViewportScroll();

  // decide when to show navbar
  const [showNavBar, setShowNavbar] = useState(false);
  const introContentRef = useRef();
  const [, introContentScrollEndY] = useYPositions(introContentRef, true);
  useLayoutEffect(() => {
    // must fire before scrollY updates
    setShowNavbar(windowStartY > introContentScrollEndY);
    // this handles continuous updates
    const unsubscribeScroll = scrollY.onChange((y) => {
      setShowNavbar(y > introContentScrollEndY);
    });
    return () => {
      unsubscribeScroll();
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
  const [softwareLabSectionEndY] = useYPositions(softwareLabSectionRef);
  // consulting section
  const consultingSectionRef = useRef();
  const [consultingSectionEndY] = useYPositions(consultingSectionRef);
  // ventures section
  const venturesSectionRef = useRef();
  const [venturesSectionEndY] = useYPositions(venturesSectionRef);

  // build info for each section
  const revOrder = useMemo(() => {
    const softwareLabInfo = {
      ref: softwareLabSectionRef,
      endY: softwareLabSectionEndY + animationAreaHeight,
      hash: '#softwareLaboratory',
    };
    const consultingInfo = {
      ref: consultingSectionRef,
      endY: consultingSectionEndY + animationAreaHeight,
      hash: '#consulting',
    };
    const venturesInfo = {
      ref: venturesSectionRef,
      endY: venturesSectionEndY + animationAreaHeight,
      hash: '#ventures',
    };
    return [venturesInfo, consultingInfo, softwareLabInfo];
  }, [animationAreaHeight, consultingSectionEndY, softwareLabSectionEndY, venturesSectionEndY]);
  const orderLen = revOrder.length;
  console.log('software lab endy:', revOrder[2].endY);

  // jump to location set in hash
  useLayoutEffect(() => {
    console.log('SETS UP JUMP BE READY! jump is enabled:', jumpIsEnabled);
    function scrollToHash() {
      console.log('timeout fires!');
      for (let i = 0; i < orderLen; i += 1) {
        const { endY, hash: sectionHash } = revOrder[i];
        if (hash.current === sectionHash) {
          console.log('finds proper jump position...');
          window.scrollTo(0, endY);
          return;
        }
      }
      window.scrollTo(0, 0);
    }
    // need to be sure that everything is fully build
    const timeoutId = jumpIsEnabled
      ? setTimeout(() => {
          scrollToHash();
          setJumpIsEnabled(false);
        }, 1)
      : null;
    return () => {
      clearTimeout(timeoutId);
    };
  }, [jumpIsEnabled, orderLen, revOrder]);

  // update location on scroll
  useLayoutEffect(() => {
    console.log('scroller does update!');
    function update(curY) {
      if (jumpIsEnabled) {
        return;
      }
      let nextHash = '';
      for (let i = 0; i < orderLen; i += 1) {
        const { endY, hash: sectionHash } = revOrder[i];
        if (endY > 0 && curY >= endY) {
          nextHash = sectionHash;
          break;
        }
      }
      if (nextHash !== hash.current) {
        hash.current = nextHash;
        if (nextHash) {
          window.history.pushState({}, '', nextHash);
        } else {
          window.history.pushState({}, '', '/');
        }
      }
    }
    const unsubscribeY = scrollY.onChange((curY) => {
      update(curY);
    });
    update(scrollY.get());
    return () => {
      unsubscribeY();
    };
  }, [animationAreaHeight, jumpIsEnabled, location, orderLen, revOrder, scrollY]);

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
          <SoftwareLaboratorySection
            ref={softwareLabSectionRef}
            animationAreaHeight={animationAreaHeight}
          />
          <ConsultingSection ref={consultingSectionRef} animationAreaHeight={animationAreaHeight} />
          <VenturesSection ref={venturesSectionRef} animationAreaHeight={animationAreaHeight} />
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
