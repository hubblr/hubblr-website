import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import AppButtonRound from '../../buttons/bases/AppButtonRound';
import xImage from '../../../images/x-img.svg';

function ServiceSectionModal({ children, className, onClose }) {
  return (
    <div className={`fixed z-50 h-screen w-full inset-0 ${className}`}>
      <div className="h-full w-full" style={{ backgroundColor: 'rgba(151, 151, 151, 0.9)' }} />
      <div className="absolute inset-0 h-full w-full flex justify-center items-center">
        <div className="relative flex flex-col bg-white px-10 py-12 rounded-xl">
          <div className="absolute" style={{ top: '1rem', right: '1rem' }}>
            <AppButtonRound onClick={onClose} className="button-light">
              <img className="w-4 h-auto" src={xImage} alt="x" />
            </AppButtonRound>
          </div>

          <h1 className="relative text-center font-extrabold text-2xl mb-16">
            <FormattedMessage id="software-laboratory.service-sections.title" />
          </h1>

          <div className="flex flex-col border-between-children-1">
            {React.Children.map(children, (child) => (
              <div>{child}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

ServiceSectionModal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string,
};

ServiceSectionModal.defaultProps = {
  className: '',
};

export default ServiceSectionModal;
