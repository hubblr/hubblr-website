import React from 'react';
import PropTypes from 'prop-types';
import MainContentGrid from '../index-page-main-content/main-content-card/MainContentGrid';
import MainContentGridItem from '../index-page-main-content/main-content-card/MainContentGridItem';
import MainContentCard from '../index-page-main-content/main-content-card/MainContentCard';

function VenturesSectionContent({ children }) {
  return (
    <MainContentCard
      description="Wir glauben an Visionär*innen. Gemeinsam verändern wir die Welt."
      title="Digital Ventures"
      className="mb-5"
    >
      <MainContentGrid>
        <MainContentGridItem
          text="Gründe mit uns deine B2B SaaS-Solution aus. Wir helfen dir bei allen nötigen Schritten und bringen ein Work- oder Geldinvestment mit."
          title="Investment & Gründung"
        />
        <MainContentGridItem
          text="Wir entwickeln ein kosteneffizientes MVP und lernen gemeinsam frühzeitig von deinen Kunden."
          title="User-Testing & Projektplanung"
        />
        <MainContentGridItem
          text="Auch wenn dein Projekt komplex ist, legen wir jederzeit großen Wert auf unsere Zukunft und stellen sicher, dass das Projekt dem Ansturm gerecht wird."
          title="Skalierbarkeit und Zukunftssicherheit"
        />
        <MainContentGridItem
          text="Unser Team ist flexibel und bestehet zum großen Teil selber aus Unternehmer*innen. Mit diesem Spirit treibst auch du dein Projekt voran."
          title="Starke Partner für die Zukunft"
        />
      </MainContentGrid>
      {children}
    </MainContentCard>
  );
}

VenturesSectionContent.propTypes = {
  children: PropTypes.node,
};

VenturesSectionContent.defaultProps = {
  children: null,
};

export default VenturesSectionContent;
