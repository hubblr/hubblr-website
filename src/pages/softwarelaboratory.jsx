import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import NavBarSoftwareLaboratory from '../components/nav-bar/NavBarSoftwareLaboratory';
import ProductPlanningSectionContent from '../components/software-laboratory/service-section-content/ProductPlanningSectionContent';
import UIUXSectionContent from '../components/software-laboratory/service-section-content/UIUXSectionContent';
import AppKnockoutText from '../components/text/AppKnockoutText';
import AppButton from '../components/buttons/bases/AppButton';
import shortArrowRight from '../images/shortArrow/short-arrow-right.png';
import ServiceSectionModalButton from '../components/software-laboratory/service-section-modal/ServiceSectionModalButton';
import ServiceSectionModal from '../components/software-laboratory/service-section-modal/ServiceSectionModal';
import SoftwareLaboratoryBanner from '../components/software-laboratory/banner/SoftwareLaboratoryBanner';

const sectionContents = [<ProductPlanningSectionContent />, <UIUXSectionContent />];
const buttonTextIds = [
  'software-laboratory.service-sections.content.1.title',
  'software-laboratory.service-sections.content.0.title',
];

function SoftwareLaboratoryPage() {
  const [curDisplayedSection, setCurDisplayedSection] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const advanceSection = () => {
    if (curDisplayedSection === sectionContents.length - 1) {
      setCurDisplayedSection(0);
    } else {
      setCurDisplayedSection(curDisplayedSection + 1);
    }
  };

  return (
    <LayoutWrapper>
      <div className="relative flex flex-col min-h-screen w-full">
        <SoftwareLaboratoryBanner />
        <NavBarSoftwareLaboratory className="sticky" />

        <div className="bg-brand-eggshell flex-grow text-black bg-white">
          <div className="container mx-auto">
            {curDisplayedSection === 0 && <ProductPlanningSectionContent />}
            {curDisplayedSection === 1 && <UIUXSectionContent />}

            <div className="w-full flex h-1 mb-6">
              <div className="w-56 bg-gradient-to-r from-yellow-400 to-orange-500 h-full" />
              <div className="flex-grow h-full bg-brand-gray-light" />
            </div>

            <div className="flex mx-3 mb-12 items-center">
              <div className="w-1/2">
                <AppButton
                  onClick={() => setShowModal(true)}
                  className="button-light font-bold underline"
                >
                  <FormattedMessage id="links.services" />
                </AppButton>
              </div>
              <div className="w-1/2 flex justify-end">
                <AppButton className="button-light" onClick={advanceSection}>
                  <div className="flex items-center">
                    <AppKnockoutText className="mr-2">
                      <FormattedMessage id={buttonTextIds[curDisplayedSection]} />
                    </AppKnockoutText>
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

        <ServiceSectionModal
          onClose={() => setShowModal(false)}
          className={showModal ? '' : 'hidden'}
        >
          <ServiceSectionModalButton onClick={() => setCurDisplayedSection(0)}>
            <FormattedMessage id="software-laboratory.service-sections.content.0.title" />
          </ServiceSectionModalButton>
          <ServiceSectionModalButton onClick={() => setCurDisplayedSection(1)}>
            <FormattedMessage id="software-laboratory.service-sections.content.1.title" />
          </ServiceSectionModalButton>
          <ServiceSectionModalButton>
            <FormattedMessage id="software-laboratory.service-sections.content.2.title" />
          </ServiceSectionModalButton>
          <ServiceSectionModalButton>
            <FormattedMessage id="software-laboratory.service-sections.content.3.title" />
          </ServiceSectionModalButton>
        </ServiceSectionModal>
      </div>
    </LayoutWrapper>
  );
}

export default SoftwareLaboratoryPage;
