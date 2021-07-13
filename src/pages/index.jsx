import React from 'react';
import MainPageDarkLayout from '../components/layouts/MainPageDarkLayout';
import IntroductionSection from '../components/index/page-sections/IntroductionSection';
import IntroductionSectionContent from '../components/index/page-sections/IntroductionSectionContent';
import NavBarMain from '../components/nav-bar/NavBarMain';
import SEO from '../components/seo/Seo';
import NavBarContactButton from '../components/nav-bar/NavBarContactButton';
import CallToActionSection from '../components/index/page-sections/CallToActionSection';
import ServiceSection from '../components/index/page-sections/ServiceSection';
import StartupSection from '../components/index/page-sections/StartupSection';

function IndexPage() {
  return (
    <MainPageDarkLayout>
      <NavBarMain
        showNavBar
        classNameProp="fixed w-full navbar-background-blur animate top-0 mb-4 z-50"
        desktopRightContent={
          <div className="flex justify-end items-center">
            <NavBarContactButton />
          </div>
        }
      />
      <SEO title="index.seo.title" />
      <div>
        <IntroductionSection>
          <IntroductionSectionContent />
        </IntroductionSection>
        <ServiceSection />
        <CallToActionSection />
        <StartupSection />
      </div>
    </MainPageDarkLayout>
  );
}

export default IndexPage;
