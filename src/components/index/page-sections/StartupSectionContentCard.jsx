import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const StartupSectionContentCard = ({ firm, description, link, className }) => {
  return (
    <div className={`${className} w-full h-auto items-center bg-gray-primary rounded-2xl`}>
      <h2 className="text-xl m-5 text-left 2xl:text-3xl">{firm}</h2>
      <p className="m-5 text-left 2xl:text-xl">{description}</p>
      <div className="flex mb-5">
        <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-hubblr-blue to-hubblr-green">
          <a href={link} className="m-5 w-1/2 ">
            <FormattedMessage id="generic.read-more" />
          </a>
        </h3>
      </div>
    </div>
  );
};

export default StartupSectionContentCard;

StartupSectionContentCard.propTypes = {
  className: PropTypes.string,
  firm: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  link: PropTypes.string,
};

StartupSectionContentCard.defaultProps = {
  className: '',
  firm: 'defaultCompany Ltd.',
  description: 'defaultCompany Description',
  link: '/404',
};
