import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { FormattedMessage } from 'react-intl';

const StartupSectionContentCard = ({ firm, description, link }) => {
  return (
    <div className="w-full h-auto items-center bg-gray-primary rounded-2xl">
      <h2 className="text-xl m-5 text-left">{firm}</h2>
      <p className="m-5 text-left">{description}</p>
      <div className="flex mb-5">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-hubblr-blue to-hubblr-green">
          <Link to={link} className="m-5 w-1/2 ">
            <FormattedMessage id="generic.read-more" />
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default StartupSectionContentCard;

StartupSectionContentCard.propTypes = {
  firm: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
};

StartupSectionContentCard.defaultProps = {
  firm: 'defaultCompany Ltd.',
  description: 'defaultCompany Description',
  link: '/404',
};
