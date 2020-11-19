import React from 'react';
import PropTypes from 'prop-types';
import ErrorHint from './ErrorHint';
import { FormValidationErrorsContext } from './Form';
import withContext from '../../../util/withContext';

const ValidationError = ({ fieldName, validationErrors }) => {
  if (!validationErrors[fieldName]) {
    return null;
  }
  return <ErrorHint hintPointerSize="0.75rem">{validationErrors[fieldName]}</ErrorHint>;
};

ValidationError.propTypes = {
  fieldName: PropTypes.string.isRequired,
  validationErrors: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool]))
    .isRequired,
};

export default withContext(FormValidationErrorsContext, 'validationErrors')(ValidationError);
