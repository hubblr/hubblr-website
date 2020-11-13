import React, { useState } from 'react';
import Swal from 'sweetalert2';
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
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

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
              phone,
              company,
              message,
            }),
          }).then((res) => {
            if (res.status === 200) {
              Swal.fire({ title: 'Erfolgreich gesendet!', icon: 'success' });
            } else {
              Swal.fire({
                title: 'Fehler!',
                text: 'Das hat leider nicht geklappt. Versuch es später nochmal!',
                icon: 'error',
              });
            }
            setName('');
            setCompany('');
            setPhone('');
            setMessage('');
          });
        }}
      >
        <div className="flex-grow flex flex-col justify-between pb-12">
          {createStyledInput({
            valueSetter: setName,
            placeholder: 'IHR NAME*',
            name: 'name',
            value: name,
            maxLength: 64,
            flexClasses: 'flex-grow mb-6',
            validator: createNotEmptyValidator('Bitte geben Sie Ihren Namen ein!'),
          })}
          {createStyledInput({
            valueSetter: setCompany,
            placeholder: 'IHR UNTERNEHMEN',
            name: 'business',
            value: company,
            maxLength: 64,
            flexClasses: 'flex-grow mb-6',
          })}
          {createStyledInput({
            valueSetter: setPhone,
            placeholder: 'IHRE TELEFONNUMMER',
            name: 'phone number',
            value: phone,
            maxLength: 64,
            flexClasses: 'flex-grow mb-6',
            validator: (v) => {
              return (
                isEmpty(v) || isMobilePhone(v) || 'Bitte geben Sie eine valide Telefonnummer ein!'
              );
            },
          })}
          {createStyledInput({
            isTextArea: true,
            valueSetter: setMessage,
            placeholder: 'WIE KÖNNEN WIR HELFEN?*',
            name: 'request',
            value: message,
            flexClasses: 'flex-grow-2',
            validator: createNotEmptyValidator('Bitte geben Sie einen Text ein!'),
          })}
        </div>
        <div className="w-full flex justify-center">
          <HubblrGradientBorderButtonBase
            isSubmitButton
            theme="dark"
            widthClass=""
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
