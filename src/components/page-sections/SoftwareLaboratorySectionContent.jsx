import React from 'react';
import PropTypes from 'prop-types';
import MainContentGrid from '../index-page-main-content/main-content-card/MainContentGrid';
import MainContentGridItem from '../index-page-main-content/main-content-card/MainContentGridItem';
import MainContentCard from '../index-page-main-content/main-content-card/MainContentCard';

function SoftwareLaboratorySectionContent({ children }) {
  return (
    <MainContentCard
      description="Gemeinsam konzipieren, entwickeln und testen wir Ihr digitales Projekt."
      title="Software Laboratory"
      className="mb-5"
    >
      <MainContentGrid>
        <MainContentGridItem
          text="Projektplanung und Beratung zur Umsetzung, Technologieberatung sowie User-Interface-Design der Anwendung."
          title="Konzept & Design"
        />
        <MainContentGridItem
          text="Nutzerzentriertes Testing und iterative Gestaltung des Projektes während der Design- und Entwicklungsphase."
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
      {children}
    </MainContentCard>
  );
}

SoftwareLaboratorySectionContent.propTypes = {
  children: PropTypes.node,
};

SoftwareLaboratorySectionContent.defaultProps = {
  children: null,
};

export default SoftwareLaboratorySectionContent;
