import React from 'react';
import PropTypes from 'prop-types';
import HubblrMainContentSection from '../page-section-bases/sections/HubblrMainContentSection';
import VenturesArrowImageBackground from '../image-components/VenturesArrowImageBackground';
import MainContentCard from '../index-page-main-content/main-content-card/MainContentCard';
import MainContentGrid from '../index-page-main-content/main-content-card/MainContentGrid';
import MainContentGridItem from '../index-page-main-content/main-content-card/MainContentGridItem';
import IndexGradientBorderButtonLongArrow from '../gradient-border-buttons/IndexGradientBorderButtonLongArrow';
import { MobileAndTabletQuery, DesktopQuery } from '../../util/helpers';

const VenturesSection = React.forwardRef(({ animationAreaHeight }, ref) => {
  return (
    <HubblrMainContentSection
      ref={ref}
      sectionType="last"
      fadeInImage={<VenturesArrowImageBackground />}
      contentTitle="Digital Ventures"
      targetCustomers={['Pre-Seed Startups']}
      animationAreaHeight={animationAreaHeight}
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

VenturesSection.propTypes = {
  animationAreaHeight: PropTypes.number.isRequired, // in px
};

export default VenturesSection;
