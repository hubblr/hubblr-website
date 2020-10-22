import React, { useState } from 'react';
import isEmpty from 'validator/es/lib/isEmpty';
import isMobilePhone from 'validator/es/lib/isMobilePhone';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import Form from '../form/form/Form';
import Textarea from '../form/form/Textarea';
import HubblrGradientBorderButtonBase from '../gradientBorderButtons/HubblrGradientBorderButtonBase';
import Input from '../form/form/Input';

function ContactPageForm() {
  const fieldClasses = 'font-bold bg-gray-600 rounded-lg p-4';
  const createClassedInput = ({ placeholder, name, value, valueSetter, validator }) => {
    return (
      <Input
        placeholder={placeholder}
        labelClassNames="hidden"
        inputClasses={fieldClasses}
        name={name}
        maxLength={32}
        value={value}
        onChange={(e) => {
          valueSetter(e.target.value);
        }}
        onValidate={validator}
      />
    );
  };

  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // const [request, setRequest] = useState('');

  return (
    <div className="w-full h-full bg-gray-800 text-gray-300 p-6 rounded-lg">
      <Form
        formStyles="h-full flex flex-col"
        onSubmit={() => {
          window.console.log('submit');
          window.console.log(parsePhoneNumberFromString(phoneNumber));
        }}
      >
        <div className="flex-grow flex flex-col justify-between mb-12">
          {createClassedInput({
            valueSetter: setName,
            placeholder: 'IHR NAME*',
            name: 'name',
            value: name,
            validator: (v) => {
              return !isEmpty(v) || 'Bitte geben Sie Ihren Namen ein!';
            },
          })}
          {createClassedInput({
            valueSetter: setBusiness,
            placeholder: 'IHR UNTERNEHMEN',
            name: 'business',
            value: business,
          })}
          {createClassedInput({
            valueSetter: setPhoneNumber,
            placeholder: 'IHRE TELEFONNUMMER',
            name: 'phone number',
            value: phoneNumber,
            validator: (v) => {
              return isMobilePhone(v) || 'Bitte geben Sie eine valide Telefonnummer ein!';
            },
          })}
          <Textarea placeholder="WIE KÖNNEN WIR HELFEN?*" inputClassName={`h-24 ${fieldClasses}`} />
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
