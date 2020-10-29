import React from 'react';
import HubblrMainContentSection from '../pageSectionBases/HubblrMainContentSection';
import LightningImage from '../imageComponents/LightningImage';

const SoftwareLaboratorySection = React.forwardRef((props, ref) => {
  return (
    <HubblrMainContentSection
      ref={ref}
      fadeInImage={<LightningImage />}
      contentTitle="Software Laboratory"
      targetCustomers={['Mittelständische Unternehmen', 'Großunternehmen', 'Post-Seed Startups']}
      mainContentDescription={{
        title: 'Software Laboratory',
        description: 'Gemeinsam konzipieren, entwickeln und testen wir Ihr digitales Projekt',
        tabledConcepts: [
          {
            title: 'Konzept & Design',
            content:
              'Projektplanung und Beratung zur Umsetzung, ' +
              'Technologieberatung sowie User-Interface Design der Anwendung.',
          },
          {
            title: 'Prototyping & User-Testing',
            content:
              'Nutzer-zentriertes Testing und itterative Gestaltung des' +
              ' Projektes während der Design und Entwicklungs-Phase.',
          },
          {
            title: 'Softwareentwicklung',
            content:
              'Mit Ihrem Entwicklungsteam oder vollständig autark ' +
              'entwickelt unser interdisziplinäres Team das Projekt.',
          },
          {
            title: 'Hosting & Support',
            content:
              'Verlassen Sie sich auf einen sicheren und zuverlässigen' +
              ' Betrieb Ihres Projektes.',
          },
        ],
      }}
      navigation="Zum Laboratory"
    />
  );
});

export default SoftwareLaboratorySection;
