import React, { useRef } from 'react';
import Layout from '../components/pageLayouts/Layout';
import HubblrPageLinks from '../components/links/HubblrPageLinks';
import LightningImage from '../images/lightning/lightning.png';
import SectionHeading from '../components/indexPageMainContent/SectionHeading/SectionHeading';
import { DesktopQuery, MobileAndTabletQuery } from '../util/helpers';
import MainContentCard from '../components/indexPageMainContent/MainContentCard/MainContentCard';
import MainContentGrid from '../components/indexPageMainContent/MainContentCard/MainContentGrid';
import MainContentGridItem from '../components/indexPageMainContent/MainContentCard/MainContentGridItem';
import IndexGradientBorderButtonLongArrow from '../components/gradientBorderButtons/IndexGradientBorderButtonLongArrow';
import NavBarTop from '../components/navBar/NavBarTop';
import useClientWidth from '../components/hooks/dimensions/useClientWidth';

function SoftwareLaboratoryPage() {
  const contentRef = useRef();
  const contentWidth = useClientWidth(contentRef);

  return (
    <Layout>
      <div
        ref={contentRef}
        className="relative min-h-screen container mx-auto flex flex-col justify-center items-center"
      >
        <NavBarTop
          className="w-full navbar-background-blur animate top-0"
          contentWidth={contentWidth}
        />

        <SectionHeading heading="Software Laboratory" />
        <img className="w-20 h-auto" src={LightningImage} alt="lightning" />

        <MobileAndTabletQuery>
          <MainContentCard
            description="Gemeinsam konzipieren, entwickeln und testen wir Ihr digitales Projekt."
            title="Software Laboratory"
            className="mb-5"
          >
            <MainContentGrid>
              <MainContentGridItem
                text="Projektplanung und Beratung zur Umsetzung, Technologieberatung sowie User-Interface Design der Anwendung."
                title="Konzept & Design"
              />
              <MainContentGridItem
                text="Nutzer-zentriertes Testing und itterative Gestaltung des Projektes während der Design und Entwicklungs-Phase."
                title="Prototyping & User-Testing"
              />
              <MainContentGridItem
                text="Mit Ihrem Entwicklungsteam oder vollständig autark entwickelt unser interdisziplinäres Team das Projekt."
                title="Softwareentwicklung"
              />
              <MainContentGridItem
                text="Verlassen Sie sich auf einen sicheren und zuverlässigen Betrieb Ihres Projektes."
                title="Hosting & Support"
              />
            </MainContentGrid>
            <IndexGradientBorderButtonLongArrow
              theme="light"
              widthClass="w-full"
              addedFlexClasses="justify-center"
            >
              Zum Laboratory
            </IndexGradientBorderButtonLongArrow>
          </MainContentCard>
        </MobileAndTabletQuery>
        <DesktopQuery>
          <MainContentCard
            description="Gemeinsam konzipieren, entwickeln und testen wir Ihr digitales Projekt."
            title="Software Laboratory"
            className="mb-5"
          >
            <MainContentGrid>
              <MainContentGridItem
                text="Projektplanung und Beratung zur Umsetzung, Technologieberatung sowie User-Interface Design der Anwendung."
                title="Konzept & Design"
              />
              <MainContentGridItem
                text="Nutzer-zentriertes Testing und itterative Gestaltung des Projektes während der Design und Entwicklungs-Phase."
                title="Prototyping & User-Testing"
              />
              <MainContentGridItem
                text="Mit Ihrem Entwicklungsteam oder vollständig autark entwickelt unser interdisziplinäres Team das Projekt."
                title="Softwareentwicklung"
              />
              <MainContentGridItem
                text="Verlassen Sie sich auf einen sicheren und zuverlässigen Betrieb Ihres Projektes."
                title="Hosting & Support"
              />
            </MainContentGrid>
          </MainContentCard>
          <IndexGradientBorderButtonLongArrow theme="light">
            Zum Laboratory
          </IndexGradientBorderButtonLongArrow>
        </DesktopQuery>

        <div className="mt-4">
          <HubblrPageLinks />
        </div>
      </div>
    </Layout>
  );
}

export default SoftwareLaboratoryPage;
