import React from 'react';
import HubblrMainContentSection from '../pageSectionBases/HubblrMainContentSection';
import ConsultingIllustrationImageBackground from '../imageComponents/ConsultingIllustrationImageBackground';

const ConsultingSection = React.forwardRef((props, ref) => {
  return (
    <HubblrMainContentSection
      ref={ref}
      fadeInImage={<ConsultingIllustrationImageBackground />}
      contentTitle="Solution Assessment"
      targetCustomers={['Business Angels', 'Mittelständische Unternehmen', 'Startups']}
      mainContentDescription={{
        title: 'Solution Assessment',
        description: 'Wir beurteilen die technische Entwicklung bestehender Produkte',
        tabledConcepts: [
          {
            title: 'Aufarbeitung Tech-Stack & Produkt',
            content:
              'Welche Technologie-entscheidungen wurden getroffen & ' +
              'passen diese zum Status des Projektes? Welche Softwarequalität ' +
              'hat das aktuelle Projekt?',
          },
          {
            title: 'Beurteilung Entwicklungsprozesse',
            content:
              'Welche Hürden liegen im Entwicklungsprozess und ' +
              'welche Abhängigkeiten liegen an den Funktionären des Teams?',
          },
          {
            title: 'Zukunftssicherheit feststellen',
            content:
              'Wurde das Projekt angemessen entwickelt bzw. ist ' +
              'eine Konzipierung für eine angemessen skalierbare Anwendung ' +
              'erfolgt?',
          },
          {
            title: 'Umsetzungs-Beratung',
            content:
              'Beratung zur Umsetzung neuer Entwicklungsprozesse ' +
              'oder Einführung modernerer Technologien.',
          },
        ],
      }}
      navigation="Jetzt kontaktieren"
    />
  );
});

export default ConsultingSection;
