import React from 'react';
import { FormattedMessage } from 'react-intl';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import flashyLogo from '../images/softwareLaboratory/flashy-logo.svg';
import LightningImageSvg from '../components/image-components/LightningImageSvg';
import NavBarSoftwareLaboratory from '../components/nav-bar/NavBarSoftwareLaboratory';
import DangerousIntlSpan from '../components/intl/DangerousIntlSpan';
import AppKnockoutText from '../components/text/AppKnockoutText';
import AppButton from '../components/buttons/bases/AppButton';
import SoftwareLaboratoryAccordionItem from '../components/software-laboratory/SoftwareLaboratoryAccordionItem';
import {
  SiteContentAccordion,
  SideContentItemContainer,
  SideContentContainer,
} from '../accordion/index';
import shortArrowRight from '../images/shortArrow/short-arrow-right.png';
import astronautImg from '../images/softwareLaboratory/astronaut.jpg';
import abstractArtImg from '../images/softwareLaboratory/art-abstract.jpg';
import puzzleArtImg from '../images/softwareLaboratory/art-puzzle.jpg';
import planetArtImg from '../images/softwareLaboratory/art-planets.jpg';

function SoftwareLaboratoryPage() {
  return (
    <LayoutWrapper>
      <div className="flex flex-col min-h-screen w-full">
        <div className="w-full text-white bg-black overflow-hidden">
          <div className="relative container mx-auto flex justify-center">
            <div className="flex-grow" />
            <div className="mt-12 mb-32 w-full md:w-3/4 xl:w-2/3 flex flex-col items-center text-center">
              <img className="w-36 h-auto mb-10" src={flashyLogo} alt="hubblr logo" />
              <h1 className="text-5xl font-extrabold leading-none mb-10 px-12">
                <FormattedMessage id="software-laboratory.banner.heading" />
              </h1>
              <div className="text-2xl font-light leading-tight">
                <FormattedMessage id="software-laboratory.banner.text" />
              </div>
            </div>
            <div className="flex-grow relative">
              <LightningImageSvg
                className="max-md:hidden max-w-none absolute w-auto -ml-4"
                style={{ height: '125%', bottom: '2rem' }}
              />
            </div>
          </div>
        </div>
        <NavBarSoftwareLaboratory className="sticky" />

        <div className="bg-brand-eggshell flex-grow text-black bg-white">
          <div className="container mx-auto">
            <h1 className="uppercase text-3xl text-brand-purple text-center mt-12 mb-5">
              <FormattedMessage id="software-laboratory.services.heading-1" />
            </h1>
            <h2 className="text-5xl font-extrabold leading-none text-center mb-32 max-md:mb-20">
              <DangerousIntlSpan id="software-laboratory.services.heading-2" />
            </h2>

            <SiteContentAccordion className="flex w-full mb-24">
              <SideContentItemContainer className="accordion-item-container mr-12 max-md:mr-0 w-1/2 max-md:w-full">
                <SoftwareLaboratoryAccordionItem
                  header="Innovations- & Geschäftsmodell-Beratung"
                  content={
                    <div className="pb-5">
                      Gemeinsam mit Ihnen identifizieren wir mit Ihnen neue, digitale
                      Geschäftsfelder und Produkt-Innovationen für Ihr Unternehmen und erarbeiten
                      digitale Geschäftsmodelle für einen profitablen Return-Of-Invest.
                    </div>
                  }
                  sideContent={<img className="w-full h-auto" src={astronautImg} alt="astronaut" />}
                />

                <SoftwareLaboratoryAccordionItem
                  header="Strategische Beratung zur Validierung"
                  content={
                    <div className="pb-5">
                      Unser interdisziplinäres Team entwickelt mit Ihnen Thesen, die das
                      Geschäftsmodell und die adaption im Markt validieren, sowie Milestones, an
                      denen entsprechende Erfolge gemessen werden. Die Thesen können dann im
                      Projektverlauf itterativ überprüft werden und das Produkt entsprechen zu einem
                      erfolgreichen Markteintritt ausgerichtet werden.
                    </div>
                  }
                  sideContent={
                    <img className="w-full h-auto" src={abstractArtImg} alt="abstract art" />
                  }
                />

                <SoftwareLaboratoryAccordionItem
                  header="Anwendungskonzeption"
                  content={
                    <div className="pb-5">
                      Wir entwickeln in einer Sprint-Phase anhand mit hilfe von Wire-Frames eine
                      erste Konzeption der Anwendungen, sodass Umfang & Funktionalität ersichtlich
                      werden. Danach entscheiden wir uns wieder anhand des Thesen-Boards, welche
                      Teile zunächst große Aufmerksamkeit benötigen, damit das Geschäftsmodell
                      validiert wird.
                    </div>
                  }
                  sideContent={
                    <img className="w-full h-auto" src={puzzleArtImg} alt="abstract art" />
                  }
                />

                <SoftwareLaboratoryAccordionItem
                  header="Software-Design & Technologieberatung"
                  content={
                    <div>
                      Nachdem Umfang und Produktvision klar sind, beraten wir Sie zur
                      technologischen Realisierbarkeit sowie eine Empfehlung auf welchen
                      Technologien das Produkt gebaut werden sollte. Sie erhalten dabei einen
                      Überblick über Vor- und Nachteile zu entsprechenden Entscheidungen,
                      Geschwindigkeitsprognosen sowie skalierungsfähigkeit der Software und des
                      Entwicklungsteams.
                    </div>
                  }
                  sideContent={
                    <img className="w-full h-auto" src={planetArtImg} alt="abstract art" />
                  }
                />
              </SideContentItemContainer>
              <SideContentContainer className="max-md:hidden w-1/2" />
            </SiteContentAccordion>

            <div className="w-full flex h-1 mb-6">
              <div className="w-56 bg-gradient-to-r from-yellow-400 to-orange-500 h-full" />
              <div className="flex-grow h-full bg-brand-gray-light" />
            </div>

            <div className="flex mx-3 mb-12 items-center">
              <div className="w-1/2 font-bold underline">
                <FormattedMessage id="links.services" />
              </div>
              <div className="w-1/2 flex justify-end">
                <AppButton className="button-light">
                  <div className="flex items-center">
                    <AppKnockoutText className="mr-2">Prototyping & User-Testing</AppKnockoutText>
                    <img
                      className="bg-teal-400"
                      style={{
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'top left',
                        maskImage: `url(${shortArrowRight})`,
                        height: '1.2rem', // fit to line height
                        width: '0.7rem', // multiply height with width/height (0.583) ratio
                      }}
                      alt="" // can not set this for a mask, otherwise it is seen through it
                    />
                  </div>
                </AppButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}

export default SoftwareLaboratoryPage;
