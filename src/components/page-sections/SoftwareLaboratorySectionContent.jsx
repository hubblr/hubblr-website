import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import MainContentGrid from '../index-page-main-content/main-content-card/MainContentGrid';
import MainContentGridItem from '../index-page-main-content/main-content-card/MainContentGridItem';
import MainContentCard from '../index-page-main-content/main-content-card/MainContentCard';
import DangerousIntlSpan from '../intl/DangerousIntlSpan';

function SoftwareLaboratorySectionContent({ children }) {
  return (
    <MainContentCard
      description={<FormattedMessage id="index.software-laboratory.description" />}
      title={<FormattedMessage id="index.software-laboratory.title" />}
      className="mb-5"
    >
      <MainContentGrid>
        <MainContentGridItem
          text={<DangerousIntlSpan id="index.software-laboratory.content.0.text" />}
          title={<DangerousIntlSpan id="index.software-laboratory.content.0.title" />}
        />
        <MainContentGridItem
          text={<DangerousIntlSpan id="index.software-laboratory.content.1.text" />}
          title={<DangerousIntlSpan id="index.software-laboratory.content.1.title" />}
        />
        <MainContentGridItem
          text={<DangerousIntlSpan id="index.software-laboratory.content.2.text" />}
          title={<DangerousIntlSpan id="index.software-laboratory.content.2.title" />}
        />
        <MainContentGridItem
          text={<DangerousIntlSpan id="index.software-laboratory.content.3.text" />}
          title={<DangerousIntlSpan id="index.software-laboratory.content.3.title" />}
        />
      </MainContentGrid>
      {children}
    </MainContentCard>
  );
}

SoftwareLaboratorySectionContent.propTypes = {
  children: PropTypes.node,
};

SoftwareLaboratorySectionContent.defaultProps = {
  children: null,
};

export default SoftwareLaboratorySectionContent;
