import { Link } from '@reach/router';
import { FormattedMessage } from 'react-intl';
import React from 'react';
import { DesktopQuery, MobileAndTabletQuery } from '../util/helpers';
import SectionHeading from '../components/index/section-heading/SectionHeading';
import IndexGradientBorderButtonBasic from '../components/buttons/gradient-border-buttons/IndexGradientBorderButtonBasic';
import MainPageDarkLayout from '../components/layouts/MainPageDarkLayout';
import NavBarMainPage from '../components/nav-bar/NavBarMainPage';
import NavBarContactButton from '../components/nav-bar/NavBarContactButton';
import ConsultingSectionContent from '../components/index/page-sections/ConsultingSectionContent';
import AnimatedSatelliteImage from '../components/index/animated-elements/satellite-image/AnimatedSatelliteImage';
import AnimatedSectionContainer from '../components/animation/AnimatedSectionContainer';

function ConsultingPage() {
  return (
    <MainPageDarkLayout>
      <NavBarMainPage
        showNavBar
        className="sticky w-full navbar-background-blur animate top-0 mb-4"
        desktopRightContent={
          <div className="flex justify-end items-center">
            <NavBarContactButton />
          </div>
        }
      />
      <div className="absolute z-0 h-screen w-screen flex justify-center items-center">
        <AnimatedSatelliteImage className="w-40 h-auto" />
      </div>
      <div className="flex-grow relative z-10 container mx-auto flex flex-col justify-center items-center max-w-6xl">
        <AnimatedSectionContainer>
          <SectionHeading className="mb-6" heading="Consulting" />
          <div className="flex flex-col items-center">
            <MobileAndTabletQuery>
              <ConsultingSectionContent>
                <Link to="/contact">
                  <IndexGradientBorderButtonBasic
                    theme="light"
                    borderButtonClassName="w-full"
                    innerOverlayDivClassName="justify-center"
                  >
                    <FormattedMessage id="generic.contact" />
                  </IndexGradientBorderButtonBasic>
                </Link>
              </ConsultingSectionContent>
            </MobileAndTabletQuery>
            <DesktopQuery>
              <ConsultingSectionContent />
              <Link to="/contact">
                <IndexGradientBorderButtonBasic theme="light">
                  <FormattedMessage id="generic.contact" />
                </IndexGradientBorderButtonBasic>
              </Link>
            </DesktopQuery>
          </div>
        </AnimatedSectionContainer>
      </div>
    </MainPageDarkLayout>
  );
}

export default ConsultingPage;
