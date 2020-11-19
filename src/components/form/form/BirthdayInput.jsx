import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { isEmpty } from 'validator';

import Input from './Input';
import ValidationError from './ValidationError';

const BirthdayInput = ({ value, label, placeholder, onChange, name, ...props }) => {
  const [dayValue, setDayValue] = useState(undefined);
  const [monthValue, setMonthValue] = useState(undefined);
  const [yearValue, setYearValue] = useState(undefined);

  const monthComponent = useRef();
  const yearComponent = useRef();

  useEffect(() => {
    if (value && (!dayValue || !monthValue || !yearValue)) {
      const currentValue = moment(value);
      setDayValue(currentValue.format('DD'));
      setMonthValue(currentValue.format('MM'));
      setYearValue(currentValue.format('YYYY'));
    }
  }, [value]);

  useEffect(() => {
    const currentDateSelect = `${yearValue}-${monthValue}-${dayValue}`;
    if (
      moment(currentDateSelect, 'YYYY-MM-DD').isValid() &&
      yearValue &&
      monthValue &&
      dayValue &&
      currentDateSelect !== value
    ) {
      onChange(currentDateSelect);
    }
  }, [yearValue, monthValue, dayValue]);

  const isValidDate = () => {
    if (dayValue === undefined || monthValue === undefined || yearValue === undefined) {
      return true;
    }

    return moment(`${yearValue}-${monthValue}-${dayValue}`, 'YYYY-MM-DD').isValid();
  };

  return (
    <div className="flex flex-col">
      <span className="uppercase text-xs font-bold">{label}</span>
      <div className="flex flex-row">
        <div className="flex flex-col w-24">
          <Input
            type="number"
            value={dayValue}
            name="birthday-day"
            placeholder="TT"
            maxLength="2"
            min={1}
            max={31}
            onChange={(e) => {
              if (e.target.value.length <= 2) {
                setDayValue(e.target.value);
              }
              if (e.target.value.length === 2) {
                monthComponent.current.focus();
              }
            }}
            autoComplete="bday-day"
            pattern="\d{1-2}"
            label="Tag"
            validateWith={['birthday-month', 'birthday-year']}
            onValidate={(v) =>
              typeof v === 'string' &&
              !isEmpty(v) &&
              Number(v) <= 31 &&
              Number(v) >= 1 &&
              isValidDate()
            }
            {...props}
          />
        </div>
        <div className="flex flex-col w-24 ml-1">
          <Input
            type="number"
            value={monthValue}
            placeholder="MM"
            maxLength="2"
            name="birthday-month"
            onChange={(e) => {
              if (e.target.value.length <= 2) {
                setMonthValue(e.target.value);
              }
              if (e.target.value.length === 2) {
                yearComponent.current.focus();
              }
            }}
            inputRef={monthComponent}
            autoComplete="bday-month"
            validateWith={['birthday-day', 'birthday-year']}
            pattern="\d{1-2}"
            label="Monat"
            max={12}
            min={1}
            onValidate={(v) =>
              typeof v === 'string' &&
              !isEmpty(v) &&
              Number(v) <= 12 &&
              Number(v) >= 1 &&
              isValidDate()
            }
            {...props}
          />
        </div>
        <div className="flex flex-col flex-grow ml-1">
          <Input
            type="number"
            value={yearValue}
            name="birthday-year"
            validateWith={['birthday-month', 'birthday-day']}
            placeholder="YYYY"
            maxLength="4"
            onChange={(e) => setYearValue(e.target.value)}
            inputRef={yearComponent}
            autoComplete="bday-year"
            pattern="\d{4}"
            label="Jahr"
            min={1901}
            max={moment().year()}
            onValidate={(v) =>
              typeof v === 'string' &&
              !isEmpty(v) &&
              Number(v) > 1900 &&
              Number(v) <= moment().year() &&
              isValidDate()
            }
            {...props}
          />
        </div>
      </div>
      <ValidationError fieldName="birthday" />
    </div>
  );
};

BirthdayInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
};

BirthdayInput.defaultProps = {
  value: Date.now(),
  placeholder: '',
  label: 'Geburtsdatum',
  onChange: () => {},
  name: undefined,
};

export default BirthdayInput;
