import React from 'react';
import HubblrMainContentSection from '../pageSectionBases/Sections/HubblrMainContentSection';
import ConsultingIllustrationImageBackground from '../imageComponents/ConsultingIllustrationImageBackground';
import MainContentCard from '../indexPageMainContent/MainContentCard/MainContentCard';
import MainContentGrid from '../indexPageMainContent/MainContentCard/MainContentGrid';
import MainContentGridItem from '../indexPageMainContent/MainContentCard/MainContentGridItem';
import IndexGradientBorderButtonLongArrow from '../gradientBorderButtons/IndexGradientBorderButtonLongArrow';
import { MobileAndTabletQuery, DesktopQuery } from '../../util/helpers';

const ConsultingSection = React.forwardRef((props, ref) => {
  return (
    <HubblrMainContentSection
      ref={ref}
      fadeInImage={<ConsultingIllustrationImageBackground />}
      contentTitle="Solution Assessment"
      targetCustomers={['Business Angels', 'Mittelständische Unternehmen', 'Startups']}
    >
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
    </HubblrMainContentSection>
  );
});

export default ConsultingSection;
