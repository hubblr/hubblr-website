import React from 'react';
import PropTypes from 'prop-types';
import AppButtonRound from '../buttons/bases/AppButtonRound';
import xImage from '../../images/x-img.svg';

function Modal({ children, className, isOpen, setOpen }) {
  return (
    <div className={`fixed z-50 h-screen w-full inset-0 ${isOpen ? '' : 'hidden'} ${className}`}>
      <div className="h-full w-full" style={{ backgroundColor: 'rgba(151, 151, 151, 0.9)' }} />
      <div className="absolute inset-0 h-full w-full flex justify-center items-center">
        <div className="relative flex flex-col bg-white px-10 py-12 rounded-xl">
          <div className="absolute" style={{ top: '1rem', right: '1rem' }}>
            <AppButtonRound
              onClick={() => {
                setOpen(false);
              }}
              className="button-light"
            >
              <img className="w-4 h-auto" src={xImage} alt="x" />
            </AppButtonRound>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  className: '',
};

export default Modal;
