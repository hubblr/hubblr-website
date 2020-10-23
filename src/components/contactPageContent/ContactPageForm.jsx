import React, { useState } from 'react';
import isEmpty from 'validator/es/lib/isEmpty';
import isMobilePhone from 'validator/es/lib/isMobilePhone';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import Form from '../form/form/Form';
import HubblrGradientBorderButtonBase from '../gradientBorderButtons/HubblrGradientBorderButtonBase';
import Input from '../form/form/Input';

function createNotEmptyValidator(errorMsg) {
  return (v) => {
    return !isEmpty(v) || errorMsg;
  };
}

function createStyledInput({
  isTextArea = false,
  placeholder,
  name,
  value,
  valueSetter,
  validator,
  maxLength,
  flexClasses,
}) {
  return (
    <Input
      useTextarea={isTextArea}
      placeholder={placeholder}
      labelClassNames="hidden"
      inputClasses="border-2 border-gray-600 h-full font-bold bg-gray-600 rounded-lg p-4"
      groupClassNames={`flex-basis-0 relative ${flexClasses}`}
      invalidInputClassNames="border-2 border-red-600"
      name={name}
      maxLength={maxLength}
      value={value}
      onChange={(e) => {
        valueSetter(e.target.value);
      }}
      onValidate={validator}
    />
  );
}

function ContactPageForm() {
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [request, setRequest] = useState('');

  return (
    <div className="w-full h-full bg-gray-800 text-gray-300 p-6 rounded-lg">
      <Form
        formStyles="h-full flex flex-col"
        onSubmit={() => {
          window.console.log('submit');
          window.console.log(parsePhoneNumberFromString(phoneNumber));
        }}
      >
        <div className="flex-grow flex flex-col justify-between gap-6 pb-12">
          {createStyledInput({
            valueSetter: setName,
            placeholder: 'IHR NAME*',
            name: 'name',
            value: name,
            maxLength: 64,
            flexClasses: 'flex-grow',
            validator: createNotEmptyValidator('Bitte geben Sie Ihren Namen ein!'),
          })}
          {createStyledInput({
            valueSetter: setBusiness,
            placeholder: 'IHR UNTERNEHMEN',
            name: 'business',
            value: business,
            maxLength: 64,
            flexClasses: 'flex-grow',
          })}
          {createStyledInput({
            valueSetter: setPhoneNumber,
            placeholder: 'IHRE TELEFONNUMMER',
            name: 'phone number',
            value: phoneNumber,
            maxLength: 64,
            flexClasses: 'flex-grow',
            validator: (v) => {
              return (
                isEmpty(v) || isMobilePhone(v) || 'Bitte geben Sie eine valide Telefonnummer ein!'
              );
            },
          })}
          {createStyledInput({
            isTextArea: true,
            valueSetter: setRequest,
            placeholder: 'WIE KÖNNEN WIR HELFEN?*',
            name: 'request',
            value: request,
            flexClasses: 'flex-grow-2',
            validator: createNotEmptyValidator('Bitte geben Sie einen Text ein!'),
          })}
        </div>
        <div className="w-full flex justify-center">
          <HubblrGradientBorderButtonBase
            isSubmitButton
            theme="dark"
            widthClass="w-1/3"
            addedFlexClasses="justify-center"
          >
            Absenden
          </HubblrGradientBorderButtonBase>
        </div>
      </Form>
    </div>
  );
}

export default ContactPageForm;
