import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/pro-regular-svg-icons';

const DateInput = ({ onChange, value, ...props }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <div className="date-picker">
      <SingleDatePicker
        date={value ? moment(value) : null}
        onDateChange={onChange}
        id="date-picker"
        focused={showDatePicker}
        onFocusChange={({ focused }) => setShowDatePicker(focused)}
        block
        numberOfMonths={1}
        hideKeyboardShortcutsPanel
        noBorder
        verticalSpacing={5}
        customInputIcon={<FontAwesomeIcon icon={faCalendar} />}
        {...props}
      />
    </div>
  );
};

DateInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default DateInput;
