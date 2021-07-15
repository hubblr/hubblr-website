import { Link } from '@reach/router';
import { FormattedMessage } from 'react-intl';
import React from 'react';
import { DesktopQuery, MobileAndTabletQuery } from '../util/helpers';
import SectionHeading from '../components/index/section-heading/SectionHeading';
import GradientButton from '../components/buttons/gradient-border-buttons/GradientButton';
import MainPageDarkLayout from '../components/layouts/MainPageDarkLayout';
import NavBar from '../components/nav-bar/NavBar';
import NavBarContactButton from '../components/nav-bar/NavBarContactButton';
import ConsultingSectionContent from '../components/index/page-sections/ConsultingSectionContent';
import AnimatedSatelliteImage from '../components/index/animated/satellite-image/AnimatedSatelliteImage';
import AnimatedSectionContainer from '../components/animation/AnimatedSectionContainer';

function ConsultingPage() {
  return (
    <MainPageDarkLayout>
      <NavBar
        showAlways
        className="z-20 sticky w-full navbar-background-blur animate top-0 mb-4"
        desktopRightContent={
          <div className="flex justify-end items-center">
            <NavBarContactButton />
          </div>
        }
      />
      <div className="fixed z-0 h-screen w-screen flex justify-center items-center">
        <AnimatedSatelliteImage className="w-40 h-auto" />
      </div>
      <div className="flex-grow overflow-hidden relative z-10 container mx-auto flex flex-col justify-center items-center max-w-6xl">
        <AnimatedSectionContainer>
          <SectionHeading className="mb-6" heading="Consulting" />
          <div className="flex flex-col items-center">
            <MobileAndTabletQuery>
              <ConsultingSectionContent>
                <Link to="/contact">
                  <GradientButton
                    theme="light"
                    borderButtonClassName="w-full"
                    innerOverlayDivClassName="justify-center"
                  >
                    <FormattedMessage id="generic.contact" />
                  </GradientButton>
                </Link>
              </ConsultingSectionContent>
            </MobileAndTabletQuery>
            <DesktopQuery>
              <ConsultingSectionContent />
              <div className="w-full flex flex-row justify-center">
                <Link to="/contact">
                  <GradientButton theme="light">
                    <FormattedMessage id="generic.contact" />
                  </GradientButton>
                </Link>
              </div>
            </DesktopQuery>
          </div>
        </AnimatedSectionContainer>
      </div>
    </MainPageDarkLayout>
  );
}

export default ConsultingPage;
