import React, { useState } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import Swal from 'sweetalert2';
import isEmpty from 'validator/es/lib/isEmpty';
import isMobilePhone from 'validator/es/lib/isMobilePhone';
import Form from '../../form/form/Form';
import GradientButton from '../../buttons/gradient-border-buttons/GradientButton';
import ContactPageInput from './ContactPageInput';
import { MobileAndTabletQuery } from '../../../util/helpers';
import { CONTACT_FORM_POST_URL } from '../../../config';

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
  const intl = useIntl();

  const [changeIsSubmit, setChangeIsSubmit] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="w-full lg:h-full text-white bg-brand-gray-darkest p-4 md:p-6 pt-8 lg:pt-6 rounded-lg">
      <div>
        <MobileAndTabletQuery>
          <h2 className="text-center text-2xl font-extrabold leading-none mb-8">
            <FormattedMessage id="contact.form.heading" />
          </h2>
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
              Swal.fire({
                title: intl.formatMessage({ id: 'contact.form.success.title' }),
                icon: 'success',
              });
            } else {
              Swal.fire({
                title: intl.formatMessage({ id: 'contact.form.error.title' }),
                text: intl.formatMessage({ id: 'contact.form.error.text' }),
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
            placeholder={intl.formatMessage({ id: 'contact.form.name' })}
            name="name"
            value={name}
            onChange={useOnChange(changeIsSubmit, setChangeIsSubmit, setName)}
            onBlur={useOnBlur(changeIsSubmit, setChangeIsSubmit, setName)}
            maxLength={64}
            flexClasses="flex-grow mb-6"
            validator={createNotEmptyValidator(
              intl.formatMessage({ id: 'contact.form.missing-name' })
            )}
          />
          <ContactPageInput
            onChange={useOnChange(changeIsSubmit, setChangeIsSubmit, setCompany)}
            onBlur={useOnBlur(changeIsSubmit, setChangeIsSubmit, setCompany)}
            enableErrorMessages={!changeIsSubmit}
            placeholder={intl.formatMessage({ id: 'contact.form.business' })}
            name="business"
            value={company}
            maxLength={64}
            flexClasses="flex-grow mb-6"
          />
          <ContactPageInput
            onChange={useOnChange(changeIsSubmit, setChangeIsSubmit, setPhone)}
            onBlur={useOnBlur(changeIsSubmit, setChangeIsSubmit, setPhone)}
            enableErrorMessages={!changeIsSubmit}
            placeholder={intl.formatMessage({ id: 'contact.form.phone-number' })}
            name="phone number"
            value={phone}
            maxLength={64}
            flexClasses="flex-grow mb-6"
            validator={(v) => {
              return (
                isEmpty(v) ||
                isMobilePhone(v) ||
                intl.formatMessage({ id: 'contact.form.invalid-phone-number' })
              );
            }}
          />
          <ContactPageInput
            useTextArea
            onChange={useOnChange(changeIsSubmit, setChangeIsSubmit, setMessage)}
            onBlur={useOnBlur(changeIsSubmit, setChangeIsSubmit, setMessage)}
            enableErrorMessages={!changeIsSubmit}
            placeholder={intl.formatMessage({ id: 'contact.form.message' })}
            name="request"
            value={message}
            flexClasses="flex-grow-2"
            validator={createNotEmptyValidator(
              intl.formatMessage({ id: 'contact.form.missing-message' })
            )}
          />
        </div>
        <div className="flex justify-center w-full">
          <GradientButton
            isSubmitButton
            theme="dark"
            widthClass="max-sm:w-full"
            innerOverlayDivClassName="justify-center"
          >
            <FormattedMessage id="contact.form.send" />
          </GradientButton>
        </div>
      </Form>
    </div>
  );
}

export default ContactPageForm;
