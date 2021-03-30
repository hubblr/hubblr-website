import React from 'react';
import { DesktopQuery, MobileAndTabletQuery } from '../util/helpers';
import SectionHeading from '../components/index/section-heading/SectionHeading';
import MainContentCard from '../components/index/main-content-card/MainContentCard';
import MainContentGrid from '../components/index/main-content-card/MainContentGrid';
import MainContentGridItem from '../components/index/main-content-card/MainContentGridItem';
import HubblrPageLinks from '../components/links/HubblrPageLinks';
import IndexGradientBorderButtonLongArrow from '../components/buttons/gradient-border-buttons/IndexGradientBorderButtonLongArrow';
import ConsultingImage from '../images/consulting/consulting-illustration.png';
import MainPageDarkLayout from '../components/layouts/MainPageDarkLayout';
import NavBarMainPage from '../components/nav-bar/NavBarMainPage';
import NavBarContactButton from '../components/nav-bar/NavBarContactButton';

function ConsultingPage() {
  // const contentRef = useRef();
  // const contentWidth = useClientWidth(contentRef);

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
          <MainContentCard
            description="Wir beurteilen die technische Entwicklung bestehender Produkte"
            title="Solution Assessment"
            className="mb-5"
          >
            <MainContentGrid className="mb-20">
              <MainContentGridItem
                text="Welche Technologie-entscheidungen wurden getroffen & passen diese zum Status des Projektes? Welche Softwarequalität hat das aktuelle Projekt?"
                title="Aufarbeitung Tech-Stack & Produkt"
              />
              <MainContentGridItem
                text="Welche Hürden liegen im Entwicklungsprozess und welche Abhängigkeiten liegen an den Funktionären des Teams?"
                title="Beurteilung Entwicklungsprozesse"
              />
              <MainContentGridItem
                text="Wurde das Projekt angemessen entwickelt bzw. ist eine Konzipierung für eine angemessen skalierbare Anwendung erfolgt?"
                title="Zukunftssicherheit feststellen"
              />
              <MainContentGridItem
                text="Beratung zur Umsetzung neuer Entwicklungsprozesse oder Einführung modernerer Technologien."
                title="Umsetzungs-Beratung"
              />
            </MainContentGrid>
            <IndexGradientBorderButtonLongArrow
              theme="light"
              widthClass="w-full"
              addedFlexClasses="justify-center"
            >
              Jetzt kontaktieren
            </IndexGradientBorderButtonLongArrow>
          </MainContentCard>
        </MobileAndTabletQuery>
        <DesktopQuery>
          <MainContentCard
            description="Wir beurteilen die technische Entwicklung bestehender Produkte"
            title="Solution Assessment"
            className="mb-5"
          >
            <MainContentGrid>
              <MainContentGridItem
                text="Welche Technologie-entscheidungen wurden getroffen & passen diese zum Status des Projektes? Welche Softwarequalität hat das aktuelle Projekt?"
                title="Aufarbeitung Tech-Stack & Produkt"
              />
              <MainContentGridItem
                text="Welche Hürden liegen im Entwicklungsprozess und welche Abhängigkeiten liegen an den Funktionären des Teams?"
                title="Beurteilung Entwicklungsprozesse"
              />
              <MainContentGridItem
                text="Wurde das Projekt angemessen entwickelt bzw. ist eine Konzipierung für eine angemessen skalierbare Anwendung erfolgt?"
                title="Zukunftssicherheit feststellen"
              />
              <MainContentGridItem
                text="Beratung zur Umsetzung neuer Entwicklungsprozesse oder Einführung modernerer Technologien."
                title="Umsetzungs-Beratung"
              />
            </MainContentGrid>
          </MainContentCard>
          <IndexGradientBorderButtonLongArrow theme="light">
            Jetzt kontaktieren
          </IndexGradientBorderButtonLongArrow>
        </DesktopQuery>

        <div className>
          <HubblrPageLinks />
        </div>
      </div>
    </MainPageDarkLayout>
  );
}

export default ConsultingPage;
