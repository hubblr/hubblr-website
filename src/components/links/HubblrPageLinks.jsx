import React from 'react';
import { LocalizedLink as Link } from 'gatsby-theme-i18n';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import PageLinkContent from './PageLinkContent';

function HubblrPageLinks({ className }) {
  return (
    <div className="w-full overflow-hidden mt-4 pb-1">
      <div className={`flex flex-wrap justify-center -mr-5 ${className}`}>
        <Link to="/imprint" className="pr-5">
          <PageLinkContent>
            <FormattedMessage id="links.imprint" />
          </PageLinkContent>
        </Link>
        <Link to="/privacy" className="pr-5">
          <PageLinkContent>
            <FormattedMessage id="links.privacy-policy" />
          </PageLinkContent>
        </Link>
        <a href="https://github.com/hubblr/" className="pr-5">
          <PageLinkContent>
            <FormattedMessage id="links.github" />
          </PageLinkContent>
        </a>
        <a href="http://join.hubblr.io/" className="pr-5">
          <PageLinkContent notificationNumber={2}>
            <FormattedMessage id="links.jobs" />
          </PageLinkContent>
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
