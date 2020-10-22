import React from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-autosize-textarea';

const Textarea = ({ placeholder, className, inputClassName, textSize, ...props }) => (
  <div className={`input-group ${className} size-${textSize}`}>
    <TextareaAutosize
      placeholder={placeholder}
      required
      className={`w-full ${inputClassName}`}
      {...props}
    />
  </div>
);

Textarea.propTypes = {
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  textSize: PropTypes.string,
};

Textarea.defaultProps = {
  placeholder: '',
  className: '',
  inputClassName: '',
  textSize: '',
};

export default Textarea;
