import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import PageLinkContent from './PageLinkContent';
import DefaultLink from './DefaultLink';

function HubblrPageLinks({ className }) {
  return (
    <div className={`flex flex-wrap justify-center gap-5 ${className}`}>
      <Link to="/imprint">
        <PageLinkContent>Impressum</PageLinkContent>
      </Link>
      <Link to="/imprint">
        <PageLinkContent>Datenschutz</PageLinkContent>
      </Link>
      <DefaultLink>
        <PageLinkContent>Office Münster</PageLinkContent>
      </DefaultLink>
      <DefaultLink>
        <PageLinkContent>Office Hamburg</PageLinkContent>
      </DefaultLink>
      <DefaultLink>
        <PageLinkContent>Github</PageLinkContent>
      </DefaultLink>
      <a href="http://join.hubblr.io/">
        <PageLinkContent notificationNumber={3}>Office Münster</PageLinkContent>
      </a>
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
