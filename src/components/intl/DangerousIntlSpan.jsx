import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

function DangerousIntlSpan({ id }) {
  const intl = useIntl();

  return (
    <span
      dangerouslySetInnerHTML={{
        __html: intl.formatMessage({ id }),
      }}
    />
  );
}

DangerousIntlSpan.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DangerousIntlSpan;
