import React from 'react';
import { Link } from '@reach/router';
import { FormattedMessage } from 'react-intl';
import VenturesArrowImage from '../images/ventures/venturesArrow.png';
import SectionHeading from '../components/index/section-heading/SectionHeading';
import { DesktopQuery, MobileAndTabletQuery } from '../util/helpers';
// import MainContentCard from '../components/index/main-content-card/MainContentCard';
// import MainContentGrid from '../components/index/main-content-card/MainContentGrid';
// import MainContentGridItem from '../components/index/main-content-card/MainContentGridItem';
import IndexGradientBorderButtonLongArrow from '../components/buttons/gradient-border-buttons/IndexGradientBorderButtonLongArrow';
import MainPageDarkLayout from '../components/layouts/MainPageDarkLayout';
import NavBarMainPage from '../components/nav-bar/NavBarMainPage';
import NavBarContactButton from '../components/nav-bar/NavBarContactButton';
import VenturesSectionContent from '../components/index/page-sections/VenturesSectionContent';

function VenturesPage() {
  // TODO: move duplicated main content text to its own component

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
        <SectionHeading heading="Ventures" />
        <img className="w-40 h-auto" src={VenturesArrowImage} alt="ventures" />
        <MobileAndTabletQuery>
          <VenturesSectionContent>
            <Link to="/contact">
              <IndexGradientBorderButtonLongArrow
                theme="light"
                widthClass="w-full"
                addedFlexClasses="justify-center"
              >
                <FormattedMessage id="generic.contact" />
              </IndexGradientBorderButtonLongArrow>
            </Link>
          </VenturesSectionContent>
        </MobileAndTabletQuery>
        <DesktopQuery>
          <VenturesSectionContent />
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

export default VenturesPage;
