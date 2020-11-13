import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import PageLinkContent from './PageLinkContent';
import DefaultLink from './DefaultLink';

function HubblrPageLinks({ className }) {
  return (
    <div className="w-full overflow-hidden mt-4">
      <div className={`flex flex-wrap justify-center -mr-5 ${className}`}>
        <Link to="/imprint" className="pr-5">
          <PageLinkContent>Impressum</PageLinkContent>
        </Link>
        <Link to="/imprint" className="pr-5">
          <PageLinkContent>Datenschutz</PageLinkContent>
        </Link>
        <DefaultLink className="pr-5">
          <PageLinkContent>Github</PageLinkContent>
        </DefaultLink>
        <a href="http://join.hubblr.io/" className="pr-5">
          <PageLinkContent notificationNumber={3}>Jobs</PageLinkContent>
        </a>
      </div>
    </div>
  );
}

HubblrPageLinks.propTypes = {
  className: PropTypes.string,
};

HubblrPageLinks.defaultProps = {
  className: '',
};

export default HubblrPageLinks;
