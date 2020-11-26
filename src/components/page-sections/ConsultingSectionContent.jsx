import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import MainContentGrid from '../index-page-main-content/main-content-card/MainContentGrid';
import MainContentGridItem from '../index-page-main-content/main-content-card/MainContentGridItem';
import MainContentCard from '../index-page-main-content/main-content-card/MainContentCard';
import DangerousIntlSpan from '../intl/DangerousIntlSpan';

function ConsultingSectionContent({ children }) {
  return (
    <MainContentCard
      description={<FormattedMessage id="index.consulting.description" />}
      title={<FormattedMessage id="index.consulting.title" />}
      className="mb-5"
    >
      <MainContentGrid>
        <MainContentGridItem
          text={<DangerousIntlSpan id="index.consulting.content.0.text" />}
          title={<DangerousIntlSpan id="index.consulting.content.0.title" />}
        />
        <MainContentGridItem
          text={<DangerousIntlSpan id="index.consulting.content.1.text" />}
          title={<DangerousIntlSpan id="index.consulting.content.1.title" />}
        />
        <MainContentGridItem
          text={<DangerousIntlSpan id="index.consulting.content.2.text" />}
          title={<DangerousIntlSpan id="index.consulting.content.2.title" />}
        />
        <MainContentGridItem
          text={<DangerousIntlSpan id="index.consulting.content.3.text" />}
          title={<DangerousIntlSpan id="index.consulting.content.3.title" />}
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
