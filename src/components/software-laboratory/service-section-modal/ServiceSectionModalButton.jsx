import React from 'react';
import PropTypes from 'prop-types';
import shortArrowRightBlack from '../../../images/shortArrow/short-arrow-right-black.png';
import Button from '../../buttons/bases/Button';

function ServiceSectionModalButton({ children, onClick }) {
  return (
    <Button onClick={onClick} className="w-full flex button-light rounded-lg py-3">
      <div className="font-bold text-xl mr-16">{children}</div>
      <div className="flex-grow flex justify-end items-center">
        <img className="h-1/2 w-auto" src={shortArrowRightBlack} alt="arrow right" />
      </div>
    </Button>
  );
}

ServiceSectionModalButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

ServiceSectionModalButton.defaultProps = {
  onClick: null,
};

export default ServiceSectionModalButton;
