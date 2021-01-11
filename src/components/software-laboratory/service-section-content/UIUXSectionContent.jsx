import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import DangerousIntlSpan from '../../intl/DangerousIntlSpan';
import { SideContentItemContainer, SiteContentAccordion } from '../../../accordion';
import SoftwareLaboratoryAccordionItem from '../accordion/SoftwareLaboratoryAccordionItem';

function UIUXSectionContent({ className }) {
  return (
    <div className={className}>
      <h1 className="uppercase text-3xl text-brand-purple text-center mt-12 mb-5">
        <FormattedMessage id="software-laboratory.service-sections.heading" />
      </h1>
      <h2 className="text-5xl font-extrabold leading-none text-center mb-32 max-md:mb-20">
        <DangerousIntlSpan
          id="software-laboratory.service-sections.content.1.title"
          postProcessingFn={(str) => str.replace('&', '&<br/>')}
        />
      </h2>

      <SiteContentAccordion className="flex w-full mb-24">
        <SideContentItemContainer className="border-between-children-1 max-md:mr-0 w-1/2 max-md:w-full">
          <SoftwareLaboratoryAccordionItem
            header={
              <FormattedMessage id="software-laboratory.service-sections.content.1.accordion.0.title" />
            }
            content={
              <div className="pb-5">
                <FormattedMessage id="software-laboratory.service-sections.content.1.accordion.0.text" />
              </div>
            }
          />

          <SoftwareLaboratoryAccordionItem
            header={
              <FormattedMessage id="software-laboratory.service-sections.content.1.accordion.1.title" />
            }
            content={
              <div className="pb-5">
                <FormattedMessage id="software-laboratory.service-sections.content.1.accordion.1.text" />
              </div>
            }
          />

          <SoftwareLaboratoryAccordionItem
            header={
              <FormattedMessage id="software-laboratory.service-sections.content.1.accordion.2.title" />
            }
            content={
              <FormattedMessage id="software-laboratory.service-sections.content.1.accordion.2.text" />
            }
          />
        </SideContentItemContainer>
      </SiteContentAccordion>
    </div>
  );
}

UIUXSectionContent.propTypes = {
  className: PropTypes.string,
};

UIUXSectionContent.defaultProps = {
  className: '',
};

export default UIUXSectionContent;
