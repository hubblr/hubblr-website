import React, { useRef } from 'react';
import VenturesArrowImage from '../images/ventures/venturesArrow.png';
import SectionHeading from '../components/indexPageMainContent/SectionHeading/SectionHeading';
import Layout from '../components/pageLayouts/Layout';
import NavBarTop from '../components/navBar/NavBarTop';
import useClientWidth from '../components/hooks/dimensions/useClientWidth';
import { DesktopQuery, MobileAndTabletQuery } from '../util/helpers';
import MainContentCard from '../components/indexPageMainContent/MainContentCard/MainContentCard';
import MainContentGrid from '../components/indexPageMainContent/MainContentCard/MainContentGrid';
import MainContentGridItem from '../components/indexPageMainContent/MainContentCard/MainContentGridItem';
import IndexGradientBorderButtonLongArrow from '../components/gradientBorderButtons/IndexGradientBorderButtonLongArrow';
import HubblrPageLinks from '../components/links/HubblrPageLinks';

function VenturesPage() {
  const contentRef = useRef();
  const contentWidth = useClientWidth(contentRef);
  // const contentWidth = useClientWidth(contentRef);

  return (
    <Layout>
      <div
        ref={contentRef}
        className="relative min-h-screen container mx-auto flex flex-col justify-center items-center"
      >
        <NavBarTop className="" contentWidth={contentWidth} />
        <SectionHeading heading="Ventures" />
        <img className="w-40 h-auto" src={VenturesArrowImage} alt="ventures" />
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

        <div className="mt-4">
          <HubblrPageLinks />
        </div>
      </div>
    </Layout>
  );
}

export default VenturesPage;
