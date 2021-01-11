import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

function DangerousIntlSpan({ id, postProcessingFn }) {
  const intl = useIntl();
  let dangerousMessage = intl.formatMessage({ id });
  if (postProcessingFn) {
    dangerousMessage = postProcessingFn(dangerousMessage);
  }

  return (
    <span
      dangerouslySetInnerHTML={{
        __html: dangerousMessage,
      }}
    />
  );
}

DangerousIntlSpan.propTypes = {
  id: PropTypes.string.isRequired,
  postProcessingFn: PropTypes.func,
};

DangerousIntlSpan.defaultProps = {
  postProcessingFn: null,
};

export default DangerousIntlSpan;
