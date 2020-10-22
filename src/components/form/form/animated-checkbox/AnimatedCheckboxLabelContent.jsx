import React from 'react';
import PropTypes from 'prop-types';
import CheckmarkXL from './CheckmarkXL';
import Checkmark from './Checkmark';

const AnimatedCheckboxLabelContent = ({ size, checked, className }) => (
  <div className={`animated-checkbox ${checked ? 'is-checked' : ''} ${className}`}>
    <div className={`check ${size !== 'xl' ? '' : 'size-xl'}`}>
      <div>{size !== 'xl' ? <Checkmark /> : <CheckmarkXL />}</div>
    </div>
  </div>
);

AnimatedCheckboxLabelContent.propTypes = {
  size: PropTypes.string,
  checked: PropTypes.bool,
  className: PropTypes.string,
};

AnimatedCheckboxLabelContent.defaultProps = {
  size: 'normal',
  checked: false,
  className: '',
};

export default AnimatedCheckboxLabelContent;
