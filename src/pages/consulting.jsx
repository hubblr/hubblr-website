import { Link } from '@reach/router';
import { FormattedMessage } from 'react-intl';
import React from 'react';
import { DesktopQuery, MobileAndTabletQuery } from '../util/helpers';
import SectionHeading from '../components/index/section-heading/SectionHeading';
// import MainContentCard from '../components/index/main-content-card/MainContentCard';
// import MainContentGrid from '../components/index/main-content-card/MainContentGrid';
// import MainContentGridItem from '../components/index/main-content-card/MainContentGridItem';
import IndexGradientBorderButtonLongArrow from '../components/buttons/gradient-border-buttons/IndexGradientBorderButtonLongArrow';
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
              <IndexGradientBorderButtonLongArrow
                theme="light"
                widthClass="w-full"
                addedFlexClasses="justify-center"
              >
                <FormattedMessage id="generic.contact" />
              </IndexGradientBorderButtonLongArrow>
            </Link>
          </ConsultingSectionContent>
        </MobileAndTabletQuery>
        <DesktopQuery>
          <ConsultingSectionContent />
          <Link to="/contact">
            <IndexGradientBorderButtonLongArrow theme="light">
              <FormattedMessage id="generic.contact" />
            </IndexGradientBorderButtonLongArrow>
          </Link>
        </DesktopQuery>
      </div>
    </MainPageDarkLayout>
  );
}

export default ConsultingPage;
