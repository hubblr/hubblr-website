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
import IntroductionSectionContent from '../components/page-sections/IntroductionSectionContent';
import useOffsetHeight from '../components/hooks/dimensions/useOffsetHeight';
import useWindowPageYOffset from '../components/hooks/window/useWindowPageYOffset';
import IndexPageContext from '../context/IndexPageContext';
import { ANIMATION_AREA_HEIGHT_DESKTOP, ANIMATION_AREA_HEIGHT_MOBILE } from '../config';
import { TabletBreakpoint } from '../util/helpers';

// TODO: not sure about this
// disable regular scroll restoration on reload
function useDisableScrollRestoration() {
  useEffect(() => {
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
  });
}

// enable jump on history navigation
function useUpdateHashOnHistoryChange(hashRef, updateHashRef) {
  useLayoutEffect(() => {
    const history = createHistory(window);
    history.listen(({ location: nextLocation }) => {
      updateHashRef(nextLocation.hash);
    });
  }, [updateHashRef]);
}

// decide when to show navbar and get its height to pass in Provider
function useNavBarState(introContentRef, navBarRef) {
  const [showNavBar, setShowNavbar] = useState(false);
  const [, introContentScrollEndY] = useYPositions(introContentRef);
  const windowStartY = useWindowPageYOffset();
  const { scrollY } = useViewportScroll();
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
  // get size of navbar
  const navBarHeight = useOffsetHeight(navBarRef);
  console.log(navBarHeight);
  return {
    showNavBar,
    navBarHeight,
  };
}

function IndexPage() {
  // disable scroll restoration on reload
  useDisableScrollRestoration();

  // decide which animation area height to use
  const { width: windowWidth } = useWindowResizeInfo();
  const isLg = windowWidth > TabletBreakpoint;
  const animationAreaHeight = isLg ? ANIMATION_AREA_HEIGHT_DESKTOP : ANIMATION_AREA_HEIGHT_MOBILE;

  // decide when to show navbar and get its height to pass in Provider
  const introContentRef = useRef();
  const navBarRef = useRef();
  const { showNavBar, navBarHeight } = useNavBarState(introContentRef, navBarRef);

  // handling of page navigation and reload - first load and back/forth history navigation triggers
  // "jump" to position marked in hash
  const location = useLocation();
  const hash = useRef(location.hash);
  const [jumpIsEnabled, setJumpIsEnabled] = useState(true);

  // enable jump on history navigation
  const updateHash = (nextHash) => {
    hash.current = nextHash;
    setJumpIsEnabled(true);
  };
  useUpdateHashOnHistoryChange(hash, updateHash);

  // create refs and position info for all sections -> determine jump breakpoints
  const softwareLabSectionRef = useRef();
  const [softwareLabSectionStartY] = useYPositions(softwareLabSectionRef);
  const consultingSectionRef = useRef();
  const [consultingSectionStartY] = useYPositions(consultingSectionRef);
  const venturesSectionRef = useRef();
  const [venturesSectionStartY] = useYPositions(venturesSectionRef);
  const revOrder = useMemo(() => {
    const softwareLabInfo = {
      ref: softwareLabSectionRef,
      startY: softwareLabSectionStartY + animationAreaHeight,
      hash: '#softwareLaboratory',
    };
    const consultingInfo = {
      ref: consultingSectionRef,
      startY: consultingSectionStartY + animationAreaHeight,
      hash: '#consulting',
    };
    const venturesInfo = {
      ref: venturesSectionRef,
      startY: venturesSectionStartY + animationAreaHeight,
      hash: '#ventures',
    };
    return [venturesInfo, consultingInfo, softwareLabInfo];
  }, [
    animationAreaHeight,
    consultingSectionStartY,
    softwareLabSectionStartY,
    venturesSectionStartY,
  ]);
  const orderLen = revOrder.length;

  // jump to location set in hash
  const { scrollY } = useViewportScroll();
  useLayoutEffect(() => {
    function scrollToHash() {
      for (let i = 0; i < orderLen; i += 1) {
        const { startY, hash: sectionHash } = revOrder[i];
        if (hash.current === sectionHash) {
          if (window.history.scrollRestoration) {
            window.history.scrollRestoration = 'manual';
          }
          window.scrollTo(0, startY);
          return;
        }
      }
      if (window.history.scrollRestoration) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }
    // need to be sure that everything is fully build, so set timeout
    const timeoutId = jumpIsEnabled
      ? setTimeout(() => {
          scrollToHash();
          setJumpIsEnabled(false);
        }, 10)
      : null;
    return () => {
      clearTimeout(timeoutId);
    };
  }, [jumpIsEnabled, orderLen, revOrder, scrollY]);

  // update current hash on scroll, push history entry
  useLayoutEffect(() => {
    function update(curY) {
      // careful: jump triggers scroll, so do not act until jump is done!
      if (jumpIsEnabled) {
        return;
      }
      // check section breakpoints
      let nextHash = '';
      for (let i = 0; i < orderLen; i += 1) {
        const { startY, hash: sectionHash } = revOrder[i];
        if (startY > 0 && curY >= startY) {
          nextHash = sectionHash;
          break;
        }
      }
      // update hash if necessary
      if (nextHash !== hash.current) {
        hash.current = nextHash;
        if (nextHash) {
          window.history.pushState({}, '', nextHash);
        } else {
          window.history.pushState({}, '', '/');
        }
      }
    }
    // subscribe to scroll
    const unsubscribeY = scrollY.onChange((curY) => {
      update(curY);
    });
    // fire immediately to work properly on resize
    update(window.pageYOffset);
    return () => {
      unsubscribeY();
    };
  }, [animationAreaHeight, jumpIsEnabled, location, orderLen, revOrder, scrollY]);

  return (
    <IndexPageContext.Provider
      value={{
        navBarHeight,
      }}
    >
      <Layout>
        <div>
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
      <NavBarTop ref={navBarRef} shouldBeShown={showNavBar} />
    </IndexPageContext.Provider>
  );
}

export default IndexPage;
