import React from 'react';
import PropTypes from 'prop-types';
import MainContentGrid from '../index-page-main-content/main-content-card/MainContentGrid';
import MainContentGridItem from '../index-page-main-content/main-content-card/MainContentGridItem';
import MainContentCard from '../index-page-main-content/main-content-card/MainContentCard';

function ConsultingSectionContent({ children }) {
  return (
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
      {children}
    </MainContentCard>
  );
}

ConsultingSectionContent.propTypes = {
  children: PropTypes.node,
};

ConsultingSectionContent.defaultProps = {
  children: null,
};

export default ConsultingSectionContent;
