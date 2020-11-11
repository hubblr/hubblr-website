import React, { useState } from 'react';
import isEmpty from 'validator/es/lib/isEmpty';
import isMobilePhone from 'validator/es/lib/isMobilePhone';
import Form from '../form/form/Form';
import HubblrGradientBorderButtonBase from '../gradient-border-buttons/HubblrGradientBorderButtonBase';
import Input from '../form/form/Input';
import { CONTACT_FORM_POST_URL } from '../../config';

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
      inputClasses="border-2 placeholder-brand-gray border-brand-gray-dark h-full font-bold bg-brand-gray-dark brand-gray-darkest rounded-lg p-4"
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
    <div className="w-full h-full text-white bg-brand-gray-darkest p-6 rounded-lg">
      <Form
        formStyles="h-full flex flex-col"
        onSubmit={() => {
          fetch(CONTACT_FORM_POST_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              phone: phoneNumber,
              company: business,
              message: request,
            }),
          }).then((res) => {
            console.log(res);
          });
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
