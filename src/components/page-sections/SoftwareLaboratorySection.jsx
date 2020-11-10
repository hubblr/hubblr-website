import React from 'react';
import HubblrMainContentSection from '../page-section-bases/sections/HubblrMainContentSection';
import LightningImageBackground from '../image-components/LightningImageBackground';
import MainContentCard from '../index-page-main-content/main-content-card/MainContentCard';
import MainContentGrid from '../index-page-main-content/main-content-card/MainContentGrid';
import MainContentGridItem from '../index-page-main-content/main-content-card/MainContentGridItem';
import IndexGradientBorderButtonLongArrow from '../gradient-border-buttons/IndexGradientBorderButtonLongArrow';
import { MobileAndTabletQuery, DesktopQuery } from '../../util/helpers';

const SoftwareLaboratorySection = React.forwardRef((props, ref) => {
  return (
    <HubblrMainContentSection
      ref={ref}
      fadeInImage={<LightningImageBackground />}
      contentTitle="Software Laboratory"
      targetCustomers={['Mittelständische Unternehmen', 'Großunternehmen', 'Post-Seed Startups']}
    >
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
    </HubblrMainContentSection>
  );
});

export default SoftwareLaboratorySection;
