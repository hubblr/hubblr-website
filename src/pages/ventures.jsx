import React from 'react';
import { Link } from '@reach/router';
import { FormattedMessage } from 'react-intl';
import SectionHeading from '../components/index/section-heading/SectionHeading';
import { DesktopQuery, MobileAndTabletQuery } from '../util/helpers';
import GradientButton from '../components/buttons/gradient-border-buttons/GradientButton';
import MainPageDarkLayout from '../components/layouts/MainPageDarkLayout';
import NavBar from '../components/nav-bar/NavBar';
import NavBarContactButton from '../components/nav-bar/NavBarContactButton';
import VenturesSectionContent from '../components/index/page-sections/VenturesSectionContent';
import AnimatedSectionContainer from '../components/animation/AnimatedSectionContainer';
import AnimatedVentureImage from '../components/index/animated/venture-image/AnimatedVenturesImage';

function VenturesPage() {
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
        <AnimatedVentureImage className="w-40 h-auto" />
      </div>
      <div className="flex-grow overflow-hidden relative z-10 container mx-auto flex flex-col justify-center items-center max-w-6xl">
        <AnimatedSectionContainer>
          <SectionHeading className="mb-6" heading="Ventures" />
          <div className="flex flex-col items-center">
            <MobileAndTabletQuery>
              <VenturesSectionContent>
                <Link to="/contact">
                  <GradientButton
                    className="button-light w-full"
                    innerOverlayDivClassName="justify-center"
                  >
                    <FormattedMessage id="generic.contact" />
                  </GradientButton>
                </Link>
              </VenturesSectionContent>
            </MobileAndTabletQuery>
            <DesktopQuery>
              <VenturesSectionContent />
              <div className="w-full flex flex-row justify-center">
                <Link to="/contact">
                  <GradientButton className="button-light">
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

export default VenturesPage;
