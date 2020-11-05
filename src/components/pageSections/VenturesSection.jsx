import React from 'react';
import HubblrMainContentSection from '../pageSectionBases/Sections/HubblrMainContentSection';
import VenturesArrowImageBackground from '../imageComponents/VenturesArrowImageBackground';
import MainContentCard from '../indexPageMainContent/MainContentCard/MainContentCard';
import MainContentGrid from '../indexPageMainContent/MainContentCard/MainContentGrid';
import MainContentGridItem from '../indexPageMainContent/MainContentCard/MainContentGridItem';
import IndexGradientBorderButtonLongArrow from '../gradientBorderButtons/IndexGradientBorderButtonLongArrow';
import { MobileAndTabletQuery, DesktopQuery } from '../../util/helpers';

const VenturesSection = React.forwardRef((props, ref) => {
  return (
    <HubblrMainContentSection
      ref={ref}
      sectionType="last"
      fadeInImage={<VenturesArrowImageBackground />}
      contentTitle="Digital Ventures"
      targetCustomers={['Pre-Seed Startups']}
    >
      <MobileAndTabletQuery>
        <MainContentCard
          description="Wir glauben an Visionär*innen. Gemeinsam verändern wir die Welt."
          title="Solution Assessment"
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
          <IndexGradientBorderButtonLongArrow theme="light">
            Jetzt kontaktieren
          </IndexGradientBorderButtonLongArrow>
        </MainContentCard>
      </MobileAndTabletQuery>
      <DesktopQuery>
        <MainContentCard
          description="Wir glauben an Visionär*innen. Gemeinsam verändern wir die Welt."
          title="Solution Assessment"
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
        </MainContentCard>
        <IndexGradientBorderButtonLongArrow theme="light">
          Jetzt kontaktieren
        </IndexGradientBorderButtonLongArrow>
      </DesktopQuery>
    </HubblrMainContentSection>
  );
});

export default VenturesSection;
