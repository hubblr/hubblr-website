import { Link } from '@reach/router';
import { FormattedMessage } from 'react-intl';
import React from 'react';
import { DesktopQuery, MobileAndTabletQuery } from '../util/helpers';
import SectionHeading from '../components/index/section-heading/SectionHeading';
import IndexGradientBorderButtonBasic from '../components/buttons/gradient-border-buttons/IndexGradientBorderButtonBasic';
import ConsultingImage from '../images/consulting/consulting-illustration.png';
import MainPageDarkLayout from '../components/layouts/MainPageDarkLayout';
import NavBarMainPage from '../components/nav-bar/NavBarMainPage';
import NavBarContactButton from '../components/nav-bar/NavBarContactButton';
import ConsultingSectionContent from '../components/index/page-sections/ConsultingSectionContent';

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
      <div className="container mx-auto flex flex-col justify-center items-center max-w-6xl">
        <SectionHeading heading="Consulting" />
        <img className="w-20 h-auto" src={ConsultingImage} alt="satellite" />

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
    </MainPageDarkLayout>
  );
}

export default ConsultingPage;
