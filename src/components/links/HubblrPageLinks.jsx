import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import PageLinkContent from './PageLinkContent';

function HubblrPageLinks({ className }) {
  return (
    <div className="w-full overflow-hidden mt-4 pb-1">
      <div className={`flex flex-wrap justify-center -mr-5 ${className}`}>
        <Link to="/imprint" className="pr-5">
          <PageLinkContent>Impressum</PageLinkContent>
        </Link>
        <Link to="/privacy" className="pr-5">
          <PageLinkContent>Datenschutz</PageLinkContent>
        </Link>
        <a href="https://github.com/hubblr/" className="pr-5">
          <PageLinkContent>GitHub</PageLinkContent>
        </a>
        <a href="http://join.hubblr.io/" className="pr-5">
          <PageLinkContent notificationNumber={2}>Jobs</PageLinkContent>
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
