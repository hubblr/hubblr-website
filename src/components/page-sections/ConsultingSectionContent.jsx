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
          text="Welche Tech&shy;nologie-Ent&shy;scheidungen wurden getroffen & passen diese zum Status des Projektes? Welche Software&shy;qualität hat das aktuelle Projekt?"
          title="Auf&shy;arbeitung Tech-Stack & Produkt"
        />
        <MainContentGridItem
          text="Welche Hürden liegen im Entwicklungs&shy;prozess und welche Abhängig&shy;keiten liegen bei den Funktio&shy;när*innen des Teams?"
          title="Beur&shy;teilung Ent&shy;wicklungs&shy;prozesse"
        />
        <MainContentGridItem
          text="Wurde das Projekt angemessen entwickelt bzw. ist eine Konzi&shy;pierung für eine angemessen skalier&shy;bare Anwendung erfolgt?"
          title="Zukunfts&shy;sicherheit fest&shy;stellen"
        />
        <MainContentGridItem
          text="Beratung zur Umsetzung neuer Ent&shy;wicklungs&shy;prozesse oder Ein&shy;führung moderner Tech&shy;nolo&shy;gien."
          title="Umsetzungs&shy;beratung"
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
