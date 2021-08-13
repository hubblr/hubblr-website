import React from 'react';
import PropTypes from 'prop-types';
import shortArrowRightBlack from '../../../images/shortArrow/short-arrow-right-black.png';
import Button from '../../buttons/bases/Button';

function ServiceSectionModalButton({ children, onClick }) {
  return (
    <div className="py-1">
      <Button onClick={onClick} className="w-full flex button-theme-light rounded-2xl py-3 px-2">
        <div className="font-bold text-xl mr-16">{children}</div>
        <div className="flex-grow flex justify-end items-center">
          <img className="h-1/2 w-auto" src={shortArrowRightBlack} alt="arrow right" />
        </div>
      </Button>
    </div>
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
