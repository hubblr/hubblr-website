import React from 'react';
import { Link } from '@reach/router';
import { FormattedMessage } from 'react-intl';
import VenturesArrowImage from '../images/ventures/venturesArrow.png';
import SectionHeading from '../components/index/section-heading/SectionHeading';
import { DesktopQuery, MobileAndTabletQuery } from '../util/helpers';
import IndexGradientBorderButtonBasic from '../components/buttons/gradient-border-buttons/IndexGradientBorderButtonBasic';
import MainPageDarkLayout from '../components/layouts/MainPageDarkLayout';
import NavBarMainPage from '../components/nav-bar/NavBarMainPage';
import NavBarContactButton from '../components/nav-bar/NavBarContactButton';
import VenturesSectionContent from '../components/index/page-sections/VenturesSectionContent';

function VenturesPage() {
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
              <IndexGradientBorderButtonBasic
                theme="light"
                borderButtonClassName="w-full"
                innerOverlayDivClassName="justify-center"
              >
                <FormattedMessage id="generic.contact" />
              </IndexGradientBorderButtonBasic>
            </Link>
          </VenturesSectionContent>
        </MobileAndTabletQuery>
        <DesktopQuery>
          <VenturesSectionContent />
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

export default VenturesPage;
