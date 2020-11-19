import React, { useState } from 'react';
import Swal from 'sweetalert2';
import isEmpty from 'validator/es/lib/isEmpty';
import isMobilePhone from 'validator/es/lib/isMobilePhone';
import Form from '../form/form/Form';
import HubblrGradientBorderButtonBase from '../buttons/gradient-border-buttons/HubblrGradientBorderButtonBase';
import ContactPageInput from './ContactPageInput';
import { MobileAndTabletQuery } from '../../util/helpers';
import { CONTACT_FORM_POST_URL } from '../../config';

function createNotEmptyValidator(errorMsg) {
  return (v) => {
    return !isEmpty(v) || errorMsg;
  };
}

function useOnChange(changeIsSubmit, setChangeIsSubmit, valueSetter) {
  return (e) => {
    if (changeIsSubmit) {
      setChangeIsSubmit(false);
    }
    valueSetter(e.target.value);
  };
}

function useOnBlur(changeIsSubmit, setChangeIsSubmit, valueSetter) {
  return (e) => {
    if (changeIsSubmit) {
      setChangeIsSubmit(false);
    }
    valueSetter(e.target.value);
    return true; // forces validation
  };
}

function ContactPageForm() {
  const [changeIsSubmit, setChangeIsSubmit] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="w-full lg:h-full text-white bg-brand-gray-darkest p-4 md:p-6 pt-8 lg:pt-6 rounded-lg">
      <div>
        <MobileAndTabletQuery>
          <div className="text-center text-2xl font-extrabold leading-none mb-8">
            Kontaktanfrage
          </div>
        </MobileAndTabletQuery>
      </div>
      <Form
        formStyles="flex flex-col"
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
            setChangeIsSubmit(true);
            setName('');
            setCompany('');
            setPhone('');
            setMessage('');
          });
        }}
      >
        <div className="flex-grow flex flex-col pb-12">
          <ContactPageInput
            enableErrorMessages={!changeIsSubmit}
            placeholder="IHR NAME*"
            name="name"
            value={name}
            onChange={useOnChange(changeIsSubmit, setChangeIsSubmit, setName)}
            onBlur={useOnBlur(changeIsSubmit, setChangeIsSubmit, setName)}
            maxLength={64}
            flexClasses="flex-grow mb-6"
            validator={createNotEmptyValidator('Bitte geben Sie Ihren Namen ein!')}
          />
          <ContactPageInput
            onChange={useOnChange(changeIsSubmit, setChangeIsSubmit, setCompany)}
            onBlur={useOnBlur(changeIsSubmit, setChangeIsSubmit, setCompany)}
            enableErrorMessages={!changeIsSubmit}
            placeholder="IHR UNTERNEHMEN"
            name="business"
            value={company}
            maxLength={64}
            flexClasses="flex-grow mb-6"
          />
          <ContactPageInput
            onChange={useOnChange(changeIsSubmit, setChangeIsSubmit, setPhone)}
            onBlur={useOnBlur(changeIsSubmit, setChangeIsSubmit, setPhone)}
            enableErrorMessages={!changeIsSubmit}
            placeholder="IHRE TELEFONNUMMER"
            name="phone number"
            value={phone}
            maxLength={64}
            flexClasses="flex-grow mb-6"
            validator={(v) => {
              return (
                isEmpty(v) || isMobilePhone(v) || 'Bitte geben Sie eine valide Telefonnummer ein!'
              );
            }}
          />
          <ContactPageInput
            useTextArea
            onChange={useOnChange(changeIsSubmit, setChangeIsSubmit, setMessage)}
            onBlur={useOnBlur(changeIsSubmit, setChangeIsSubmit, setMessage)}
            enableErrorMessages={!changeIsSubmit}
            placeholder="WIE KÖNNEN WIR HELFEN?*"
            name="request"
            value={message}
            flexClasses="flex-grow-2"
            validator={createNotEmptyValidator('Bitte geben Sie einen Text ein!')}
          />
        </div>
        <div className="flex justify-center w-full">
          <HubblrGradientBorderButtonBase
            isSubmitButton
            theme="dark"
            widthClass="max-sm:w-full"
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
