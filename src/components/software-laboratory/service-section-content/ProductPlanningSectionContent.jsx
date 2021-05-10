import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { AccordionSideContentContainer, Accordion } from '@hubblr/react-side-content-accordion';
import DangerousIntlSpan from '../../intl/DangerousIntlSpan';
import SoftwareLaboratoryAccordionItem from '../accordion/SoftwareLaboratoryAccordionItem';
import astronautImg from '../../../images/softwareLaboratory/astronaut.jpg';
import abstractArtImg from '../../../images/softwareLaboratory/art-abstract.jpg';
import puzzleArtImg from '../../../images/softwareLaboratory/art-puzzle.jpg';
import planetArtImg from '../../../images/softwareLaboratory/art-planets.jpg';

function ProductPlanningSectionContent({ className }) {
  return (
    <div className={className}>
      <h1 className="uppercase text-3xl text-brand-purple text-center mt-12 mb-5">
        <FormattedMessage id="software-laboratory.service-sections.heading" />
      </h1>
      <h2 className="text-5xl font-extrabold leading-none text-center mb-32 max-md:mb-20">
        <DangerousIntlSpan
          id="software-laboratory.service-sections.content.0.title"
          postProcessingFn={(str) => str.replace('&', '&<br/>')}
        />
      </h2>

      <Accordion className="flex w-full mb-24">
        <div className="border-between-children-1 max-md:mr-0 w-1/2 max-md:w-full">
          <SoftwareLaboratoryAccordionItem
            initiallyExpanded
            header={
              <FormattedMessage id="software-laboratory.service-sections.content.0.accordion.0.title" />
            }
            content={
              <div className="pb-5">
                <FormattedMessage id="software-laboratory.service-sections.content.0.accordion.0.text" />
              </div>
            }
            sideContent={<img className="w-full h-auto" src={astronautImg} alt="astronaut" />}
          />

          <SoftwareLaboratoryAccordionItem
            header={
              <FormattedMessage id="software-laboratory.service-sections.content.0.accordion.1.title" />
            }
            content={
              <div className="pb-5">
                <FormattedMessage id="software-laboratory.service-sections.content.0.accordion.1.text" />
              </div>
            }
            sideContent={<img className="w-full h-auto" src={abstractArtImg} alt="abstract art" />}
          />

          <SoftwareLaboratoryAccordionItem
            header={
              <DangerousIntlSpan id="software-laboratory.service-sections.content.0.accordion.2.title" />
            }
            content={
              <div className="pb-5">
                <FormattedMessage id="software-laboratory.service-sections.content.0.accordion.2.text" />
              </div>
            }
            sideContent={<img className="w-full h-auto" src={puzzleArtImg} alt="abstract art" />}
          />

          <SoftwareLaboratoryAccordionItem
            header={
              <DangerousIntlSpan id="software-laboratory.service-sections.content.0.accordion.3.title" />
            }
            content={
              <FormattedMessage id="software-laboratory.service-sections.content.0.accordion.3.text" />
            }
            sideContent={<img className="w-full h-auto" src={planetArtImg} alt="abstract art" />}
          />
        </div>
        <AccordionSideContentContainer className="max-md:hidden ml-12 w-1/2" />
      </Accordion>
    </div>
  );
}

ProductPlanningSectionContent.propTypes = {
  className: PropTypes.string,
};

ProductPlanningSectionContent.defaultProps = {
  className: '',
};

export default ProductPlanningSectionContent;
