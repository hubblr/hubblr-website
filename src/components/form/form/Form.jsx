import React from 'react';
import PropTypes from 'prop-types';

export const FormInputContext = React.createContext(undefined);
export const FormValidationErrorsContext = React.createContext({});

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.componentValidators = {};

    this.registerComponentValidator = this.registerComponentValidator.bind(this);
    this.unregisterComponentValidator = this.unregisterComponentValidator.bind(this);
    this.updateErrorMessageForComponent = this.updateErrorMessageForComponent.bind(this);
    this.triggerComponentValidators = this.triggerComponentValidators.bind(this);
    this.beforeSubmit = this.beforeSubmit.bind(this);

    this.formContextValue = {
      registerComponentValidator: this.registerComponentValidator,
      unregisterComponentValidator: this.unregisterComponentValidator,
      updateErrorMessageForComponent: this.updateErrorMessageForComponent,
      triggerComponentValidators: this.triggerComponentValidators,
    };

    this.state = {
      validationErrors: props.serverValidationErrors,
    };
  }

  componentDidUpdate(prevProps) {
    const { serverValidationErrors } = this.props;

    // every time the serverValidationErrors prop changes, we update the current error messages to show the respecting errors
    if (serverValidationErrors !== prevProps.serverValidationErrors) {
      Object.keys(serverValidationErrors).forEach((key) =>
        this.updateErrorMessageForComponent(key, serverValidationErrors[key])
      );
    }
  }

  // Inputs within this form may register for validation purposes
  registerComponentValidator(fieldName, validator) {
    this.componentValidators[fieldName] = validator;
  }

  // When registered components unmount or disappear in any way, they have to unregister
  unregisterComponentValidator(fieldName) {
    const { [fieldName]: toBeKicked, ...others } = this.componentValidators;
    this.componentValidators = others;
  }

  beforeSubmit() {
    const validationResults = Object.keys(this.componentValidators).map((componentName) =>
      this.componentValidators[componentName](true)
    );

    return !validationResults.includes(false);
  }

  updateErrorMessageForComponent(fieldName, error = null) {
    this.setState((prevState) => {
      const { [fieldName]: previousErrorOfField, ...others } = prevState.validationErrors;
      return {
        validationErrors: {
          ...others,
          ...(error !== null ? { [fieldName]: error } : {}),
        },
      };
    });
  }

  triggerComponentValidators(componentNamesToValidate) {
    componentNamesToValidate.forEach((name) => {
      this.componentValidators[name](false, true);
    });
  }

  render() {
    const { onSubmit, children, onSubmitValidationFailed } = this.props;
    const { validationErrors } = this.state;

    return (
      <FormInputContext.Provider value={this.formContextValue}>
        <FormValidationErrorsContext.Provider value={validationErrors}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (!this.beforeSubmit()) {
                onSubmitValidationFailed();
                return;
              }

              onSubmit(e);
            }}
          >
            {children}
          </form>
        </FormValidationErrorsContext.Provider>
      </FormInputContext.Provider>
    );
  }
}

Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  onSubmit: PropTypes.func.isRequired,
  serverValidationErrors: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
  ),
  onSubmitValidationFailed: PropTypes.func,
};

Form.defaultProps = {
  serverValidationErrors: {},
  onSubmitValidationFailed: () => {},
};

export default Form;
