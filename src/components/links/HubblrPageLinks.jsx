import React from 'react';
import PropTypes from 'prop-types';
import PageLinks from './PageLinks';

function HubblrPageLinks({ className }) {
  return (
    <PageLinks
      className={className}
      links={[
        {
          text: 'Impressum',
        },
        {
          text: 'Datenschutz',
        },
        {
          text: 'Office Münster',
        },
        {
          text: 'Office Hamburg',
        },
        {
          text: 'Github',
        },
        {
          text: 'Jobs',
          notificationNumber: 3,
          href: 'http://join.hubblr.io/',
        },
      ]}
    />
  );
}

HubblrPageLinks.propTypes = {
  className: PropTypes.string,
};

HubblrPageLinks.defaultProps = {
  className: '',
};

export default HubblrPageLinks;
