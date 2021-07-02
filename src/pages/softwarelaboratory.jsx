import React from 'react';
import { Link } from '@reach/router';
import { FormattedMessage } from 'react-intl';
import SectionHeading from '../components/index/section-heading/SectionHeading';
import { DesktopQuery, MobileAndTabletQuery } from '../util/helpers';
import IndexGradientBorderButtonBasic from '../components/buttons/gradient-border-buttons/IndexGradientBorderButtonBasic';
import MainPageDarkLayout from '../components/layouts/MainPageDarkLayout';
import NavBarMainPage from '../components/nav-bar/NavBarMainPage';
import NavBarContactButton from '../components/nav-bar/NavBarContactButton';
import SoftwareLaboratorySectionContent from '../components/index/page-sections/SoftwareLaboratorySectionContent';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import AnimatedLightningImage from '../components/index/animated/lightning-image/AnimatedLightningImage';
import AnimatedSectionContainer from '../components/animation/AnimatedSectionContainer';

function SoftwareLaboratoryPage() {
  return (
    <LayoutWrapper>
      <MainPageDarkLayout>
        <NavBarMainPage
          showNavBar
          showAlways
          className="z-20 sticky w-full navbar-background-blur animate top-0 mb-4"
          desktopRightContent={
            <div className="flex justify-end items-center">
              <NavBarContactButton />
            </div>
          }
        />
        <div className="absolute z-0 h-screen w-screen flex justify-center items-center">
          <AnimatedLightningImage className="absolute z-0 h-48 w-auto" />
        </div>
        <div className="flex-grow overflow-hidden relative z-10 container mx-auto flex flex-col justify-center items-center max-w-6xl">
          <AnimatedSectionContainer>
            <SectionHeading className="mb-6" heading="Software Laboratory" />
            <div className="flex flex-col items-center">
              <MobileAndTabletQuery>
                <SoftwareLaboratorySectionContent>
                  <Link to="/contact">
                    <IndexGradientBorderButtonBasic
                      theme="light"
                      borderButtonClassName="w-full"
                      innerOverlayDivClassName="justify-center"
                    >
                      <FormattedMessage id="generic.contact" />
                    </IndexGradientBorderButtonBasic>
                  </Link>
                </SoftwareLaboratorySectionContent>
              </MobileAndTabletQuery>
              <DesktopQuery>
                <SoftwareLaboratorySectionContent />
                <div className="w-full flex flex-row justify-center">
                  <Link to="/contact">
                    <IndexGradientBorderButtonBasic theme="light">
                      <FormattedMessage id="generic.contact" />
                    </IndexGradientBorderButtonBasic>
                  </Link>
                </div>
              </DesktopQuery>
            </div>
          </AnimatedSectionContainer>
        </div>
      </MainPageDarkLayout>
    </LayoutWrapper>
  );
}

export default SoftwareLaboratoryPage;
