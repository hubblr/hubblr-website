import React from 'react';
import PropTypes from 'prop-types';
import { FormValidationErrorsContext } from './Form';
import withContext from '../../../util/withContext';

const ValidationError = ({ fieldName, validationErrors }) => {
  if (!validationErrors[fieldName]) {
    return null;
  }

  return <p className="text-xs text-red mt-2">{validationErrors[fieldName]}</p>;
};

ValidationError.propTypes = {
  fieldName: PropTypes.string.isRequired,
  validationErrors: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool]))
    .isRequired,
};

export default withContext(FormValidationErrorsContext, 'validationErrors')(ValidationError);
