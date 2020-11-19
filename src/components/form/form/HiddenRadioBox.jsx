import React from 'react';
import PropTypes from 'prop-types';
import { generateUniqueID } from '../../util/helpers';

const HiddenRadioBox = ({ children, checked, onChange, className, disabled, name }) => {
  const id = generateUniqueID();
  return (
    <label htmlFor={id} className={`cursor-pointer ${className}`}>
      {children}

      <input
        id={id}
        className="hidden"
        type="radio"
        name={name}
        onChange={onChange}
        disabled={disabled}
        checked={checked}
      />
    </label>
  );
};

HiddenRadioBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

HiddenRadioBox.defaultProps = {
  className: '',
  disabled: false,
};

export default HiddenRadioBox;
