import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'validator/es/lib/isEmpty';
import { debounce } from '../../../util/helpers';
import withContext from '../../../util/withContext';
import { FormInputContext, FormValidationErrorsContext } from './Form';
import ValidationError from './ValidationError';

class Input extends React.Component {
  validateAfterChangeDebounce = debounce(this.validateInput, 500);

  constructor(props) {
    super(props);

    this.state = {
      showPlaceholderHint: false,
      isValueEmpty: true,
      touched: false,
    };

    this.validateInput = this.validateInput.bind(this);
    this.checkIfFilled = this.checkIfFilled.bind(this);
  }

  componentDidMount() {
    const { value: currValue, formInputContext, name } = this.props;

    this.checkIfFilled(undefined, currValue);

    if (formInputContext && formInputContext.registerComponentValidator) {
      formInputContext.registerComponentValidator(name, this.validateInput);
    }
  }

  componentDidUpdate(prevProps) {
    const { value: oldValue } = prevProps;
    const { value: currValue, label, formInputContext, name, stickPlaceholderHint } = this.props;

    if (oldValue !== currValue && label !== undefined) {
      // eslint-disable-next-line
      this.setState({
        showPlaceholderHint: stickPlaceholderHint || (currValue && currValue.length),
      });
    }

    const { touched } = this.state;
    if (!touched && oldValue !== currValue) {
      // eslint-disable-next-line
      this.setState({
        touched: true,
      });
    }

    if (formInputContext && oldValue !== currValue) {
      formInputContext.updateErrorMessageForComponent(name, null);
      this.validateAfterChangeDebounce();
    }

    this.checkIfFilled(oldValue, currValue);
  }

  componentWillUnmount() {
    const { formInputContext, name } = this.props;
    if (formInputContext && formInputContext.unregisterComponentValidator) {
      formInputContext.unregisterComponentValidator(name);
    }
  }

  checkIfFilled(oldValue, currValue) {
    const { label, stickPlaceholderHint } = this.props;

    if (oldValue !== currValue) {
      // eslint-disable-next-line
      this.setState({
        isValueEmpty: !currValue || !currValue.length,
      });

      if (label !== undefined) {
        this.setState({
          showPlaceholderHint: stickPlaceholderHint || (currValue && currValue.length),
        });
      }
    }
  }

  validateInput(markAsTouched = false, triggeredByValidateWith = false) {
    const { value: currValue, onValidate, name } = this.props;

    const validationResult = onValidate ? onValidate(currValue) : true;

    const isValid = typeof validationResult === 'boolean' && validationResult === true;
    const errorMessage = validationResult === true ? null : validationResult;

    // eslint-disable-next-line
    this.setState({
      ...(markAsTouched ? { touched: true } : {}),
    });

    const { formInputContext, validationErrors } = this.props;
    if (validationErrors[name] !== errorMessage) {
      formInputContext.updateErrorMessageForComponent(name, errorMessage);
    }

    const { validateWith } = this.props;
    // feature to trigger other field's validation (use-case is for example the 3-step birthday input)
    // to prevent recursion this only works one level deep
    if (!triggeredByValidateWith && validateWith.length > 0) {
      formInputContext.triggerComponentValidators(validateWith);
    }

    return isValid;
  }

  render() {
    const {
      useTextarea,
      placeholder,
      inputClasses,
      groupClassNames,
      labelClassNames,
      invalidInputClassNames,
      textSize,
      onValidate,
      inputRef,
      onEnter,
      label,
      name,
      formInputContext,
      validationErrors,
      value,
      stickPlaceholderHint,
      validateWith,
      ...otherProps
    } = this.props;

    const { showPlaceholderHint, isValueEmpty, touched, type } = this.state;

    const isValid = !(name in validationErrors);

    let validationClasses = '';
    if (onValidate && touched) {
      if (isValid === true) {
        validationClasses += 'is-valid';
      } else {
        validationClasses += `not-valid ${invalidInputClassNames}`;
      }
    }

    const inputElement = useTextarea ? (
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        className={`resize-none w-full ${inputClasses} ${validationClasses} ${
          showPlaceholderHint ? 'placeholder-hint-visible' : ''
        } ${!isValueEmpty ? 'filled' : ''}`}
        ref={inputRef}
        onBlur={() => (typeof value !== 'string' || isEmpty(value) ? this.validateInput() : null)}
        {...otherProps}
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={`w-full ${inputClasses} ${validationClasses} ${
          showPlaceholderHint ? 'placeholder-hint-visible' : ''
        } ${!isValueEmpty ? 'filled' : ''}`}
        ref={inputRef}
        onBlur={() => (typeof value !== 'string' || isEmpty(value) ? this.validateInput() : null)}
        {...otherProps}
      />
    );

    return (
      <div className={`input-group size-${textSize} ${groupClassNames}`}>
        <div
          className={`${labelClassNames} placeholder-hint ${showPlaceholderHint ? 'show' : 'hide'}`}
        >
          {label || placeholder}
        </div>
        {inputElement}
        <ValidationError fieldName={name} />
      </div>
    );
  }
}

Input.propTypes = {
  useTextarea: PropTypes.bool,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputClasses: PropTypes.string,
  groupClassNames: PropTypes.string,
  labelClassNames: PropTypes.string,
  invalidInputClassNames: PropTypes.string,
  textSize: PropTypes.string,
  type: PropTypes.string,
  onValidate: PropTypes.func,
  onEnter: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  label: PropTypes.string,
  formInputContext: PropTypes.shape({
    registerComponentValidator: PropTypes.func.isRequired,
    unregisterComponentValidator: PropTypes.func.isRequired,
    updateErrorMessageForComponent: PropTypes.func.isRequired,
    triggerComponentValidators: PropTypes.func.isRequired,
  }),
  validationErrors: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool]))
    .isRequired,
  stickPlaceholderHint: PropTypes.bool,
  validateWith: PropTypes.arrayOf(PropTypes.string),
};

Input.defaultProps = {
  useTextarea: false,
  inputClasses: '',
  groupClassNames: '',
  labelClassNames: '',
  invalidInputClassNames: '',
  textSize: 'lg',
  onValidate: undefined,
  onEnter: undefined,
  value: undefined,
  type: 'text',
  inputRef: undefined,
  label: undefined,
  formInputContext: undefined,
  stickPlaceholderHint: false,
  validateWith: [],
};

export default withContext(
  FormValidationErrorsContext,
  'validationErrors'
)(withContext(FormInputContext, 'formInputContext')(Input));
