import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../form/form/Input';

function ContactPageInput({
  useTextArea,
  enableErrorMessages,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  validator,
  maxLength,
  flexClasses,
}) {
  return (
    <Input
      useTextarea={useTextArea}
      enableErrorMessages={enableErrorMessages}
      placeholder={placeholder}
      name={name}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onValidate={validator}
      labelClassNames="hidden"
      inputClasses="border-2 placeholder-brand-gray border-brand-gray-dark h-full font-bold bg-brand-gray-dark brand-gray-darkest rounded-lg p-4"
      groupClassNames={`flex-basis-0 relative ${flexClasses}`}
      invalidInputClassNames="border-2 border-red-600"
    />
  );
}

ContactPageInput.propTypes = {
  useTextArea: PropTypes.bool,
  enableErrorMessages: PropTypes.bool,
  placeholder: PropTypes.node,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  validator: PropTypes.func,
  maxLength: PropTypes.number,
  flexClasses: PropTypes.string,
};

ContactPageInput.defaultProps = {
  useTextArea: false,
  enableErrorMessages: true,
  placeholder: null,
  onChange: null,
  onBlur: null,
  validator: null,
  maxLength: null,
  flexClasses: null,
};

export default ContactPageInput;
