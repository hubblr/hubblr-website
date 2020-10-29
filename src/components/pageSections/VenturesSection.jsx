import React from 'react';
import HubblrMainContentSection from '../pageSectionBases/HubblrMainContentSection';
import VenturesArrowImage from '../imageComponents/VenturesArrowImage';

const VenturesSection = React.forwardRef((props, ref) => {
  return (
    <HubblrMainContentSection
      ref={ref}
      sectionType="last"
      fadeInImage={<VenturesArrowImage />}
      contentTitle="Digital Ventures"
      targetCustomers={['Pre-Seed Startups']}
      mainContentDescription={{
        title: 'Solution Assessment',
        description: 'Wie glauben an Visionär*innen. Gemeinsam verändern wir die Welt.',
        tabledConcepts: [
          {
            title: 'Investment & Gründung',
            content:
              'Gründe mit uns deine B2B SaaS-Solution aus. Wir helfen ' +
              'dir bei allen nötigen Schritten und bringen ein Work- oder ' +
              'Geldinvestment mit.',
          },
          {
            title: 'User-Testing & Projektplanung',
            content:
              'Wir entwickeln ein kosteneffizientes MVP und lernen ' +
              'gemeinsam frühzeitig von deinen Kunden.',
          },
          {
            title: 'Skalierbarkeit und Zukunftssicherheit',
            content:
              'Auch wenn dein Projekt komplex ist, legen wir ' +
              'jederzeit großen Wert auf unsere Zukunft und stellen ' +
              'sicher, dass das Projekt dem Ansturm gerecht wird.',
          },
          {
            title: 'Starke Partner für die Zukunft',
            content:
              'Unser Team ist flexibel und bestehet zum großen Teil ' +
              'selber aus Unternehmer*innen. Mit diesem Spirit treibst auch ' +
              'du dein Projekt voran.',
          },
        ],
      }}
      navigation="Jetzt kontaktieren"
    />
  );
});

export default VenturesSection;
