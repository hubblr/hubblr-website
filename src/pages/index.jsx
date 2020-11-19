import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useLocation, createHistory } from '@reach/router';
import { useViewportScroll } from 'framer-motion';
import Layout from '../components/layouts/Layout';
import IntroductionSection from '../components/page-sections/IntroductionSection';
import IntroductionSectionContent from '../components/page-sections/IntroductionSectionContent';
import SoftwareLaboratorySection from '../components/page-sections/SoftwareLaboratorySection';
import ConsultingSection from '../components/page-sections/ConsultingSection';
import VenturesSection from '../components/page-sections/VenturesSection';
import NavBar from '../components/nav-bar/NavBar';
import useYPositions from '../components/hooks/scroll/useYPositions';
import useWindowResizeInfo from '../components/hooks/window/useWindowResizeInfo';
import useOffsetHeight from '../components/hooks/dimensions/useOffsetHeight';
import PageContext from '../context/PageContext';
import { ANIMATION_AREA_HEIGHT_DESKTOP, ANIMATION_AREA_HEIGHT_MOBILE } from '../config';
import { TabletBreakpoint } from '../util/helpers';
import SEO from '../components/seo/Seo';
import NavBarContactButton from '../components/nav-bar/NavBarContactButton';

// disable regular scroll restoration on reload
function useDisableScrollRestoration() {
  useEffect(() => {
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
  });
}

// decide when to show navbar and get its height to pass in Provider
function useNavBarState(introContentRef, navBarRef) {
  const [showNavBar, setShowNavbar] = useState(false);
  const [, introContentScrollEndY] = useYPositions(introContentRef);
  const { scrollY } = useViewportScroll();
  useLayoutEffect(() => {
    // must fire before scrollY updates
    setShowNavbar(window.pageYOffset > introContentScrollEndY);
    // this handles continuous updates
    const unsubscribeScroll = scrollY.onChange((y) => {
      setShowNavbar(y > introContentScrollEndY);
    });
    return () => {
      unsubscribeScroll();
    };
  }, [introContentScrollEndY, scrollY]);
  // get size of navbar
  const navBarHeight = useOffsetHeight(navBarRef);
  return {
    showNavBar,
    navBarHeight,
  };
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
  const softwareLabContentStartY = softwareLabSectionStartY + animationAreaHeight;
  const consultingSectionRef = useRef();
  const [consultingSectionStartY] = useYPositions(consultingSectionRef);
  const consultingContentStartY = consultingSectionStartY + animationAreaHeight;
  const venturesSectionRef = useRef();
  const [venturesSectionStartY] = useYPositions(venturesSectionRef);
  const venturesContentStartY = venturesSectionStartY + animationAreaHeight;
  const revOrder = useMemo(() => {
    const softwareLabInfo = {
      ref: softwareLabSectionRef,
      sectionStartY: softwareLabSectionStartY,
      contentStartY: softwareLabContentStartY,
      hash: '#softwareLaboratory',
    };
    const consultingInfo = {
      ref: consultingSectionRef,
      sectionStartY: consultingSectionStartY,
      contentStartY: consultingContentStartY,
      hash: '#consulting',
    };
    const venturesInfo = {
      ref: venturesSectionRef,
      sectionStartY: venturesSectionStartY,
      contentStartY: venturesContentStartY,
      hash: '#ventures',
    };
    return [venturesInfo, consultingInfo, softwareLabInfo];
  }, [
    consultingContentStartY,
    consultingSectionStartY,
    softwareLabContentStartY,
    softwareLabSectionStartY,
    venturesContentStartY,
    venturesSectionStartY,
  ]);
  const orderLen = revOrder.length;

  // jump to location set in hash
  const { scrollY } = useViewportScroll();
  useLayoutEffect(() => {
    function scrollToHash() {
      for (let i = 0; i < orderLen; i += 1) {
        const { contentStartY, hash: sectionHash } = revOrder[i];
        if (hash.current === sectionHash) {
          window.scrollTo(0, contentStartY);
          return;
        }
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
        const { sectionStartY, hash: sectionHash } = revOrder[i];
        if (sectionStartY > 0 && curY >= sectionStartY) {
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
    <PageContext.Provider
      value={{
        page: 'index',
        navBarHeight,
        sectionContentStarts: {
          softwareLaboratory: softwareLabContentStartY,
          consulting: consultingContentStartY,
          ventures: venturesContentStartY,
        },
      }}
    >
      <Layout
        navBar={
          <NavBar
            ref={navBarRef}
            showNavBar={showNavBar}
            rightContent={
              <div className="flex justify-end items-center">
                <NavBarContactButton />
              </div>
            }
          />
        }
      >
        <SEO title="index.seo.title" />
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
      </Layout>
    </PageContext.Provider>
  );
}

export default IndexPage;
